"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import { Footer } from "@/components/footer"

// Project types
type ProjectCategory = "الكل" | "سكني" | "تجاري" | "حكومي" | "تشطيبات داخلية"
type Project = {
  id: number
  title: string
  location: string
  description: string
  category: ProjectCategory
  year: string
  image: string
}

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "فيلا سكنية فاخرة",
    location: "الرياض - حي السلامة",
    description:
      "تصميم وتنفيذ فيلا سكنية فاخرة بمساحة 500 متر مربع، تتكون من دورين وملحق علوي، مع تشطيبات فاخرة وتصميم عصري.",
    category: "سكني",
    year: "2023",
    image: "/images/project1.jpeg",
  },
  {
    id: 2,
    title: "برج تجاري",
    location: "جدة - حي الأعمال",
    description: "تنفيذ برج تجاري مكون من 15 طابقاً، يضم مكاتب ومحلات تجارية، بتصميم عصري وواجهات زجاجية مميزة.",
    category: "تجاري",
    year: "2022",
    image: "/images/project2.jpeg",
  },
  {
    id: 3,
    title: "مبنى إداري",
    location: "الرياض - حي العليا",
    description: "تصميم وتنفيذ مبنى إداري مكون من 10 طوابق، بتصميم عصري وواجهات زجاجية، مع أنظمة ذكية للمباني.",
    category: "تجاري",
    year: "2021",
    image: "/images/building.png",
  },
  {
    id: 4,
    title: "تشطيبات داخلية فاخرة",
    location: "جدة - حي الشاطئ",
    description: "تنفيذ أعمال التشطيبات الداخلية لفيلا سكنية فاخرة، شاملة الديكورات والأرضيات والأسقف والإضاءة.",
    category: "تشطيبات داخلية",
    year: "2023",
    image: "/images/hero2.png",
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("الكل")
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 3

  // Filter projects by category
  const filteredProjects =
    activeCategory === "الكل" ? projectsData : projectsData.filter((project) => project.category === activeCategory)

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">مشاريعنا</h1>
          <p className="text-xl max-w-3xl mx-auto">
            نفخر بتنفيذ العديد من المشاريع المتميزة التي تعكس خبرتنا وجودة أعمالنا
          </p>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {(["الكل", "سكني", "تجاري", "حكومي", "تشطيبات داخلية"] as ProjectCategory[]).map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category
                    ? "bg-primary hover:bg-secondary"
                    : "bg-white hover:bg-secondary hover:text-white"
                }
                onClick={() => {
                  setActiveCategory(category)
                  setCurrentPage(1)
                }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg project-card"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.location}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </span>
                    <span className="text-gray-600 text-sm">{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2 space-x-reverse">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white"
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
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
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white"
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
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

          {currentProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">لا توجد مشاريع في هذه الفئة حالياً</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

