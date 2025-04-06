import { Building2, Hammer, Ruler, PenTool, Truck, Shield, Wrench, Paintbrush } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Contact Form */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Form on the left */}
            <div className="md:w-1/2 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <ContactForm title="طلب خدمة" buttonText="طلب الخدمة" />
            </div>

            {/* Content on the right */}
            <div className="md:w-1/2 text-center md:text-right">
              <h1 className="text-4xl font-bold mb-4">خدماتنا</h1>
              <p className="text-xl max-w-3xl mx-auto md:mx-0">
                نقدم مجموعة متكاملة من الخدمات الإنشائية والمعمارية بأعلى معايير الجودة والاحترافية
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <Building2 size={64} className="text-secondary" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-primary text-center">مقاولات عامة</h2>
              <p className="text-lg text-gray-700 mb-4">
                نقدم خدمات المقاولات العامة لتنفيذ مشاريع المباني السكنية والتجارية بكافة أنواعها وأحجامها بأعلى معايير
                الجودة.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="bg-secondary h-2 w-2 rounded-full ml-2"></span>
                  تنفيذ المباني السكنية (فلل، عمائر، مجمعات سكنية)
                </li>
                <li className="flex items-center">
                  <span className="bg-secondary h-2 w-2 rounded-full ml-2"></span>
                  تنفيذ المباني التجارية (مكاتب، محلات، مولات)
                </li>
                <li className="flex items-center">
                  <span className="bg-secondary h-2 w-2 rounded-full ml-2"></span>
                  تنفيذ المباني الحكومية والمؤسسية
                </li>
                <li className="flex items-center">
                  <span className="bg-secondary h-2 w-2 rounded-full ml-2"></span>
                  أعمال الهيكل الإنشائي والخرسانة
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <Hammer size={64} className="text-secondary" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-primary text-center">تشطيبات داخلية وخارجية</h2>
              <p className="text-lg text-gray-700 mb-4">
                نقدم خدمات التشطيبات الداخلية والخارجية بأحدث التصاميم والخامات عالية الجودة.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="bg-secondary h-2 w-2 rounded-full ml-2"></span>
                  أعمال الدهانات والديكورات
                </li>
                <li className="flex items-center">
                  <span className="bg-secondary h-2 w-2 rounded-full ml-2"></span>
                  تركيب الأرضيات والسيراميك والرخام
                </li>
                <li className="flex items-center">
                  <span className="bg-secondary h-2 w-2 rounded-full ml-2"></span>
                  تركيب الأسقف المستعارة والجبس
                </li>
                <li className="flex items-center">
                  <span className="bg-secondary h-2 w-2 rounded-full ml-2"></span>
                  تشطيب الواجهات الخارجية
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <Ruler size={64} className="text-secondary" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-primary text-center">إدارة المشاريع</h2>
              <p className="text-lg text-gray-700 mb-4">
                نقدم خدمات إدارة المشاريع الإنشائية بكفاءة عالية وضمان تنفيذها في الوقت المحدد وبالميزانية المتفق عليها.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="bg-secondary h-2 w-2 rounded-full ml-2"></span>
                  التخطيط والجدولة الزمنية للمشاريع
                </li>
                <li className="flex items-center">
                  <span className="bg-secondary h-2 w-2 rounded-full ml-2"></span>
                  إدارة الموارد والميزانيات
                </li>
                <li className="flex items-center">
                  <span className="bg-secondary h-2 w-2 rounded-full ml-2"></span>
                  متابعة وتقييم سير العمل
                </li>
                <li className="flex items-center">
                  <span className="bg-secondary h-2 w-2 rounded-full ml-2"></span>
                  ضمان الجودة ومراقبة المخاطر
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <PenTool size={64} className="text-secondary" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-primary text-center">تصميم معماري</h2>
              <p className="text-lg text-gray-700 mb-4">
                نقدم خدمات التصميم المعماري للمباني والمنشآت بأحدث البرامج والتقنيات مع مراعاة الجوانب الجمالية
                والوظيفية.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="bg-secondary h-2 w-2 rounded-full ml-2"></span>
                  تصميم المخططات المعمارية
                </li>
                <li className="flex items-center">
                  <span className="bg-secondary h-2 w-2 rounded-full ml-2"></span>
                  تصميم الواجهات الخارجية
                </li>
                <li className="flex items-center">
                  <span className="bg-secondary h-2 w-2 rounded-full ml-2"></span>
                  التصميم الداخلي والديكور
                </li>
                <li className="flex items-center">
                  <span className="bg-secondary h-2 w-2 rounded-full ml-2"></span>
                  تصميم المناظر ثلاثية الأبعاد
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Truck size={48} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">توريد مواد البناء</h3>
              <p className="text-gray-700 text-center">توفير وتوريد مواد البناء عالية الجودة من مصادر موثوقة.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Shield size={48} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">الصيانة والضمان</h3>
              <p className="text-gray-700 text-center">خدمات الصيانة الدورية والطارئة مع ضمان شامل على جميع الأعمال.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Wrench size={48} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">الأعمال الكهروميكانيكية</h3>
              <p className="text-gray-700 text-center">تنفيذ أعمال الكهرباء والسباكة والتكييف بأعلى معايير الجودة.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Paintbrush size={48} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">تنسيق الحدائق</h3>
              <p className="text-gray-700 text-center">تصميم وتنفيذ أعمال تنسيق الحدائق والمساحات الخارجية.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

