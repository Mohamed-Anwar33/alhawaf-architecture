import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "المدونة - الحواف المعمارية للتعمير",
  description: "آخر المقالات والأخبار في مجال العمارة والتصميم والبناء",
}

export default function BlogPage() {
  return <BlogClientPage />
}

