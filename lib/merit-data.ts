export type Course = {
  id: string;
  title: string;
  titleAr: string;
  instructor: string;
  category: string;
  rating: number;
  students: number;
  price: number;
  thumbnail: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessons: number;
  duration: number;
  language: "English" | "Arabic" | "Bilingual";
  description: string;
  descriptionAr: string;
  curriculum: string[];
  requirements: string[];
};

export const COURSES: Course[] = [
  {
    id: "1",
    title: "Python for Beginners",
    titleAr: "بايثون للمبتدئين",
    instructor: "Ahmed Al-Rashid",
    category: "programming",
    rating: 4.9,
    students: 3240,
    price: 5,
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f5ae4e8a83f?w=400&h=240&fit=crop",
    level: "Beginner",
    lessons: 42,
    duration: 20,
    language: "English",
    description: "Learn Python from scratch with hands-on projects and real-world applications. Perfect for beginners.",
    descriptionAr: "تعلم بايثون من الصفر مع مشاريع عملية وتطبيقات حقيقية. مثالي للمبتدئين.",
    curriculum: [
      "Introduction to Python and Setup",
      "Variables, Data Types and Operators",
      "Control Flow: If, Loops and Functions",
      "Working with Lists, Dictionaries and Strings",
      "Object-Oriented Programming Basics"
    ],
    requirements: [
      "A computer with Python installed",
      "Basic understanding of programming concepts",
      "Text editor or IDE (VS Code recommended)",
      "2-3 hours per week for learning",
      "Willingness to practice with exercises"
    ]
  },
  {
    id: "2",
    title: "UI/UX Design Masterclass",
    titleAr: "تصميم واجهات المستخدم",
    instructor: "Sara Khalid",
    category: "design",
    rating: 4.8,
    students: 2100,
    price: 8,
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=240&fit=crop",
    level: "Intermediate",
    lessons: 36,
    duration: 18,
    language: "English",
    description: "Master UI/UX design principles with Figma and industry-standard tools. Create stunning interfaces.",
    descriptionAr: "أتقن مبادئ تصميم واجهات المستخدم باستخدام Figma والأدوات القياسية. ابتكر واجهات جميلة.",
    curriculum: [
      "Design Fundamentals and User Research",
      "Wireframing and Prototyping Techniques",
      "Figma Mastery: Tools and Workflows",
      "Visual Design and Typography",
      "User Testing and Iteration"
    ],
    requirements: [
      "Figma account (free tier available)",
      "Basic design software experience",
      "Understanding of user-centered design",
      "Adobe Creative Suite optional",
      "Portfolio of previous design work"
    ]
  },
  {
    id: "3",
    title: "Business Strategy",
    titleAr: "استراتيجية الأعمال",
    instructor: "Omar Nasser",
    category: "business",
    rating: 4.7,
    students: 1850,
    price: 10,
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop",
    level: "Intermediate",
    lessons: 28,
    duration: 16,
    language: "Bilingual",
    description: "Develop winning business strategies and understand market dynamics. Real case studies included.",
    descriptionAr: "طور استراتيجيات عمل فائزة وافهم ديناميكيات السوق. تتضمن حالات دراسية حقيقية.",
    curriculum: [
      "Strategic Planning Framework",
      "Market Analysis and Competition",
      "Business Model Canvas and Monetization",
      "Scaling and Growth Strategies",
      "Risk Management and Contingency Planning"
    ],
    requirements: [
      "Basic business acumen",
      "Understanding of market economics",
      "Experience in business or startups preferred",
      "Analytical mindset and problem-solving skills",
      "Access to industry reports and data"
    ]
  },
  {
    id: "4",
    title: "Web Development Bootcamp",
    titleAr: "تطوير الويب الشامل",
    instructor: "Yusuf Al-Farsi",
    category: "programming",
    rating: 4.9,
    students: 5600,
    price: 12,
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=240&fit=crop",
    level: "Beginner",
    lessons: 80,
    duration: 40,
    language: "English",
    description: "Complete web development bootcamp covering HTML, CSS, JavaScript, React and backend technologies.",
    descriptionAr: "برنامج تطوير ويب شامل يغطي HTML و CSS و JavaScript و React والتقنيات الخلفية.",
    curriculum: [
      "HTML5 and CSS3 Fundamentals",
      "JavaScript ES6+ and DOM Manipulation",
      "React Components and State Management",
      "Backend Development with Node.js",
      "Full Stack Deployment and DevOps"
    ],
    requirements: [
      "Basic programming knowledge",
      "Computer with modern browser",
      "Node.js and npm installed",
      "Command line familiarity",
      "20+ hours weekly commitment"
    ]
  },
  {
    id: "5",
    title: "Arabic Language Mastery",
    titleAr: "إتقان اللغة العربية",
    instructor: "Fatima Al-Zahra",
    category: "language",
    rating: 4.8,
    students: 4200,
    price: 6,
    thumbnail: "https://images.unsplash.com/photo-1455849318169-8ed266537dcd?w=400&h=240&fit=crop",
    level: "Beginner",
    lessons: 55,
    duration: 25,
    language: "Arabic",
    description: "Master Modern Standard Arabic with comprehensive lessons and cultural insights. Interactive sessions.",
    descriptionAr: "إتقان اللغة العربية الفصحى مع دروس شاملة ورؤى ثقافية. جلسات تفاعلية.",
    curriculum: [
      "Arabic Alphabet and Pronunciation",
      "Grammar Essentials and Verb Conjugation",
      "Reading and Writing Skills",
      "Conversational Arabic Practice",
      "Cultural Context and Native Insights"
    ],
    requirements: [
      "No prior Arabic knowledge required",
      "Audio equipment for listening exercises",
      "Commitment to daily practice",
      "Cultural curiosity and openness",
      "Language learning resources access"
    ]
  },
  {
    id: "6",
    title: "Calculus Fundamentals",
    titleAr: "أساسيات حساب التفاضل",
    instructor: "Dr. Hassan Malik",
    category: "math",
    rating: 4.6,
    students: 980,
    price: 7,
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=400&h=240&fit=crop",
    level: "Intermediate",
    lessons: 40,
    duration: 22,
    language: "English",
    description: "Understand calculus concepts from basics to advanced problem-solving with visual demonstrations.",
    descriptionAr: "افهم مفاهيم حساب التفاضل من الأساسيات إلى حل المشاكل المتقدمة مع عروض بصرية.",
    curriculum: [
      "Limits and Continuity Concepts",
      "Derivatives and Differentiation Rules",
      "Applications of Derivatives",
      "Integration and Antiderivatives",
      "Definite Integrals and Area Problems"
    ],
    requirements: [
      "Pre-calculus mathematics knowledge",
      "Graphing calculator or software",
      "Strong algebra fundamentals",
      "Patience with mathematical concepts",
      "Access to practice problem sets"
    ]
  },
  {
    id: "7",
    title: "Islamic Finance Basics",
    titleAr: "أساسيات التمويل الإسلامي",
    instructor: "Sheikh Abdullah",
    category: "islam",
    rating: 4.9,
    students: 3100,
    price: 5,
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=240&fit=crop",
    level: "Beginner",
    lessons: 30,
    duration: 14,
    language: "Bilingual",
    description: "Learn Islamic finance principles, Sharia compliance, and investment strategies. Practical guidance.",
    descriptionAr: "تعلم مبادئ التمويل الإسلامي والامتثال للشريعة واستراتيجيات الاستثمار. إرشادات عملية.",
    curriculum: [
      "Islamic Finance Principles and Sharia",
      "Halal Investment Products and Sukuk",
      "Islamic Banking and Financial Services",
      "Risk Management in Islamic Finance",
      "Real-World Case Studies and Applications"
    ],
    requirements: [
      "Understanding of basic finance concepts",
      "Interest in Islamic principles",
      "Basic accounting knowledge helpful",
      "Open-minded approach to alternative finance",
      "Access to Islamic finance resources"
    ]
  },
  {
    id: "8",
    title: "Data Science with Python",
    titleAr: "علم البيانات بالبايثون",
    instructor: "Nora Al-Sayed",
    category: "science",
    rating: 4.7,
    students: 2700,
    price: 15,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
    level: "Advanced",
    lessons: 60,
    duration: 35,
    language: "English",
    description: "Master data science with Python, machine learning models and data visualization. Real datasets included.",
    descriptionAr: "أتقن علم البيانات مع بايثون ونماذج التعلم الآلي وتصور البيانات. تتضمن مجموعات بيانات حقيقية.",
    curriculum: [
      "Data Analysis with Pandas and NumPy",
      "Data Visualization with Matplotlib and Seaborn",
      "Statistical Foundations and Hypothesis Testing",
      "Machine Learning Algorithms and Models",
      "Deep Learning and Neural Networks"
    ],
    requirements: [
      "Strong Python programming skills",
      "Advanced mathematics and statistics",
      "Jupyter Notebook environment setup",
      "Comfortable with large datasets",
      "30+ hours weekly commitment"
    ]
  },
  {
    id: "9",
    title: "ChatGPT Mastery",
    titleAr: "إتقان ChatGPT",
    instructor: "Ahmed Sami",
    category: "ai",
    rating: 4.9,
    students: 5200,
    price: 12,
    thumbnail: "https://images.unsplash.com/photo-1677442d019cecf8c9f0e9a7c3e49e1f8b8c9d9f?w=400&h=240&fit=crop",
    level: "Intermediate",
    lessons: 50,
    duration: 30,
    language: "English",
    description: "Master ChatGPT and AI-powered tools for productivity. Learn advanced prompting techniques and practical applications.",
    descriptionAr: "أتقن ChatGPT والأدوات المدعومة بالذكاء الاصطناعي للإنتاجية. تعلم تقنيات الأوامر المتقدمة والتطبيقات العملية.",
    curriculum: [
      "Introduction to ChatGPT and Large Language Models",
      "Advanced Prompting Techniques and Strategies",
      "ChatGPT for Content Creation and Writing",
      "AI Tools Integration and Automation",
      "Ethics, Limitations and Best Practices"
    ],
    requirements: [
      "ChatGPT account (free or paid)",
      "Basic computer literacy",
      "English language proficiency",
      "Curiosity about AI applications",
      "2-3 hours per week for practice"
    ]
  },
  {
    id: "10",
    title: "Machine Learning A-Z",
    titleAr: "التعلم الآلي من الألف إلى الياء",
    instructor: "Dr. Layla Hassan",
    category: "ai",
    rating: 4.8,
    students: 3800,
    price: 18,
    thumbnail: "https://images.unsplash.com/photo-1517694712629-8b8cd9c9c5f9?w=400&h=240&fit=crop",
    level: "Advanced",
    lessons: 80,
    duration: 45,
    language: "English",
    description: "Complete machine learning course covering algorithms, neural networks, and real-world projects with hands-on implementation.",
    descriptionAr: "دورة تعلم آلي شاملة تغطي الخوارزميات والشبكات العصبية والمشاريع الحقيقية مع التطبيق العملي.",
    curriculum: [
      "Machine Learning Fundamentals and Theory",
      "Supervised Learning: Regression and Classification",
      "Unsupervised Learning and Clustering",
      "Neural Networks and Deep Learning",
      "Capstone Project and Real-World Applications"
    ],
    requirements: [
      "Strong Python and NumPy skills",
      "Advanced mathematics and calculus knowledge",
      "Linear algebra understanding",
      "Computer with GPU recommended",
      "40+ hours weekly commitment"
    ]
  },
  {
    id: "11",
    title: "AI for Business",
    titleAr: "الذكاء الاصطناعي للأعمال",
    instructor: "Omar Khalid",
    category: "ai",
    rating: 4.7,
    students: 2500,
    price: 10,
    thumbnail: "https://images.unsplash.com/photo-1551288090-5cf5a3b26a00?w=400&h=240&fit=crop",
    level: "Beginner",
    lessons: 35,
    duration: 20,
    language: "Bilingual",
    description: "Learn how to leverage AI and machine learning for business growth, automation, and strategic decision-making.",
    descriptionAr: "تعلم كيفية الاستفادة من الذكاء الاصطناعي والتعلم الآلي لنمو الأعمال والأتمتة واتخاذ القرارات الاستراتيجية.",
    curriculum: [
      "AI Fundamentals for Business Leaders",
      "Machine Learning Use Cases in Industry",
      "AI-Powered Data Analysis and Insights",
      "Implementing AI Solutions and ROI",
      "AI Strategy and Future-Proofing Business"
    ],
    requirements: [
      "Basic business understanding",
      "No technical background required",
      "Interest in AI and technology",
      "Analytical thinking skills",
      "Access to business data and case studies"
    ]
  },
  {
    id: "12",
    title: "Prompt Engineering",
    titleAr: "هندسة الأوامر",
    instructor: "Sara Ahmed",
    category: "ai",
    rating: 4.9,
    students: 1900,
    price: 8,
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f5ae4e8a83f?w=400&h=240&fit=crop",
    level: "Beginner",
    lessons: 25,
    duration: 15,
    language: "Arabic",
    description: "Master the art of prompt engineering to get the best results from AI models and language models.",
    descriptionAr: "أتقن فن هندسة الأوامر للحصول على أفضل النتائج من نماذج الذكاء الاصطناعي.",
    curriculum: [
      "Prompt Basics and Structure",
      "Advanced Prompting Patterns",
      "Few-Shot and Chain-of-Thought Prompting",
      "Specialized Prompts for Different Tasks",
      "Optimization and Testing Techniques"
    ],
    requirements: [
      "Access to AI model (ChatGPT, Claude, etc)",
      "Arabic language proficiency",
      "Basic understanding of AI",
      "Experimental and creative mindset",
      "1-2 hours per week for practice"
    ]
  },
];
