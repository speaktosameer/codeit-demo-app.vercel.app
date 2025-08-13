"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"

// Mock course data
const courseData = {
  "1": {
    id: "1",
    title: "Complete React.js Development",
    description:
      "Master React.js from basics to advanced concepts including hooks, context, and state management. This comprehensive course will take you from a beginner to an advanced React developer.",
    duration: "12 weeks",
    fee: "Rs. 25,000",
    level: "Intermediate",
    instructor: "John Doe",
    instructorBio: "Senior Full Stack Developer with 8+ years of experience at top tech companies",
    rating: 4.8,
    students: 234,
    image: "/placeholder.svg?height=400&width=600",
    category: "Programming",
    whatYouLearn: [
      "React fundamentals and JSX",
      "Component lifecycle and hooks",
      "State management with Context API and Redux",
      "Routing with React Router",
      "Testing React applications",
      "Performance optimization techniques",
      "Building and deploying React apps",
    ],
    curriculum: [
      { week: 1, title: "Introduction to React", topics: ["JSX", "Components", "Props"] },
      { week: 2, title: "State and Events", topics: ["useState", "Event Handling", "Forms"] },
      { week: 3, title: "Component Lifecycle", topics: ["useEffect", "Cleanup", "Dependencies"] },
      { week: 4, title: "Advanced Hooks", topics: ["useContext", "useReducer", "Custom Hooks"] },
      { week: 5, title: "Routing", topics: ["React Router", "Navigation", "Protected Routes"] },
      { week: 6, title: "State Management", topics: ["Context API", "Redux Basics", "Redux Toolkit"] },
    ],
    requirements: [
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Familiarity with ES6+ features",
      "A computer with internet connection",
      "Code editor (VS Code recommended)",
    ],
  },
}

export default function CourseDetailsView({ courseId }: { courseId: string }) {
  const { user, logout } = useAuth()
  const course = courseData[courseId as keyof typeof courseData]

  if (!course) {
    return <div>Course not found</div>
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
              <Link href="/categories" className="text-gray-600 hover:text-primary">
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

      {/* Course Hero */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {course.category}
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {course.level}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-blue-100 mb-6">{course.description}</p>
              <div className="flex items-center space-x-6 text-blue-100">
                <div className="flex items-center">
                  <span className="mr-2">⭐</span>
                  <span>
                    {course.rating} ({course.students} students)
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">⏱️</span>
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">👨‍🏫</span>
                  <span>{course.instructor}</span>
                </div>
              </div>
            </div>
            <div className="lg:text-right">
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What You'll Learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {course.whatYouLearn.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <span className="text-green-500 mr-3 mt-1">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {course.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-3 mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Curriculum</CardTitle>
                    <CardDescription>{course.curriculum.length} weeks of comprehensive learning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {course.curriculum.map((week) => (
                        <div key={week.week} className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2">
                            Week {week.week}: {week.title}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {week.topics.map((topic, index) => (
                              <Badge key={index} variant="outline">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="instructor" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Meet Your Instructor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-2xl">👨‍💻</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{course.instructor}</h3>
                        <p className="text-gray-600 mt-2">{course.instructorBio}</p>
                        <div className="flex items-center mt-4 space-x-4">
                          <span className="text-sm text-gray-500">⭐ 4.9 Instructor Rating</span>
                          <span className="text-sm text-gray-500">👥 1,234 Students</span>
                          <span className="text-sm text-gray-500">🎓 15 Courses</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Reviews</CardTitle>
                    <CardDescription>
                      ⭐ {course.rating} average rating from {course.students} students
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        {
                          name: "Alice Johnson",
                          rating: 5,
                          comment:
                            "Excellent course! John explains everything clearly and the projects are very practical.",
                        },
                        {
                          name: "Bob Smith",
                          rating: 5,
                          comment: "Best React course I've taken. The curriculum is well-structured and up-to-date.",
                        },
                        {
                          name: "Carol Davis",
                          rating: 4,
                          comment: "Great content and good pace. Would recommend to anyone wanting to learn React.",
                        },
                      ].map((review, index) => (
                        <div key={index} className="border-b pb-4 last:border-b-0">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-semibold">{review.name}</h5>
                            <div className="text-yellow-500">
                              {"★".repeat(review.rating)}
                              {"☆".repeat(5 - review.rating)}
                            </div>
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{course.fee}</div>
                  <div className="text-sm text-gray-500">One-time payment</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href={`/enroll/${course.id}`}>
                  <Button className="w-full" size="lg">
                    Enroll Now
                  </Button>
                </Link>
                <Button variant="outline" className="w-full bg-transparent">
                  Add to Wishlist
                </Button>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3">This course includes:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="mr-2">🎥</span>
                      12 weeks of video content
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">📱</span>
                      Mobile and desktop access
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">🏆</span>
                      Certificate of completion
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">💬</span>
                      Direct instructor support
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">🔄</span>
                      Lifetime access
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
