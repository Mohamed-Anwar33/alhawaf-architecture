"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

// This is a redirect page for the admin root
export default function AdminRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the admin blog page
    router.push("/admin/blog")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-gray-600">جاري إعادة التوجيه...</p>
      </div>
    </div>
  )
}

