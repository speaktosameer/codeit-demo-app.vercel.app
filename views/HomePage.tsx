"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"
import { useState, useEffect } from "react"

export default function HomePage() {
  const { user, logout } = useAuth()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold gradient-text">
                CodeIT Academy
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/categories" className="text-gray-600 hover:text-primary transition-colors duration-300">
                Categories
              </Link>
              <Link href="/mentors" className="text-gray-600 hover:text-primary transition-colors duration-300">
                Mentors
              </Link>
              <Link href="/internships" className="text-gray-600 hover:text-primary transition-colors duration-300">
                Internships
              </Link>
              <Link href="/events" className="text-gray-600 hover:text-primary transition-colors duration-300">
                Events
              </Link>
              <Link href="/blogs" className="text-gray-600 hover:text-primary transition-colors duration-300">
                Blogs
              </Link>
              <Link href="/gallery" className="text-gray-600 hover:text-primary transition-colors duration-300">
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
                    className="btn-animate bg-transparent"
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
                  <Button className="btn-animate">Login</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl float"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Master Your <span className="gradient-text">Tech Skills</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Learn Programming, Design, Networking, and Corporate skills from industry experts. Start your journey to
              become a tech professional today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/categories">
                <Button size="lg" className="w-full sm:w-auto btn-animate hover-lift">
                  Explore Courses
                </Button>
              </Link>
              <Link href="/mentors">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent btn-animate hover-lift">
                  Meet Our Mentors
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Programming",
                description: "Web Development, Mobile Apps, AI/ML",
                icon: "💻",
                color: "from-blue-500 to-cyan-500",
              },
              {
                name: "Designing",
                description: "UI/UX, Graphic Design, Web Design",
                icon: "🎨",
                color: "from-purple-500 to-pink-500",
              },
              {
                name: "Networking",
                description: "Network Security, Cloud Computing",
                icon: "🌐",
                color: "from-green-500 to-teal-500",
              },
              {
                name: "Corporate",
                description: "Business Skills, Leadership, Management",
                icon: "💼",
                color: "from-orange-500 to-red-500",
              },
            ].map((category, index) => (
              <Card
                key={category.name}
                className={`hover-lift card-hover cursor-pointer animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div
                    className={`text-4xl mb-4 p-4 rounded-full bg-gradient-to-r ${category.color} text-white w-16 h-16 flex items-center justify-center mx-auto animate-bounce-in`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/categories/${category.name.toLowerCase()}`}>
                    <Button variant="outline" className="w-full bg-transparent btn-animate">
                      View Courses
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">Why Choose CodeIT Academy?</h2>
            <p className="text-xl opacity-90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Experience the difference with our comprehensive learning approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Industry-Ready Skills",
                description: "Learn practical skills that employers are looking for in today's competitive market.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: "👨‍🏫",
                title: "Expert Mentorship",
                description: "Get guidance from industry professionals with years of real-world experience.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: "🎯",
                title: "Job Placement Support",
                description: "Comprehensive career support including resume building and interview preparation.",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className={`text-center animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-48 object-cover rounded-lg shadow-lg hover-lift"
                  />
                </div>
                <div className="text-4xl mb-4 animate-bounce-in" style={{ animationDelay: `${index * 0.3}s` }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Students Enrolled", color: "text-blue-600" },
              { number: "50+", label: "Expert Mentors", color: "text-green-600" },
              { number: "100+", label: "Courses Available", color: "text-purple-600" },
              { number: "95%", label: "Success Rate", color: "text-orange-600" },
            ].map((stat, index) => (
              <div key={stat.label} className={`animate-fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div
                  className={`text-4xl font-bold mb-2 ${stat.color} animate-bounce-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Full Stack Developer",
                content:
                  "CodeIT Academy transformed my career. The hands-on approach and expert mentorship helped me land my dream job.",
                image: "/placeholder.svg?height=100&width=100",
                rating: 5,
              },
              {
                name: "Rajesh Thapa",
                role: "UI/UX Designer",
                content:
                  "The design bootcamp was incredible. I learned industry-standard tools and techniques that I use daily in my work.",
                image: "/placeholder.svg?height=100&width=100",
                rating: 5,
              },
              {
                name: "Anita Gurung",
                role: "Data Scientist",
                content:
                  "The Python for Data Science course was comprehensive and practical. The projects helped me build a strong portfolio.",
                image: "/placeholder.svg?height=100&width=100",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className={`hover-lift animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Get the latest updates on new courses, events, and tech industry insights
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 btn-animate">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="animate-fade-in-up">
              <h3 className="text-xl font-bold mb-4 gradient-text">CodeIT Academy</h3>
              <p className="text-gray-400 mb-4">
                Empowering the next generation of tech professionals through quality education.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>📘
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>🐦
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>💼
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>📷
                </a>
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/categories" className="hover:text-white transition-colors">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/mentors" className="hover:text-white transition-colors">
                    Mentors
                  </Link>
                </li>
                <li>
                  <Link href="/internships" className="hover:text-white transition-colors">
                    Internships
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="text-gray-400 space-y-2">
                <p>📧 info@codeit.com.np</p>
                <p>📱 +977-1-4567890</p>
                <p>📍 Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
          <div
            className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <p>&copy; 2024 CodeIT Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
