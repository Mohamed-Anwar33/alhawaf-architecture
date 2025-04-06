// مكتبة لإدارة مقالات المدونة بشكل مركزي

import { blogPosts as initialPosts } from "@/app/blog/data"

// نوع بيانات المقال
export type BlogPost = {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  status: string
  image: string
}

// الحصول على المقالات من التخزين المحلي أو استخدام المقالات الافتراضية
export function getBlogPosts(): BlogPost[] {
  if (typeof window === "undefined") {
    return initialPosts
  }

  const savedPosts = localStorage.getItem("blogPosts")
  if (savedPosts) {
    return JSON.parse(savedPosts)
  }

  // تخزين المقالات الافتراضية إذا لم تكن موجودة
  localStorage.setItem("blogPosts", JSON.stringify(initialPosts))
  return initialPosts
}

// الحصول على المقالات المنشورة فقط
export function getPublishedPosts(): BlogPost[] {
  return getBlogPosts().filter((post) => post.status === "منشور")
}

// الحصول على مقال محدد بواسطة المعرف
export function getPostById(id: number): BlogPost | undefined {
  return getBlogPosts().find((post) => post.id === id)
}

// حفظ المقالات في التخزين المحلي
export function saveBlogPosts(posts: BlogPost[]): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("blogPosts", JSON.stringify(posts))
  }
}

// إضافة مقال جديد
export function addBlogPost(post: Omit<BlogPost, "id">): BlogPost {
  const posts = getBlogPosts()
  const newId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1

  const newPost: BlogPost = {
    ...post,
    id: newId,
  }

  saveBlogPosts([...posts, newPost])
  return newPost
}

// تحديث مقال موجود
export function updateBlogPost(id: number, updatedPost: Partial<BlogPost>): BlogPost | null {
  const posts = getBlogPosts()
  const postIndex = posts.findIndex((p) => p.id === id)

  if (postIndex === -1) {
    return null
  }

  const updatedPosts = [...posts]
  updatedPosts[postIndex] = {
    ...updatedPosts[postIndex],
    ...updatedPost,
  }

  saveBlogPosts(updatedPosts)
  return updatedPosts[postIndex]
}

// حذف مقال
export function deleteBlogPost(id: number): boolean {
  const posts = getBlogPosts()
  const updatedPosts = posts.filter((post) => post.id !== id)

  if (updatedPosts.length === posts.length) {
    return false
  }

  saveBlogPosts(updatedPosts)
  return true
}

// البحث في المقالات
export function searchBlogPosts(query: string): BlogPost[] {
  if (!query.trim()) {
    return getPublishedPosts()
  }

  const lowercaseQuery = query.toLowerCase()
  return getPublishedPosts().filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.category.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery),
  )
}

// الحصول على المقالات حسب التصنيف
export function getPostsByCategory(category: string): BlogPost[] {
  return getPublishedPosts().filter((post) => post.category === category)
}

// الحصول على المقالات حسب الوسم
export function getPostsByTag(tag: string): BlogPost[] {
  const lowercaseTag = tag.toLowerCase()
  return getPublishedPosts().filter(
    (post) =>
      post.content.toLowerCase().includes(lowercaseTag) ||
      post.title.toLowerCase().includes(lowercaseTag) ||
      post.category.toLowerCase().includes(lowercaseTag),
  )
}

