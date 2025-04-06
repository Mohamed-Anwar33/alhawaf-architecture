"use client"

import { useState, useEffect } from "react"
import { Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if user is authenticated
    const auth = localStorage.getItem("isAuthenticated")
    setIsAuthenticated(auth === "true")
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/images/logo.svg" alt="الحواف المعمارية" className="h-16 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            <a href="/" className="px-3 py-2 text-gray-800 hover:text-secondary transition-colors">
              الرئيسية
            </a>
            <a href="/about" className="px-3 py-2 text-gray-800 hover:text-secondary transition-colors">
              من نحن
            </a>
            <a href="/services" className="px-3 py-2 text-gray-800 hover:text-secondary transition-colors">
              خدماتنا
            </a>
            <a href="/projects" className="px-3 py-2 text-gray-800 hover:text-secondary transition-colors">
              مشاريعنا
            </a>
            <a href="/blog" className="px-3 py-2 text-gray-800 hover:text-secondary transition-colors">
              المدونة
            </a>
            <a href="/contact" className="px-3 py-2 text-gray-800 hover:text-secondary transition-colors">
              اتصل بنا
            </a>

            {isAuthenticated ? (
              <Button asChild className="bg-primary hover:bg-secondary text-white mr-4">
                <a href="/admin/blog">
                  <User size={16} className="ml-2" />
                  لوحة التحكم
                </a>
              </Button>
            ) : (
              <Button asChild className="bg-primary hover:bg-secondary text-white mr-4">
                <a href="/contact">طلب عرض سعر</a>
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-800 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <a
              href="/"
              className="block px-3 py-2 text-gray-800 hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </a>
            <a
              href="/about"
              className="block px-3 py-2 text-gray-800 hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              من نحن
            </a>
            <a
              href="/services"
              className="block px-3 py-2 text-gray-800 hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              خدماتنا
            </a>
            <a
              href="/projects"
              className="block px-3 py-2 text-gray-800 hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              مشاريعنا
            </a>
            <a
              href="/blog"
              className="block px-3 py-2 text-gray-800 hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              المدونة
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 text-gray-800 hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              اتصل بنا
            </a>

            {isAuthenticated ? (
              <Button
                asChild
                className="w-full bg-primary hover:bg-secondary text-white mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <a href="/admin/blog">
                  <User size={16} className="ml-2" />
                  لوحة التحكم
                </a>
              </Button>
            ) : (
              <Button
                asChild
                className="w-full bg-primary hover:bg-secondary text-white mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <a href="/contact">طلب عرض سعر</a>
              </Button>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}

