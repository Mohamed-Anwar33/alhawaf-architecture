import Image from "next/image"
import Link from "next/link"
import { Building2, Hammer, Ruler, PenTool, ChevronLeft, Users, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - تم إعادة تنظيمه ليضم نموذج التواصل */}
      <section className="hero-section py-16 md:py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* النموذج على اليسار */}
            <div className="md:w-1/2 order-2 md:order-1 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <ContactForm title="طلب استشارة مجانية" buttonText="إرسال الطلب" />
            </div>

            {/* النص والزر على اليمين */}
            <div className="md:w-1/2 order-1 md:order-2 text-center md:text-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">نبني بفخامة... نصنع الاستدامة</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto md:mx-0">
                شركة الحواف المعمارية للتعمير... خبرة رائدة في تنفيذ المشاريع الإنشائية والحلول المعمارية الحديثة
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                <Link href="/services">تعرف على خدماتنا</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-primary">من نحن</h2>
              <p className="text-lg mb-6 text-gray-700">
                شركة الحواف المعمارية للتعمير... خبرة رائدة في تنفيذ المشاريع الإنشائية والحلول المعمارية الحديثة التي
                تجمع بين الفخامة والاستدامة.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                نسعى دائماً لتقديم أفضل الخدمات في مجال المقاولات والتشطيبات بأعلى معايير الجودة والاحترافية، مع الالتزام
                بالمواعيد المحددة وتحقيق رضا العملاء.
              </p>
              <Button asChild className="bg-primary hover:bg-secondary text-white">
                <Link href="/about">
                  المزيد عن الشركة
                  <ChevronLeft className="mr-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/building.png" alt="الحواف المعمارية" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - تم تقليل المسافة */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-primary">خدماتنا</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              نقدم مجموعة متكاملة من الخدمات الإنشائية والمعمارية بأعلى معايير الجودة والاحترافية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow service-card">
              <div className="flex justify-center mb-4">
                <Building2 size={48} className="text-primary service-icon" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">مقاولات عامة</h3>
              <p className="text-gray-700 text-center">
                تنفيذ مشاريع المباني السكنية والتجارية بكافة أنواعها وأحجامها بأعلى معايير الجودة.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow service-card">
              <div className="flex justify-center mb-4">
                <Hammer size={48} className="text-primary service-icon" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">تشطيبات داخلية وخارجية</h3>
              <p className="text-gray-700 text-center">
                تنفيذ أعمال التشطيبات الداخلية والخارجية بأحدث التصاميم والخامات عالية الجودة.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow service-card">
              <div className="flex justify-center mb-4">
                <Ruler size={48} className="text-primary service-icon" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">إدارة المشاريع</h3>
              <p className="text-gray-700 text-center">
                إدارة المشاريع الإنشائية بكفاءة عالية وضمان تنفيذها في الوقت المحدد وبالميزانية المتفق عليها.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow service-card">
              <div className="flex justify-center mb-4">
                <PenTool size={48} className="text-primary service-icon" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">تصميم معماري</h3>
              <p className="text-gray-700 text-center">
                تصميم المباني والمنشآت بأحدث البرامج والتقنيات مع مراعاة الجوانب الجمالية والوظيفية.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-primary hover:bg-secondary text-white">
              <Link href="/services">
                عرض جميع الخدمات
                <ChevronLeft className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-primary">مشاريعنا</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              نفخر بتنفيذ العديد من المشاريع المتميزة التي تعكس خبرتنا وجودة أعمالنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Project 1 */}
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg project-card">
              <div className="relative h-64 overflow-hidden">
                <Image src="/images/project1.jpeg" alt="مشروع فيلا سكنية" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">فيلا سكنية فاخرة</h3>
                <p className="text-gray-700 text-sm">الرياض - حي السلامة</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg project-card">
              <div className="relative h-64 overflow-hidden">
                <Image src="/images/project2.jpeg" alt="مشروع برج تجاري" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">برج تجاري</h3>
                <p className="text-gray-700 text-sm">جدة - حي الأعمال</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg project-card">
              <div className="relative h-64 overflow-hidden">
                <Image src="/images/hero1.png" alt="مشروع مجمع سكني" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">مجمع سكني</h3>
                <p className="text-gray-700 text-sm">الدمام - حي الشاطئ</p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg project-card">
              <div className="relative h-64 overflow-hidden">
                <Image src="/images/hero3.png" alt="مشروع مركز تجاري" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">مركز تجاري</h3>
                <p className="text-gray-700 text-sm">الرياض - طريق الملك فهد</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-primary hover:bg-secondary text-white">
              <Link href="/projects">
                عرض جميع المشاريع
                <ChevronLeft className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-primary">آراء العملاء</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              ما يقوله عملاؤنا عن تجربتهم مع شركة الحواف المعمارية للتعمير
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary rounded-full p-2 ml-3">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold">محمد السعيد</h3>
                  <p className="text-sm text-gray-600">مالك فيلا سكنية</p>
                </div>
              </div>
              <p className="text-gray-700">
                "تعاملت مع شركة الحواف المعمارية في بناء فيلتي الخاصة، وكانت التجربة ممتازة من حيث الالتزام بالمواعيد
                وجودة التنفيذ والمتابعة المستمرة للمشروع."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary rounded-full p-2 ml-3">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold">سارة العتيبي</h3>
                  <p className="text-sm text-gray-600">مالكة مجمع تجاري</p>
                </div>
              </div>
              <p className="text-gray-700">
                "أشكر فريق شركة الحواف المعمارية على احترافيتهم في تنفيذ مشروعي التجاري، حيث تم الانتهاء من المشروع قبل
                الموعد المحدد مع الحفاظ على أعلى معايير الجودة."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary rounded-full p-2 ml-3">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold">فهد الشمري</h3>
                  <p className="text-sm text-gray-600">مستثمر عقاري</p>
                </div>
              </div>
              <p className="text-gray-700">
                "تعاملت مع العديد من شركات المقاولات، لكن شركة الحواف المعمارية تميزت بالمصداقية والشفافية في التعامل،
                بالإضافة إلى جودة التنفيذ والتصميم المميز."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary rounded-full p-4 mb-4">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="font-bold mb-2">اتصل بنا</h3>
              <a href="tel:+966500000000" className="text-gray-700 hover:text-secondary">
                +966 50 000 0000
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-primary rounded-full p-4 mb-4">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="font-bold mb-2">راسلنا</h3>
              <a href="mailto:hawafarch.com@gmail.com" className="text-gray-700 hover:text-secondary">
                hawafarch.com@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-primary rounded-full p-4 mb-4">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="font-bold mb-2">موقعنا</h3>
              <p className="text-gray-700">الرياض، حي السلامة، شارع الأمير محمد بن سلمان</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

