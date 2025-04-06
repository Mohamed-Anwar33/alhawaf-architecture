"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

interface ContactFormProps {
  title?: string
  buttonText?: string
}

export default function ContactForm({ title = "تواصل معنا", buttonText = "إرسال" }: ContactFormProps) {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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
        message: "",
      })
    }, 1000)
  }

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            name="name"
            placeholder="الاسم"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white/80 backdrop-blur-sm"
          />
        </div>
        <div>
          <Input
            name="phone"
            placeholder="رقم الجوال"
            value={formData.phone}
            onChange={handleChange}
            required
            className="bg-white/80 backdrop-blur-sm"
          />
        </div>
        <div>
          <Input
            name="email"
            type="email"
            placeholder="البريد الإلكتروني"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white/80 backdrop-blur-sm"
          />
        </div>
        <div>
          <Textarea
            name="message"
            placeholder="رسالتك"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-white/80 backdrop-blur-sm"
            rows={3}
          />
        </div>
        <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white" disabled={isSubmitting}>
          {isSubmitting ? "جاري الإرسال..." : buttonText}
        </Button>
      </form>
    </div>
  )
}

