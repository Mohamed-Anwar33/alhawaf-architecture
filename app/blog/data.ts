// Define blog post type
export type BlogPost = {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  status: string
  image: string
}

// Sample blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "أفضل الممارسات في تصميم واجهات المستخدم الحديثة",
    excerpt: "اكتشف أحدث الاتجاهات والاستراتيجيات لتحسين تجربة المستخدم من خلال تصميم واجهات جذابة وسهلة الاستخدام.",
    content:
      "اكتشف أحدث الاتجاهات والاستراتيجيات لتحسين تجربة المستخدم من خلال تصميم واجهات جذابة وسهلة الاستخدام. يعد تصميم واجهة المستخدم من أهم العناصر التي تؤثر على نجاح أي مشروع رقمي، حيث يساهم في تحسين تجربة المستخدم وزيادة معدلات التحويل. في هذا المقال، سنستعرض أفضل الممارسات والاتجاهات الحديثة في تصميم واجهات المستخدم، بما في ذلك استخدام الألوان المناسبة، والتصميم البسيط والمريح للعين، وتوفير تجربة متسقة عبر مختلف الأجهزة.",
    category: "التصميم",
    date: "12 أبريل 2024",
    status: "منشور",
    image: "/images/project4.jpeg",
  },
  {
    id: 2,
    title: "كيفية إدارة المشاريع المعمارية بكفاءة عالية",
    excerpt: "تعلم كيفية تنظيم وتخطيط وتنفيذ المشاريع المعمارية بنجاح، مع التركيز على إدارة الموارد والجداول الزمنية.",
    content:
      "تعلم كيفية تنظيم وتخطيط وتنفيذ المشاريع المعمارية بنجاح، مع التركيز على إدارة الموارد والجداول الزمنية. تعتبر إدارة المشاريع المعمارية من التحديات الكبيرة التي تواجه المهندسين والمصممين، حيث تتطلب التنسيق بين العديد من الأطراف والموارد. في هذا المقال، سنقدم مجموعة من النصائح والاستراتيجيات التي تساعد في إدارة المشاريع المعمارية بكفاءة عالية، بدءًا من مرحلة التخطيط وحتى التسليم النهائي للمشروع.",
    category: "الإدارة",
    date: "8 أبريل 2024",
    status: "منشور",
    image: "/images/project3.jpeg",
  },
  {
    id: 3,
    title: "تحليل التكاليف وتقدير الميزانيات في المشاريع الهندسية",
    excerpt: "دليل شامل حول كيفية تقدير التكاليف وإدارة الميزانيات في المشاريع الهندسية لضمان تحقيق الأهداف المالية.",
    content:
      "دليل شامل حول كيفية تقدير التكاليف وإدارة الميزانيات في المشاريع الهندسية لضمان تحقيق الأهداف المالية. يعد تحليل التكاليف وتقدير الميزانيات من أهم عوامل نجاح المشاريع الهندسية، حيث يساعد في تجنب المفاجآت المالية وضمان استمرارية المشروع. في هذا المقال، سنتناول الطرق العلمية لتقدير تكاليف المشاريع الهندسية، وكيفية إدارة الميزانية بشكل فعال، والاستراتيجيات المختلفة للتعامل مع التغييرات والمخاطر المالية.",
    category: "المال",
    date: "3 أبريل 2024",
    status: "منشور",
    image: "/images/building2.png",
  },
  {
    id: 4,
    title: "أفكار ملهمة لتصميم داخلي فريد وعصري",
    excerpt: "استلهم أفكارًا جديدة ومبتكرة لتصميم داخلي يعكس شخصيتك ويحسن من جودة حياتك في المنزل.",
    content:
      "استلهم أفكارًا جديدة ومبتكرة لتصميم داخلي يعكس شخصيتك ويحسن من جودة حياتك في المنزل. يلعب التصميم الداخلي دورًا مهمًا في تحديد طابع المنزل وخلق بيئة مريحة وجذابة للعيش. في هذا المقال، سنستعرض مجموعة من الأفكار الملهمة للتصميم الداخلي العصري، بما في ذلك اختيار الألوان المناسبة، وتنسيق الأثاث، واستخدام الإضاءة بشكل فعال، وإضافة لمسات شخصية تعكس ذوقك وشخصيتك.",
    category: "التصميم الداخلي",
    date: "28 مارس 2024",
    status: "منشور",
    image: "/images/interior1.jpeg",
  },
  {
    id: 5,
    title: "أحدث الاتجاهات في تصميم الفضاءات الخارجية للمنازل",
    excerpt: "اكتشف كيف يمكنك تحويل المساحات الخارجية لمنزلك إلى أماكن جذابة وعملية باستخدام أحدث التصاميم والتقنيات.",
    content:
      "اكتشف كيف يمكنك تحويل المساحات الخارجية لمنزلك إلى أماكن جذابة وعملية باستخدام أحدث التصاميم والتقنيات. تعتبر المساحات الخارجية امتدادًا طبيعيًا للمنزل، وتوفر فرصة للاستمتاع بالهواء الطلق وقضاء أوقات ممتعة مع العائلة والأصدقاء. في هذا المقال، سنتناول أحدث الاتجاهات في تصميم الفضاءات الخارجية، بما في ذلك تصميم الحدائق، وإنشاء مناطق للجلوس والترفيه، واختيار المواد المناسبة التي تتحمل العوامل الجوية المختلفة.",
    category: "التصميم الخارجي",
    date: "22 مارس 2024",
    status: "منشور",
    image: "/images/exterior1.jpeg",
  },
]

