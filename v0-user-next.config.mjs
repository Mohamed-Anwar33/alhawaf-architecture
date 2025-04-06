/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // تعيين وضع البناء إلى 'export' لإنشاء موقع ثابت
  images: {
    unoptimized: true, // تعطيل تحسين الصور لدعم البناء الثابت
  },
  trailingSlash: true, // إضافة شرطة مائلة في نهاية عناوين URL
};

export default nextConfig;

