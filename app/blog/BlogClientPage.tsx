"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { getPublishedPosts, searchBlogPosts } from "@/lib/blog-store"
import type { BlogPost } from "@/lib/blog-store"
import { useSearchParams } from "next/navigation"

export default function BlogClientPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")
  const tagParam = searchParams.get("tag")

  const [posts, setPosts] = useState<BlogPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const postsPerPage = 3

  // Load posts
  useEffect(() => {
    const loadPosts = () => {
      const allPosts = getPublishedPosts()
      setPosts(allPosts)

      // Apply initial filters if category or tag is in URL
      if (categoryParam) {
        setFilteredPosts(allPosts.filter((post) => post.category === categoryParam))
      } else if (tagParam) {
        setFilteredPosts(
          allPosts.filter(
            (post) =>
              post.content.toLowerCase().includes(tagParam.toLowerCase()) ||
              post.title.toLowerCase().includes(tagParam.toLowerCase()) ||
              post.category.toLowerCase().includes(tagParam.toLowerCase()),
          ),
        )
      } else {
        setFilteredPosts(allPosts)
      }

      setIsLoading(false)
    }

    loadPosts()

    // Add event listener for storage changes
    const handleStorageChange = () => {
      loadPosts()
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [categoryParam, tagParam])

  // Handle search
  useEffect(() => {
    if (searchTerm.trim() === "") {
      // Reset to initial filter if search is cleared
      if (categoryParam) {
        setFilteredPosts(posts.filter((post) => post.category === categoryParam))
      } else if (tagParam) {
        setFilteredPosts(
          posts.filter(
            (post) =>
              post.content.toLowerCase().includes(tagParam.toLowerCase()) ||
              post.title.toLowerCase().includes(tagParam.toLowerCase()) ||
              post.category.toLowerCase().includes(tagParam.toLowerCase()),
          ),
        )
      } else {
        setFilteredPosts(posts)
      }
    } else {
      setFilteredPosts(searchBlogPosts(searchTerm))
    }

    // Reset to first page when search changes
    setCurrentPage(1)
  }, [searchTerm, posts, categoryParam, tagParam])

  // Get unique categories
  const categories = [...new Set(posts.map((post) => post.category))]

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  // Handle search input
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search is already handled by the useEffect
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">المدونة</h1>
          <p className="text-xl max-w-3xl mx-auto">آخر المقالات والأخبار في مجال العمارة والتصميم والبناء</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {currentPosts.length > 0 ? (
                currentPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                    <div className="relative h-64">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-4">{post.category}</Badge>
                      <h2 className="text-2xl font-bold mb-2 text-primary hover:text-secondary transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h2>
                      <p className="text-gray-700 mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">{post.date}</span>
                        <Button asChild variant="secondary">
                          <Link href={`/blog/${post.id}`}>قراءة المزيد</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <p className="text-gray-500 text-lg">لا توجد مقالات متطابقة مع البحث</p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                  <nav className="flex items-center space-x-2 space-x-reverse">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white"
                      onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                    >
                      <span className="sr-only">الصفحة السابقة</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </Button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                      <Button
                        key={number}
                        variant="outline"
                        size="sm"
                        className={currentPage === number ? "bg-primary text-white" : "bg-white"}
                        onClick={() => setCurrentPage(number)}
                      >
                        {number}
                      </Button>
                    ))}

                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white"
                      onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                    >
                      <span className="sr-only">الصفحة التالية</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="m15 18-6-6 6-6"></path>
                      </svg>
                    </Button>
                  </nav>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              {/* Search */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4 text-primary">بحث</h3>
                <form onSubmit={handleSearch} className="flex">
                  <Input
                    placeholder="ابحث في المدونة..."
                    className="rounded-l-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button type="submit" className="rounded-r-none bg-primary hover:bg-secondary">
                    <Search size={18} />
                  </Button>
                </form>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4 text-primary">التصنيفات</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog?category=${category}`}
                        className="flex justify-between items-center hover:text-secondary transition-colors"
                      >
                        <span>{category}</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {posts.filter((post) => post.category === category).length}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4 text-primary">أحدث المقالات</h3>
                <ul className="space-y-4">
                  {posts.slice(0, 3).map((post) => (
                    <li key={post.id}>
                      <Link href={`/blog/${post.id}`} className="flex gap-3 group">
                        <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover:text-secondary transition-colors">{post.title}</h4>
                          <p className="text-gray-500 text-sm">{post.date}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary">الوسوم</h3>
                <div className="flex flex-wrap gap-2">
                  {["تصميم", "بناء", "تشطيبات", "استدامة", "ديكور", "مواد", "تقنيات", "معمار"].map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog?tag=${tag}`}
                      className="bg-gray-100 hover:bg-secondary hover:text-white px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

