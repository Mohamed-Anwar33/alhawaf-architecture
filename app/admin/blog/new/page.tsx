"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, ImagePlus, Save } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { addBlogPost } from "@/lib/blog-store"
import type { BlogPost } from "@/lib/blog-store"

export default function NewBlogPost() {
  const router = useRouter()
  const { toast } = useToast()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    status: "مسودة",
  })
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem("isAuthenticated")
    if (auth !== "true") {
      router.push("/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Format current date
      const today = new Date()
      const day = today.getDate()
      const month = today.toLocaleString("ar-SA", { month: "long" })
      const year = today.getFullYear()
      const formattedDate = `${day} ${month} ${year}`

      // Create image URL (in a real app, you'd upload to a server)
      let imageUrl = "/placeholder.svg?height=300&width=500"

      if (imagePreview) {
        // In a real app, you'd upload the image to a server
        // For this demo, we'll use a default image if it's a data URL
        imageUrl = imagePreview.startsWith("data:") ? "/images/project1.jpeg" : imagePreview
      }

      // Create new post
      const newPost: Omit<BlogPost, "id"> = {
        title: formData.title,
        excerpt: formData.excerpt || formData.content.substring(0, 150) + "...",
        content: formData.content,
        category: formData.category,
        date: formattedDate,
        status: formData.status,
        image: imageUrl,
      }

      // Add post
      addBlogPost(newPost)

      // Trigger storage event for other components to update
      window.dispatchEvent(new Event("storage"))

      // Show success message
      toast({
        title: "تم إضافة المقال بنجاح",
        description: formData.status === "منشور" ? "تم نشر المقال وهو متاح الآن للقراء" : "تم حفظ المقال كمسودة",
        variant: "default",
      })

      // Redirect to admin blog page
      router.push("/admin/blog")
    } catch (error) {
      console.error("Error saving post:", error)
      toast({
        title: "حدث خطأ",
        description: "لم يتم حفظ المقال، يرجى المحاولة مرة أخرى",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isAuthenticated) {
    return null // Don't render anything until authentication check is complete
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <section className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <Link href="/admin/blog" className="flex items-center text-gray-200 hover:text-white">
              <ArrowRight className="ml-2 h-4 w-4" />
              العودة إلى المقالات
            </Link>
            <h1 className="text-2xl font-bold mr-4">إضافة مقال جديد</h1>
          </div>
        </div>
      </section>

      {/* New Blog Post Form */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <Label htmlFor="title">عنوان المقال</Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="أدخل عنوان المقال"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="excerpt">ملخص المقال</Label>
                    <Textarea
                      id="excerpt"
                      name="excerpt"
                      placeholder="اكتب ملخصاً قصيراً للمقال (اختياري)"
                      className="h-24"
                      value={formData.excerpt}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="content">محتوى المقال</Label>
                    <Textarea
                      id="content"
                      name="content"
                      placeholder="اكتب محتوى المقال هنا..."
                      className="min-h-[300px]"
                      value={formData.content}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="image">صورة المقال</Label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-md">
                      <div className="space-y-1 text-center">
                        {imagePreview ? (
                          <div className="relative w-full h-40 mb-4">
                            <img
                              src={imagePreview || "/placeholder.svg"}
                              alt="معاينة الصورة"
                              className="h-full mx-auto object-cover rounded-md"
                            />
                          </div>
                        ) : (
                          <ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
                        )}
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="image-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-secondary hover:text-secondary/80"
                          >
                            <span>رفع صورة</span>
                            <input
                              id="image-upload"
                              name="image"
                              type="file"
                              className="sr-only"
                              accept="image/*"
                              onChange={handleImageChange}
                            />
                          </label>
                          <p className="pr-1">أو اسحب وأفلت</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF حتى 5MB</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category">التصنيف</Label>
                    <Select onValueChange={(value) => handleSelectChange("category", value)} value={formData.category}>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="اختر التصنيف" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="التصميم المعماري">التصميم المعماري</SelectItem>
                        <SelectItem value="مواد البناء">مواد البناء</SelectItem>
                        <SelectItem value="التشطيبات الداخلية">التشطيبات الداخلية</SelectItem>
                        <SelectItem value="تقنيات البناء">تقنيات البناء</SelectItem>
                        <SelectItem value="الاستدامة">الاستدامة</SelectItem>
                        <SelectItem value="التصميم">التصميم</SelectItem>
                        <SelectItem value="الإدارة">الإدارة</SelectItem>
                        <SelectItem value="المال">المال</SelectItem>
                        <SelectItem value="التصميم الداخلي">التصميم الداخلي</SelectItem>
                        <SelectItem value="التصميم الخارجي">التصميم الخارجي</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="status">الحالة</Label>
                    <Select onValueChange={(value) => handleSelectChange("status", value)} value={formData.status}>
                      <SelectTrigger id="status">
                        <SelectValue placeholder="اختر الحالة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="مسودة">مسودة</SelectItem>
                        <SelectItem value="منشور">منشور</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="w-full bg-primary hover:bg-secondary" disabled={isSubmitting}>
                      <Save className="ml-2 h-4 w-4" />
                      {isSubmitting ? "جاري الحفظ..." : "حفظ المقال"}
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

