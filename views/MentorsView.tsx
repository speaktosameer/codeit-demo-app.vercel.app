"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"

const mentors = [
  {
    id: 1,
    name: "John Doe",
    title: "Senior Full Stack Developer",
    company: "Tech Corp",
    expertise: ["React.js", "Node.js", "MongoDB", "AWS"],
    experience: "8+ years",
    students: 1234,
    rating: 4.9,
    bio: "Passionate developer with expertise in modern web technologies. Has worked with Fortune 500 companies.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    title: "Lead UI/UX Designer",
    company: "Design Studio",
    expertise: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Design Systems"],
    experience: "6+ years",
    students: 892,
    rating: 4.8,
    bio: "Award-winning designer who has created user experiences for millions of users worldwide.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Mike Johnson",
    title: "Python Developer & Data Scientist",
    company: "AI Solutions",
    expertise: ["Python", "Machine Learning", "Data Science", "Django"],
    experience: "10+ years",
    students: 2156,
    rating: 4.9,
    bio: "Expert in Python and AI/ML with extensive experience in building scalable data solutions.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Emma Davis",
    title: "Cloud Solutions Architect",
    company: "CloudTech",
    expertise: ["AWS", "Azure", "DevOps", "Kubernetes"],
    experience: "7+ years",
    students: 756,
    rating: 4.7,
    bio: "Certified cloud architect helping companies migrate to cloud and optimize their infrastructure.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "David Brown",
    title: "Cybersecurity Expert",
    company: "SecureNet",
    expertise: ["Network Security", "Ethical Hacking", "Penetration Testing", "CISSP"],
    experience: "12+ years",
    students: 634,
    rating: 4.8,
    bio: "Cybersecurity professional with extensive experience in protecting enterprise networks.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Lisa Wang",
    title: "Product Manager",
    company: "StartupHub",
    expertise: ["Product Strategy", "Agile", "User Research", "Analytics"],
    experience: "9+ years",
    students: 445,
    rating: 4.6,
    bio: "Product leader who has launched multiple successful products from concept to market.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function MentorsView() {
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
              <Link href="/mentors" className="text-primary font-medium">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Expert Mentors</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Learn from industry professionals with years of real-world experience in their respective fields
          </p>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Teaching Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our mentors are carefully selected industry experts who bring real-world experience and passion for
              teaching to every course.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor) => (
              <Card
                key={mentor.id}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={mentor.image || "/placeholder.svg"}
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{mentor.name}</CardTitle>
                  <CardDescription className="text-base">
                    {mentor.title} at {mentor.company}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="flex justify-center items-center space-x-4 text-sm text-gray-600 mb-4">
                      <span>⭐ {mentor.rating}</span>
                      <span>👥 {mentor.students} students</span>
                      <span>🎓 {mentor.experience}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm text-center">{mentor.bio}</p>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1" size="sm">
                      View Courses
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Become a Mentor?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Share your expertise and help shape the next generation of tech professionals
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
          >
            Apply to Teach
          </Button>
        </div>
      </section>
    </div>
  )
}
