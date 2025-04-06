import Image from "next/image"
import { CheckCircle, Award, Clock, Users } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">من نحن</h1>
          <p className="text-xl max-w-3xl mx-auto">
            شركة الحواف المعمارية للتعمير... خبرة رائدة في تنفيذ المشاريع الإنشائية والحلول المعمارية الحديثة
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/building.png" alt="الحواف المعمارية" fill className="object-cover" />
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h2 className="text-3xl font-bold mb-6 text-primary">قصة نجاحنا</h2>
              <p className="text-lg mb-6 text-gray-700">
                تأسست شركة الحواف المعمارية للتعمير بهدف تقديم خدمات متكاملة في مجال المقاولات والتشطيبات بأعلى معايير
                الجودة والاحترافية.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                منذ تأسيسها، نجحت الشركة في تنفيذ العديد من المشاريع المتميزة التي تعكس خبرتها وقدرتها على تلبية
                احتياجات العملاء وتحقيق تطلعاتهم.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                تتميز الشركة بفريق عمل محترف من المهندسين والفنيين ذوي الخبرة العالية، بالإضافة إلى استخدام أحدث
                التقنيات والمعدات في تنفيذ المشاريع.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-primary">رؤيتنا</h2>
              <p className="text-lg text-gray-700">
                أن نكون الشركة الرائدة في مجال المقاولات والتشطيبات على مستوى المملكة، من خلال تقديم خدمات متميزة تجمع
                بين الجودة والإبداع والاستدامة.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-primary">رسالتنا</h2>
              <p className="text-lg text-gray-700">
                تقديم حلول إنشائية ومعمارية متكاملة تلبي احتياجات العملاء وتفوق توقعاتهم، مع الالتزام بأعلى معايير
                الجودة والسلامة والاستدامة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">قيمنا</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              نلتزم بمجموعة من القيم التي توجه أعمالنا وتعاملاتنا مع العملاء والشركاء
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <CheckCircle size={48} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">الجودة</h3>
              <p className="text-gray-700 text-center">نلتزم بتقديم أعلى معايير الجودة في جميع مشاريعنا وخدماتنا.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Award size={48} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">الاحترافية</h3>
              <p className="text-gray-700 text-center">نعمل بمهنية واحترافية عالية في جميع مراحل تنفيذ المشاريع.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Clock size={48} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">الالتزام</h3>
              <p className="text-gray-700 text-center">نلتزم بالمواعيد المحددة وتسليم المشاريع في الوقت المتفق عليه.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Users size={48} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">رضا العملاء</h3>
              <p className="text-gray-700 text-center">نسعى دائماً لتحقيق رضا العملاء وتلبية احتياجاتهم وتطلعاتهم.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

