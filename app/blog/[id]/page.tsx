"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getPostById, getPublishedPosts } from "@/lib/blog-store"
import type { BlogPost } from "@/lib/blog-store"

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const postId = Number(params.id)

    // Load post data
    const loadPost = () => {
      const foundPost = getPostById(postId)

      if (foundPost && foundPost.status === "منشور") {
        setPost(foundPost)

        // Find related posts (same category)
        const allPosts = getPublishedPosts()
        const related = allPosts.filter((p) => p.id !== postId && p.category === foundPost.category).slice(0, 3)

        setRelatedPosts(related)
      } else {
        // Post not found or not published, redirect to blog page
        router.push("/blog")
      }

      setIsLoading(false)
    }

    loadPost()

    // Add event listener for storage changes
    const handleStorageChange = () => {
      loadPost()
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [params.id, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!post) {
    return null
  }

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center">
                <Calendar className="ml-2 h-5 w-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Tag className="ml-2 h-5 w-5" />
                <span>{post.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="prose prose-lg max-w-none">
                  {/* Split content into paragraphs */}
                  {post.content.split(". ").map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph.trim() + (index < post.content.split(". ").length - 1 ? "." : "")}
                    </p>
                  ))}
                </div>

                {/* Back to Blog */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Button asChild variant="outline">
                    <Link href="/blog" className="flex items-center">
                      <ArrowRight className="ml-2 h-4 w-4" />
                      العودة إلى المدونة
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              {/* Author */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4 text-primary">الكاتب</h3>
                <div className="flex items-center">
                  <div className="bg-gray-200 rounded-full p-3 ml-4">
                    <User className="h-8 w-8 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">فريق الحواف المعمارية</h4>
                    <p className="text-gray-600 text-sm">فريق متخصص في مجال العمارة والتصميم والبناء</p>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-primary">مقالات ذات صلة</h3>
                  <ul className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <li key={relatedPost.id}>
                        <Link href={`/blog/${relatedPost.id}`} className="flex gap-3 group">
                          <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                            <Image
                              src={relatedPost.image || "/placeholder.svg"}
                              alt={relatedPost.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium group-hover:text-secondary transition-colors">
                              {relatedPost.title}
                            </h4>
                            <p className="text-gray-500 text-sm">{relatedPost.date}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

