// Centralized mock data for the coding academy application

export interface Course {
  id: number
  title: string
  category: string
  price: number
  duration: string
  level: string
  description: string
  instructor: string
  students: number
  rating: number
  image: string
  features: string[]
  curriculum: string[]
}

export interface Student {
  id: number
  name: string
  email: string
  phone: string
  enrolledCourses: string[]
  joinDate: string
  status: "active" | "inactive"
  totalPayments: number
  progress: { [courseId: string]: number }
}

export interface Mentor {
  id: number
  name: string
  expertise: string
  experience: string
  email: string
  phone: string
  bio: string
  courses: string[]
  rating: number
  students: number
  image: string
  socialLinks: {
    linkedin?: string
    github?: string
    twitter?: string
  }
}

export interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  capacity: number
  registered: number
  price: number
  status: "upcoming" | "completed" | "cancelled"
  description: string
  image: string
  category: string
}

export interface BlogPost {
  id: number
  title: string
  category: string
  author: string
  publishDate: string
  status: "published" | "draft"
  views: number
  excerpt: string
  content: string
  image: string
  tags: string[]
}

export interface Payment {
  id: number
  studentName: string
  courseName: string
  amount: number
  method: string
  status: "completed" | "pending" | "failed"
  date: string
  transactionId: string
}

// Mock Data
export const mockCourses: Course[] = [
  {
    id: 1,
    title: "React Fundamentals",
    category: "Programming",
    price: 15000,
    duration: "8 weeks",
    level: "Beginner",
    description: "Master the fundamentals of React development with hands-on projects and real-world applications.",
    instructor: "Dr. Sarah Wilson",
    students: 245,
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=300",
    features: ["Live Projects", "24/7 Support", "Certificate", "Job Assistance"],
    curriculum: ["JSX & Components", "State Management", "Hooks", "Routing", "API Integration", "Testing"],
  },
  {
    id: 2,
    title: "Node.js Masterclass",
    category: "Programming",
    price: 20000,
    duration: "10 weeks",
    level: "Intermediate",
    description: "Build scalable backend applications with Node.js, Express, and modern development practices.",
    instructor: "Alex Chen",
    students: 189,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=300",
    features: ["Real Projects", "Industry Mentorship", "Certificate", "Portfolio Building"],
    curriculum: [
      "Node.js Basics",
      "Express Framework",
      "Database Integration",
      "Authentication",
      "API Development",
      "Deployment",
    ],
  },
  {
    id: 3,
    title: "UI/UX Design Bootcamp",
    category: "Designing",
    price: 18000,
    duration: "12 weeks",
    level: "Beginner",
    description: "Learn modern UI/UX design principles and create stunning user experiences.",
    instructor: "Maya Sharma",
    students: 156,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=300",
    features: ["Design Tools", "Portfolio Projects", "Industry Feedback", "Job Placement"],
    curriculum: ["Design Principles", "Figma Mastery", "User Research", "Prototyping", "Design Systems", "Portfolio"],
  },
  {
    id: 4,
    title: "Python for Data Science",
    category: "Programming",
    price: 22000,
    duration: "14 weeks",
    level: "Intermediate",
    description: "Dive into data science with Python, pandas, and machine learning fundamentals.",
    instructor: "Dr. Raj Patel",
    students: 134,
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=300",
    features: ["Hands-on Projects", "Industry Datasets", "ML Algorithms", "Career Support"],
    curriculum: ["Python Basics", "Data Analysis", "Visualization", "Machine Learning", "Deep Learning", "Projects"],
  },
  {
    id: 5,
    title: "Digital Marketing Mastery",
    category: "Corporate",
    price: 16000,
    duration: "6 weeks",
    level: "Beginner",
    description: "Master digital marketing strategies and grow your online presence effectively.",
    instructor: "Priya Thapa",
    students: 98,
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=300",
    features: ["Live Campaigns", "Analytics Tools", "Social Media", "SEO Strategies"],
    curriculum: [
      "Marketing Fundamentals",
      "Social Media Marketing",
      "SEO/SEM",
      "Content Marketing",
      "Analytics",
      "Strategy",
    ],
  },
  {
    id: 6,
    title: "Cybersecurity Fundamentals",
    category: "Networking",
    price: 25000,
    duration: "16 weeks",
    level: "Advanced",
    description: "Learn cybersecurity principles and protect digital assets from modern threats.",
    instructor: "Suresh Maharjan",
    students: 87,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=300",
    features: ["Ethical Hacking", "Security Tools", "Certification Prep", "Industry Projects"],
    curriculum: [
      "Security Basics",
      "Network Security",
      "Ethical Hacking",
      "Incident Response",
      "Compliance",
      "Advanced Threats",
    ],
  },
]

export const mockMentors: Mentor[] = [
  {
    id: 1,
    name: "Dr. Sarah Wilson",
    expertise: "Full Stack Development",
    experience: "8 years",
    email: "sarah@codeit.com",
    phone: "+977-9841234567",
    bio: "Expert in React, Node.js, and cloud technologies with extensive industry experience in building scalable applications.",
    courses: ["React Fundamentals", "Node.js Masterclass"],
    rating: 4.9,
    students: 420,
    image: "/placeholder.svg?height=300&width=300",
    socialLinks: {
      linkedin: "https://linkedin.com/in/sarahwilson",
      github: "https://github.com/sarahwilson",
      twitter: "https://twitter.com/sarahwilson",
    },
  },
  {
    id: 2,
    name: "Alex Chen",
    expertise: "Backend Development",
    experience: "6 years",
    email: "alex@codeit.com",
    phone: "+977-9841234568",
    bio: "Specialized in Node.js, Python, and microservices architecture. Passionate about teaching clean code practices.",
    courses: ["Node.js Masterclass", "Python for Data Science"],
    rating: 4.8,
    students: 315,
    image: "/placeholder.svg?height=300&width=300",
    socialLinks: {
      linkedin: "https://linkedin.com/in/alexchen",
      github: "https://github.com/alexchen",
    },
  },
  {
    id: 3,
    name: "Maya Sharma",
    expertise: "UI/UX Design",
    experience: "7 years",
    email: "maya@codeit.com",
    phone: "+977-9841234569",
    bio: "Creative designer with expertise in modern design principles and user-centered design methodologies.",
    courses: ["UI/UX Design Bootcamp"],
    rating: 4.7,
    students: 280,
    image: "/placeholder.svg?height=300&width=300",
    socialLinks: {
      linkedin: "https://linkedin.com/in/mayasharma",
      twitter: "https://twitter.com/mayasharma",
    },
  },
  {
    id: 4,
    name: "Dr. Raj Patel",
    expertise: "Data Science & AI",
    experience: "10 years",
    email: "raj@codeit.com",
    phone: "+977-9841234570",
    bio: "PhD in Computer Science with specialization in machine learning and artificial intelligence applications.",
    courses: ["Python for Data Science", "Machine Learning Bootcamp"],
    rating: 4.9,
    students: 195,
    image: "/placeholder.svg?height=300&width=300",
    socialLinks: {
      linkedin: "https://linkedin.com/in/rajpatel",
      github: "https://github.com/rajpatel",
    },
  },
]

export const mockEvents: Event[] = [
  {
    id: 1,
    title: "React Workshop: Building Modern Apps",
    date: "2024-04-15",
    time: "10:00 AM",
    location: "Main Hall, CodeIT Academy",
    capacity: 50,
    registered: 35,
    price: 2000,
    status: "upcoming",
    description: "Hands-on workshop covering React hooks, state management, and modern development practices.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Workshop",
  },
  {
    id: 2,
    title: "Tech Career Fair 2024",
    date: "2024-04-20",
    time: "2:00 PM",
    location: "Conference Center",
    capacity: 200,
    registered: 156,
    price: 0,
    status: "upcoming",
    description: "Meet with top tech companies and explore career opportunities in the tech industry.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Career",
  },
  {
    id: 3,
    title: "AI & Machine Learning Summit",
    date: "2024-05-05",
    time: "9:00 AM",
    location: "Virtual Event",
    capacity: 500,
    registered: 234,
    price: 1500,
    status: "upcoming",
    description: "Explore the latest trends in AI and machine learning with industry experts.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Conference",
  },
]

export const mockBlogs: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React Hooks: A Complete Guide",
    category: "Programming",
    author: "Dr. Sarah Wilson",
    publishDate: "2024-03-15",
    status: "published",
    views: 2450,
    excerpt:
      "Learn the fundamentals of React Hooks and how to use them effectively in your applications for better state management.",
    content: "React Hooks revolutionized how we write React components...",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "JavaScript", "Frontend", "Hooks"],
  },
  {
    id: 2,
    title: "Modern UI/UX Design Principles for 2024",
    category: "Design",
    author: "Maya Sharma",
    publishDate: "2024-03-10",
    status: "published",
    views: 1890,
    excerpt:
      "Explore the latest trends and principles in modern user interface and experience design that will dominate 2024.",
    content: "The design landscape is constantly evolving...",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["UI/UX", "Design", "Trends", "User Experience"],
  },
  {
    id: 3,
    title: "Building Scalable APIs with Node.js and Express",
    category: "Programming",
    author: "Alex Chen",
    publishDate: "2024-03-08",
    status: "published",
    views: 1567,
    excerpt: "A comprehensive guide to building robust and scalable REST APIs using Node.js and Express framework.",
    content: "Building scalable APIs is crucial for modern applications...",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Node.js", "Express", "API", "Backend"],
  },
]

export const mockStudents: Student[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+977-9841234567",
    enrolledCourses: ["React Fundamentals", "Node.js Masterclass"],
    joinDate: "2024-01-15",
    status: "active",
    totalPayments: 35000,
    progress: {
      "1": 75,
      "2": 45,
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+977-9841234568",
    enrolledCourses: ["UI/UX Design Bootcamp"],
    joinDate: "2024-02-20",
    status: "active",
    totalPayments: 18000,
    progress: {
      "3": 60,
    },
  },
]

export const mockPayments: Payment[] = [
  {
    id: 1,
    studentName: "John Doe",
    courseName: "React Fundamentals",
    amount: 15000,
    method: "Khalti",
    status: "completed",
    date: "2024-03-15",
    transactionId: "KHT123456789",
  },
  {
    id: 2,
    studentName: "Jane Smith",
    courseName: "UI/UX Design Bootcamp",
    amount: 18000,
    method: "eSewa",
    status: "completed",
    date: "2024-03-14",
    transactionId: "ESW987654321",
  },
]
