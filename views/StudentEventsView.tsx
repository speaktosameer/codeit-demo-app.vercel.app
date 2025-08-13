"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StudentLayout from "@/components/StudentLayout"

export default function StudentEventsView() {
  const registeredEvents = [
    {
      id: 1,
      title: "Web Development Workshop",
      description: "Hands-on workshop covering modern web development techniques using React.js and Node.js",
      date: "2024-01-15",
      time: "2:00 PM - 5:00 PM",
      location: "CodeIT Academy, Kathmandu",
      type: "Workshop",
      status: "Registered",
      registrationDate: "2024-01-05",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Career Guidance Session",
      description: "Get expert advice on building a successful career in technology",
      date: "2024-01-20",
      time: "4:00 PM - 6:00 PM",
      location: "CodeIT Academy, Kathmandu",
      type: "Seminar",
      status: "Registered",
      registrationDate: "2024-01-08",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const availableEvents = [
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      description: "Learn advanced UI/UX design principles and create stunning user interfaces",
      date: "2024-01-25",
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
  ]

  const pastEvents = [
    {
      id: 6,
      title: "JavaScript Fundamentals Workshop",
      description: "Comprehensive workshop on JavaScript basics and ES6+ features",
      date: "2023-12-10",
      time: "2:00 PM - 6:00 PM",
      location: "CodeIT Academy, Kathmandu",
      type: "Workshop",
      status: "Attended",
      feedback: "Excellent workshop! Very informative and well-structured.",
      rating: 5,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 7,
      title: "Networking Event for Developers",
      description: "Connect with fellow developers and industry professionals",
      date: "2023-11-25",
      time: "5:00 PM - 8:00 PM",
      location: "Tech Hub, Kathmandu",
      type: "Networking",
      status: "Attended",
      feedback: "Great networking opportunity. Met many interesting people.",
      rating: 4,
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <StudentLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Events</h1>
          <p className="text-gray-600">Manage your event registrations and discover new learning opportunities.</p>
        </div>

        <Tabs defaultValue="registered" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="registered">My Events ({registeredEvents.length})</TabsTrigger>
            <TabsTrigger value="available">Available ({availableEvents.length})</TabsTrigger>
            <TabsTrigger value="past">Past Events ({pastEvents.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="registered" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {registeredEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-200">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="default">{event.type}</Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {event.status}
                      </Badge>
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
                        <span className="mr-2">📝</span>
                        <span>Registered on {event.registrationDate}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1">View Details</Button>
                      <Button variant="outline" className="bg-transparent">
                        Add to Calendar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="available" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {availableEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
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

                    <div className="flex space-x-2">
                      <Button className="flex-1" disabled={event.registered >= event.capacity}>
                        {event.registered >= event.capacity ? "Fully Booked" : "Register Now"}
                      </Button>
                      <Button variant="outline" className="bg-transparent">
                        Learn More
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
          </TabsContent>

          <TabsContent value="past" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-200 relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                        {event.status}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{event.type}</Badge>
                      <div className="flex items-center text-yellow-500">
                        {"★".repeat(event.rating)}
                        {"☆".repeat(5 - event.rating)}
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
                        <span className="mr-2">📍</span>
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm font-medium mb-1">Your Feedback:</div>
                      <div className="text-sm text-gray-600">{event.feedback}</div>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1 bg-transparent" variant="outline">
                        View Certificate
                      </Button>
                      <Button variant="outline" className="bg-transparent">
                        Share Experience
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </StudentLayout>
  )
}
