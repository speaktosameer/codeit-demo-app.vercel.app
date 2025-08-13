"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"

const events = [
  {
    id: 1,
    title: "Web Development Workshop",
    description: "Hands-on workshop covering modern web development techniques using React.js and Node.js",
    date: "2024-01-15",
    time: "2:00 PM - 5:00 PM",
    location: "CodeIT Academy, Kathmandu",
    type: "Workshop",
    price: "Free",
    capacity: 50,
    registered: 32,
    speaker: "John Doe",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    description: "Learn advanced UI/UX design principles and create stunning user interfaces",
    date: "2024-01-20",
    time: "10:00 AM - 4:00 PM",
    location: "Online Event",
    type: "Masterclass",
    price: "Rs. 500",
    capacity: 100,
    registered: 78,
    speaker: "Sarah Wilson",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Career Guidance Session",
    description: "Get expert advice on building a successful career in technology",
    date: "2024-01-25",
    time: "4:00 PM - 6:00 PM",
    location: "CodeIT Academy, Kathmandu",
    type: "Seminar",
    price: "Free",
    capacity: 80,
    registered: 45,
    speaker: "Multiple Experts",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Python for Data Science",
    description: "Introduction to data science using Python, pandas, and machine learning basics",
    date: "2024-02-01",
    time: "1:00 PM - 6:00 PM",
    location: "Online Event",
    type: "Workshop",
    price: "Rs. 800",
    capacity: 60,
    registered: 23,
    speaker: "Mike Johnson",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "Tech Talk: AI in 2024",
    description: "Explore the latest trends and developments in artificial intelligence",
    date: "2024-02-05",
    time: "6:00 PM - 8:00 PM",
    location: "Hybrid (Online + Offline)",
    type: "Tech Talk",
    price: "Free",
    capacity: 200,
    registered: 156,
    speaker: "Industry Experts",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "Cybersecurity Fundamentals",
    description: "Learn essential cybersecurity concepts and protect yourself online",
    date: "2024-02-10",
    time: "3:00 PM - 7:00 PM",
    location: "CodeIT Academy, Kathmandu",
    type: "Workshop",
    price: "Rs. 600",
    capacity: 40,
    registered: 18,
    speaker: "David Brown",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function EventsView() {
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
              <Link href="/categories" className="text-gray-600 hover:text-primary">
                Categories
              </Link>
              <Link href="/mentors" className="text-gray-600 hover:text-primary">
                Mentors
              </Link>
              <Link href="/internships" className="text-gray-600 hover:text-primary">
                Internships
              </Link>
              <Link href="/events" className="text-primary font-medium">
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
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Join our workshops, seminars, and tech talks to enhance your skills and network with professionals
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-4 items-center">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>All Types</option>
              <option>Workshop</option>
              <option>Masterclass</option>
              <option>Seminar</option>
              <option>Tech Talk</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>All Locations</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Hybrid</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>All Prices</option>
              <option>Free</option>
              <option>Paid</option>
            </select>
            <Button>Apply Filters</Button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Upcoming Events ({events.length})</h2>
            <div className="text-sm text-gray-600">Don't miss out on these learning opportunities</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video bg-gray-200">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={event.price === "Free" ? "secondary" : "default"}>{event.type}</Badge>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-primary">{event.price}</div>
                      <div className="text-xs text-gray-500">
                        {event.registered}/{event.capacity} registered
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      <span>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">⏰</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📍</span>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">👨‍🏫</span>
                      <span>Speaker: {event.speaker}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button className="flex-1" disabled={event.registered >= event.capacity}>
                      {event.registered >= event.capacity ? "Fully Booked" : "Register Now"}
                    </Button>
                    <Button variant="outline" className="bg-transparent">
                      Share
                    </Button>
                  </div>

                  {event.registered >= event.capacity * 0.8 && event.registered < event.capacity && (
                    <div className="text-xs text-orange-600 bg-orange-50 p-2 rounded">
                      ⚠️ Limited seats available! Only {event.capacity - event.registered} spots left.
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss an Event</h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter and get notified about upcoming events and workshops
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
