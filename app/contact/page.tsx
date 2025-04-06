"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import Header from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "تم إرسال الرسالة بنجاح",
        description: "سنقوم بالرد عليك في أقرب وقت ممكن",
        variant: "default",
      })
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">اتصل بنا</h1>
          <p className="text-xl max-w-3xl mx-auto">
            نسعد بتواصلكم معنا واستفساراتكم، وسنقوم بالرد عليكم في أقرب وقت ممكن
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary rounded-full p-4">
                  <Phone size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">اتصل بنا</h3>
              <p className="text-gray-700">+966 50 000 0000</p>
              <p className="text-gray-700">+966 11 000 0000</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary rounded-full p-4">
                  <Mail size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">راسلنا</h3>
              <p className="text-gray-700">hawafarch.com@gmail.com</p>
              <p className="text-gray-700">info@alhawaf.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary rounded-full p-4">
                  <MapPin size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">موقعنا</h3>
              <p className="text-gray-700">المملكة العربية السعودية، الرياض</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary rounded-full p-4">
                  <Clock size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">ساعات العمل</h3>
              <p className="text-gray-700">الأحد - الخميس: 8:00 ص - 5:00 م</p>
              <p className="text-gray-700">الجمعة - السبت: مغلق</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">تواصل معنا</h2>
              <p className="text-lg text-gray-700 mb-8">
                يمكنكم التواصل معنا وإرسال استفساراتكم أو طلباتكم من خلال تعبئة النموذج التالي، وسنقوم بالرد عليكم في
                أقرب وقت ممكن.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      الاسم
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="أدخل اسمك الكامل"
                      className="w-full"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      رقم الجوال
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="أدخل رقم الجوال"
                      className="w-full"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    البريد الإلكتروني
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="أدخل البريد الإلكتروني"
                    className="w-full"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    الموضوع
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="أدخل عنوان الموضوع"
                    className="w-full"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    الرسالة
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="اكتب رسالتك هنا"
                    className="w-full"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                </Button>
              </form>
            </div>

            <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6554831255403!2d46.675291075484105!3d24.713454448341326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xa11ce0f930dd0c36!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1682345678901!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

