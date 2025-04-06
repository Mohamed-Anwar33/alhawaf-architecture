import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">الصفحة غير موجودة</h2>
        <p className="text-gray-600 mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-primary hover:bg-secondary">
            <Link href="/">العودة إلى الصفحة الرئيسية</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/blog">تصفح المدونة</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

