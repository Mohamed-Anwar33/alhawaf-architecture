"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Calendar, Edit, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { getBlogPosts, deleteBlogPost } from "@/lib/blog-store"
import type { BlogPost } from "@/lib/blog-store"

export default function AdminBlogPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [postToDelete, setPostToDelete] = useState<number | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem("isAuthenticated")
    if (auth !== "true") {
      router.push("/login")
    } else {
      setIsAuthenticated(true)
    }

    // Load posts
    const loadPosts = () => {
      const allPosts = getBlogPosts()
      setPosts(allPosts)
    }

    loadPosts()
  }, [router])

  const filteredPosts = posts.filter((post) => post.title.includes(searchTerm) || post.category.includes(searchTerm))

  const handleDeletePost = () => {
    if (postToDelete) {
      const success = deleteBlogPost(postToDelete)

      if (success) {
        // Update local state
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postToDelete))

        // Trigger storage event for other components to update
        window.dispatchEvent(new Event("storage"))

        toast({
          title: "تم حذف المقال بنجاح",
          variant: "default",
        })
      } else {
        toast({
          title: "حدث خطأ",
          description: "لم يتم حذف المقال، يرجى المحاولة مرة أخرى",
          variant: "destructive",
        })
      }

      setPostToDelete(null)
      setDeleteDialogOpen(false)
    }
  }

  const confirmDelete = (id: number) => {
    setPostToDelete(id)
    setDeleteDialogOpen(true)
  }

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    router.push("/login")
    toast({
      title: "تم تسجيل الخروج بنجاح",
      variant: "default",
    })
  }

  if (!isAuthenticated) {
    return null // Don't render anything until authentication check is complete
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <section className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">لوحة التحكم</h1>
              <p className="text-gray-200">إدارة المدونة</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-4">
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
                <Link href="/admin/blog/new">
                  <Plus className="ml-2 h-4 w-4" />
                  إضافة مقال جديد
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/">العودة للموقع</Link>
              </Button>
              <Button variant="outline" className="bg-white text-primary hover:bg-gray-100" onClick={handleLogout}>
                تسجيل الخروج
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Management */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-primary mb-4 md:mb-0">المقالات</h2>
              <div className="w-full md:w-64">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    placeholder="بحث..."
                    className="pr-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">الصورة</TableHead>
                    <TableHead>العنوان</TableHead>
                    <TableHead>التصنيف</TableHead>
                    <TableHead>التاريخ</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead className="text-left">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell>
                        <div className="relative w-16 h-16 rounded-md overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>{post.category}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar size={14} className="ml-1 text-gray-500" />
                          {post.date}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            post.status === "منشور" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {post.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button asChild variant="outline" size="sm">
                            <Link href={`/admin/blog/edit/${post.id}`}>
                              <Edit size={14} className="ml-1" />
                              تعديل
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            onClick={() => confirmDelete(post.id)}
                          >
                            <Trash2 size={14} className="ml-1" />
                            حذف
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal size={16} />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem asChild>
                                <Link href={`/blog/${post.id}`}>عرض</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className="text-red-600 focus:text-red-600"
                                onClick={() => confirmDelete(post.id)}
                              >
                                حذف
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-8 text-gray-500">لا توجد مقالات تطابق البحث</div>
            )}
          </div>
        </div>
      </section>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>تأكيد الحذف</DialogTitle>
            <DialogDescription>
              هل أنت متأكد من رغبتك في حذف هذا المقال؟ لا يمكن التراجع عن هذا الإجراء.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-between sm:justify-between">
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              إلغاء
            </Button>
            <Button variant="destructive" onClick={handleDeletePost} className="bg-red-600 hover:bg-red-700">
              <Trash2 className="ml-2 h-4 w-4" />
              حذف
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

