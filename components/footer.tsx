// تعديل مكون Footer لحل مشكلة التكرار وجعل الأرقام والإيميلات قابلة للنقر وتكبير الشعار

// استخدم كلا النوعين من التصدير لضمان التوافق مع الاستيرادات الحالية
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <a href="/" className="inline-block mb-4">
              <img src="/images/logo.svg" alt="الحواف المعمارية" className="h-16 w-auto brightness-0 invert" />
            </a>
            <p className="text-sm mb-4">
              شركة الحواف المعمارية للتعمير... خبرة رائدة في تنفيذ المشاريع الإنشائية والحلول المعمارية الحديثة التي
              تجمع بين الفخامة والاستدامة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="hover:text-secondary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">فيسبوك</span>
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="sr-only">انستغرام</span>
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">تويتر</span>
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">لينكد إن</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-r-4 border-secondary pr-3">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-secondary transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-secondary transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-secondary transition-colors">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-secondary transition-colors">
                  مشاريعنا
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-secondary transition-colors">
                  المدونة
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-secondary transition-colors">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-r-4 border-secondary pr-3">خدماتنا</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="hover:text-secondary transition-colors">
                  مقاولات عامة
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-secondary transition-colors">
                  تشطيبات داخلية وخارجية
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-secondary transition-colors">
                  إدارة المشاريع
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-secondary transition-colors">
                  تصميم معماري
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-r-4 border-secondary pr-3">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 text-secondary"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+966500000000" className="hover:text-secondary transition-colors">
                  +966 50 000 0000
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 text-secondary"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:hawafarch.com@gmail.com" className="hover:text-secondary transition-colors">
                  hawafarch.com@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 mt-1 text-secondary"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>المملكة العربية السعودية، الرياض، حي السلامة، شارع الأمير محمد بن سلمان</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>© {currentYear} الحواف المعمارية للتعمير. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

// تصدير افتراضي أيضًا للتوافق مع الاستيرادات التي تستخدم الاستيراد الافتراضي
export default Footer

