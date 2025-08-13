"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"
import { useState } from "react"

const galleryItems = [
  {
    id: 1,
    title: "Web Development Workshop 2023",
    category: "Workshop",
    date: "2023-12-15",
    image: "/placeholder.svg?height=300&width=400",
    description: "Students learning React.js in our intensive workshop",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    category: "Masterclass",
    date: "2023-12-10",
    image: "/placeholder.svg?height=300&width=400",
    description: "Participants creating beautiful user interfaces",
  },
  {
    id: 3,
    title: "Graduation Ceremony 2023",
    category: "Event",
    date: "2023-12-01",
    image: "/placeholder.svg?height=300&width=400",
    description: "Celebrating our successful graduates",
  },
  {
    id: 4,
    title: "Python Programming Class",
    category: "Class",
    date: "2023-11-28",
    image: "/placeholder.svg?height=300&width=400",
    description: "Students diving deep into Python programming",
  },
  {
    id: 5,
    title: "Tech Talk: AI & Machine Learning",
    category: "Tech Talk",
    date: "2023-11-25",
    image: "/placeholder.svg?height=300&width=400",
    description: "Industry experts sharing AI insights",
  },
  {
    id: 6,
    title: "Networking Event",
    category: "Event",
    date: "2023-11-20",
    image: "/placeholder.svg?height=300&width=400",
    description: "Students networking with industry professionals",
  },
  {
    id: 7,
    title: "Mobile App Development Workshop",
    category: "Workshop",
    date: "2023-11-15",
    image: "/placeholder.svg?height=300&width=400",
    description: "Building mobile apps with React Native",
  },
  {
    id: 8,
    title: "Cybersecurity Seminar",
    category: "Seminar",
    date: "2023-11-10",
    image: "/placeholder.svg?height=300&width=400",
    description: "Learning about digital security and protection",
  },
  {
    id: 9,
    title: "CodeIT Academy Campus",
    category: "Campus",
    date: "2023-11-05",
    image: "/placeholder.svg?height=300&width=400",
    description: "Our state-of-the-art learning facility",
  },
  {
    id: 10,
    title: "Student Project Showcase",
    category: "Showcase",
    date: "2023-11-01",
    image: "/placeholder.svg?height=300&width=400",
    description: "Students presenting their final projects",
  },
  {
    id: 11,
    title: "Mentor Meet & Greet",
    category: "Event",
    date: "2023-10-28",
    image: "/placeholder.svg?height=300&width=400",
    description: "Students meeting with industry mentors",
  },
  {
    id: 12,
    title: "Hackathon 2023",
    category: "Competition",
    date: "2023-10-25",
    image: "/placeholder.svg?height=300&width=400",
    description: "48-hour coding competition and innovation",
  },
]

export default function GalleryView() {
  const { user, logout } = useAuth()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)

  const categories = ["All", ...Array.from(new Set(galleryItems.map((item) => item.category)))]

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

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
              <Link href="/gallery" className="text-primary font-medium">
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
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Explore moments from our workshops, events, and the vibrant learning community at CodeIT Academy
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory !== category ? "bg-transparent" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">
              {selectedCategory === "All" ? "All Photos" : `${selectedCategory} Photos`}
            </h2>
            <p className="text-gray-600">
              Showing {filteredItems.length} {filteredItems.length === 1 ? "photo" : "photos"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-square bg-gray-200 relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-black/50 text-white">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm mb-1 line-clamp-2">{item.title}</h3>
                  <p className="text-xs text-gray-600 mb-2">{item.description}</p>
                  <div className="text-xs text-gray-500">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full bg-white rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <Badge>{selectedImage.category}</Badge>
              </div>
              <p className="text-gray-600 mb-2">{selectedImage.description}</p>
              <div className="text-sm text-gray-500">
                {new Date(selectedImage.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of Our Story</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community and create your own success story at CodeIT Academy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/categories">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Explore Courses
              </Button>
            </Link>
            <Link href="/events">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
              >
                Upcoming Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
