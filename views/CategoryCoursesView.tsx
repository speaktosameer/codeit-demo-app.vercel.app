"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"

// Mock course data
const coursesByCategory = {
  programming: [
    {
      id: "1",
      title: "Complete React.js Development",
      description: "Master React.js from basics to advanced concepts including hooks, context, and state management",
      duration: "12 weeks",
      fee: "Rs. 25,000",
      level: "Intermediate",
      instructor: "John Doe",
      rating: 4.8,
      students: 234,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "2",
      title: "Full Stack JavaScript",
      description: "Learn Node.js, Express, MongoDB and build complete web applications from scratch",
      duration: "16 weeks",
      fee: "Rs. 35,000",
      level: "Advanced",
      instructor: "Sarah Wilson",
      rating: 4.9,
      students: 189,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "3",
      title: "Python for Beginners",
      description: "Start your programming journey with Python - perfect for absolute beginners",
      duration: "8 weeks",
      fee: "Rs. 18,000",
      level: "Beginner",
      instructor: "Mike Johnson",
      rating: 4.7,
      students: 456,
      image: "/placeholder.svg?height=200&width=300",
    },
  ],
  designing: [
    {
      id: "4",
      title: "UI/UX Design Masterclass",
      description: "Learn user interface and user experience design with hands-on projects",
      duration: "10 weeks",
      fee: "Rs. 22,000",
      level: "Intermediate",
      instructor: "Emma Davis",
      rating: 4.8,
      students: 167,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "5",
      title: "Figma Design System",
      description: "Master Figma and create professional design systems for modern applications",
      duration: "6 weeks",
      fee: "Rs. 15,000",
      level: "Beginner",
      instructor: "Alex Chen",
      rating: 4.6,
      students: 298,
      image: "/placeholder.svg?height=200&width=300",
    },
  ],
  networking: [
    {
      id: "6",
      title: "Network Security Fundamentals",
      description: "Learn cybersecurity basics and protect networks from modern threats",
      duration: "14 weeks",
      fee: "Rs. 30,000",
      level: "Intermediate",
      instructor: "David Brown",
      rating: 4.7,
      students: 123,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "7",
      title: "AWS Cloud Practitioner",
      description: "Get certified in Amazon Web Services and master cloud computing",
      duration: "12 weeks",
      fee: "Rs. 28,000",
      level: "Intermediate",
      instructor: "Lisa Wang",
      rating: 4.9,
      students: 201,
      image: "/placeholder.svg?height=200&width=300",
    },
  ],
  corporate: [
    {
      id: "8",
      title: "Leadership & Management",
      description: "Develop essential leadership skills for managing teams and projects effectively",
      duration: "8 weeks",
      fee: "Rs. 20,000",
      level: "Intermediate",
      instructor: "Robert Taylor",
      rating: 4.5,
      students: 145,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "9",
      title: "Project Management Professional",
      description: "Master project management methodologies and get PMP certification ready",
      duration: "16 weeks",
      fee: "Rs. 32,000",
      level: "Advanced",
      instructor: "Jennifer Lee",
      rating: 4.8,
      students: 98,
      image: "/placeholder.svg?height=200&width=300",
    },
  ],
}

const categoryInfo = {
  programming: {
    name: "Programming",
    icon: "💻",
    description: "Master web development, mobile apps, and cutting-edge technologies",
  },
  designing: {
    name: "Designing",
    icon: "🎨",
    description: "Create stunning user interfaces and engaging user experiences",
  },
  networking: { name: "Networking", icon: "🌐", description: "Build secure networks and master cloud infrastructure" },
  corporate: {
    name: "Corporate",
    icon: "💼",
    description: "Develop leadership skills and business acumen for career growth",
  },
}

export default function CategoryCoursesView({ category }: { category: string }) {
  const { user, logout } = useAuth()
  const courses = coursesByCategory[category as keyof typeof coursesByCategory] || []
  const info = categoryInfo[category as keyof typeof categoryInfo]

  if (!info) {
    return <div>Category not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-primary">
              CodeIT Academy
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/categories" className="text-primary font-medium">
                Categories
              </Link>
              <Link href="/mentors" className="text-gray-600 hover:text-primary">
                Mentors
              </Link>
              <Link href="/internships" className="text-gray-600 hover:text-primary">
                Internships
              </Link>
              <Link href="/events" className="text-gray-600 hover:text-primary">
                Events
              </Link>
              <Link href="/blogs" className="text-gray-600 hover:text-primary">
                Blogs
              </Link>
              <Link href="/gallery" className="text-gray-600 hover:text-primary">
                Gallery
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">Welcome, {user.name}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (user.role === "admin") {
                        window.location.href = "/admin"
                      } else {
                        window.location.href = "/student"
                      }
                    }}
                  >
                    Dashboard
                  </Button>
                  <Button variant="outline" size="sm" onClick={logout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <Link href="/login">
                  <Button>Login</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb & Category Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/categories" className="hover:text-primary">
              Categories
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{info.name}</span>
          </div>
          <div className="flex items-center">
            <div className="text-4xl mr-4">{info.icon}</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{info.name} Courses</h1>
              <p className="text-gray-600 mt-1">{info.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Available Courses ({courses.length})</h2>
            <div className="flex space-x-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                <option>Sort by: Popular</option>
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
                <option>Sort by: Duration</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video bg-gray-200">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      variant={
                        course.level === "Beginner"
                          ? "secondary"
                          : course.level === "Intermediate"
                            ? "default"
                            : "destructive"
                      }
                    >
                      {course.level}
                    </Badge>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">⭐ {course.rating}</div>
                      <div className="text-xs text-gray-400">{course.students} students</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-sm">
                    By {course.instructor} • {course.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-primary">{course.fee}</div>
                    <Link href={`/course/${course.id}`}>
                      <Button>View Details</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
