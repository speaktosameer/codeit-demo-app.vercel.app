"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"

const categories = [
  {
    name: "Programming",
    slug: "programming",
    description: "Master web development, mobile apps, and cutting-edge technologies",
    icon: "💻",
    courses: 25,
    color: "bg-blue-50 border-blue-200",
    skills: ["React.js", "Node.js", "Python", "JavaScript", "TypeScript", "Next.js"],
  },
  {
    name: "Designing",
    slug: "designing",
    description: "Create stunning user interfaces and engaging user experiences",
    icon: "🎨",
    courses: 18,
    color: "bg-purple-50 border-purple-200",
    skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Prototyping", "Design Systems"],
  },
  {
    name: "Networking",
    slug: "networking",
    description: "Build secure networks and master cloud infrastructure",
    icon: "🌐",
    courses: 12,
    color: "bg-green-50 border-green-200",
    skills: ["Network Security", "Cloud Computing", "AWS", "DevOps", "System Administration"],
  },
  {
    name: "Corporate",
    slug: "corporate",
    description: "Develop leadership skills and business acumen for career growth",
    icon: "💼",
    courses: 15,
    color: "bg-orange-50 border-orange-200",
    skills: ["Leadership", "Project Management", "Business Strategy", "Communication", "Team Building"],
  },
]

export default function CategoriesView() {
  const { user, logout } = useAuth()

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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Course Categories</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore our comprehensive range of courses designed to advance your career in technology
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Card
                key={category.slug}
                className={`${category.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-4xl mr-4">{category.icon}</div>
                      <div>
                        <CardTitle className="text-2xl">{category.name}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          {category.courses} courses available
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{category.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-gray-600 mb-2">Popular Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={`/categories/${category.slug}`}>
                    <Button className="w-full">Explore {category.name} Courses</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of students who have transformed their careers with our expert-led courses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/mentors">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
              >
                Meet Our Mentors
              </Button>
            </Link>
            <Link href="/events">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Upcoming Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
