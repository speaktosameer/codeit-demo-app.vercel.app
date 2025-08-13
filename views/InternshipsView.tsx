"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"

const internships = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechStart Nepal",
    location: "Kathmandu, Nepal",
    duration: "3 months",
    stipend: "Rs. 15,000/month",
    type: "Paid",
    skills: ["React.js", "JavaScript", "CSS", "Git"],
    description:
      "Work on real-world projects building modern web applications using React.js and related technologies.",
    requirements: ["Basic knowledge of React.js", "Understanding of HTML/CSS", "Git version control"],
    posted: "2 days ago",
    deadline: "Jan 30, 2024",
  },
  {
    id: 2,
    title: "UI/UX Design Intern",
    company: "Creative Agency",
    location: "Remote",
    duration: "4 months",
    stipend: "Rs. 12,000/month",
    type: "Paid",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    description:
      "Join our design team to create beautiful and functional user interfaces for mobile and web applications.",
    requirements: ["Portfolio of design work", "Proficiency in Figma", "Understanding of design principles"],
    posted: "1 week ago",
    deadline: "Feb 15, 2024",
  },
  {
    id: 3,
    title: "Python Developer Intern",
    company: "DataTech Solutions",
    location: "Lalitpur, Nepal",
    duration: "6 months",
    stipend: "Rs. 18,000/month",
    type: "Paid",
    skills: ["Python", "Django", "PostgreSQL", "API Development"],
    description: "Develop backend systems and APIs for data-driven applications using Python and Django framework.",
    requirements: ["Strong Python fundamentals", "Basic web development knowledge", "Database concepts"],
    posted: "3 days ago",
    deadline: "Feb 5, 2024",
  },
  {
    id: 4,
    title: "Digital Marketing Intern",
    company: "Growth Marketing Co.",
    location: "Hybrid",
    duration: "3 months",
    stipend: "Rs. 10,000/month",
    type: "Paid",
    skills: ["SEO", "Social Media", "Content Marketing", "Analytics"],
    description: "Learn digital marketing strategies and help execute campaigns across various digital channels.",
    requirements: ["Interest in digital marketing", "Basic understanding of social media", "Good communication skills"],
    posted: "5 days ago",
    deadline: "Jan 25, 2024",
  },
  {
    id: 5,
    title: "DevOps Intern",
    company: "CloudOps Nepal",
    location: "Kathmandu, Nepal",
    duration: "4 months",
    stipend: "Rs. 20,000/month",
    type: "Paid",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    description: "Learn cloud infrastructure management and deployment automation in a production environment.",
    requirements: ["Basic Linux knowledge", "Understanding of cloud concepts", "Scripting experience"],
    posted: "1 day ago",
    deadline: "Feb 10, 2024",
  },
  {
    id: 6,
    title: "Mobile App Development Intern",
    company: "AppDev Studio",
    location: "Remote",
    duration: "5 months",
    stipend: "Rs. 16,000/month",
    type: "Paid",
    skills: ["React Native", "Flutter", "Mobile UI", "API Integration"],
    description: "Build cross-platform mobile applications and contribute to exciting mobile projects.",
    requirements: ["Mobile development basics", "JavaScript or Dart knowledge", "Understanding of mobile UI/UX"],
    posted: "4 days ago",
    deadline: "Feb 20, 2024",
  },
]

export default function InternshipsView() {
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
              <Link href="/internships" className="text-primary font-medium">
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
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Internship Opportunities</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Gain real-world experience and kickstart your career with our partner companies
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-4 items-center">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>All Categories</option>
              <option>Development</option>
              <option>Design</option>
              <option>Marketing</option>
              <option>DevOps</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>All Locations</option>
              <option>Kathmandu</option>
              <option>Lalitpur</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>All Types</option>
              <option>Paid</option>
              <option>Unpaid</option>
            </select>
            <Button>Apply Filters</Button>
          </div>
        </div>
      </section>

      {/* Internships Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Available Internships ({internships.length})</h2>
            <div className="text-sm text-gray-600">Showing all internship opportunities</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {internships.map((internship) => (
              <Card key={internship.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-xl">{internship.title}</CardTitle>
                      <CardDescription className="text-base">
                        {internship.company} • {internship.location}
                      </CardDescription>
                    </div>
                    <Badge variant={internship.type === "Paid" ? "default" : "secondary"}>{internship.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{internship.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold">Duration:</span> {internship.duration}
                    </div>
                    <div>
                      <span className="font-semibold">Stipend:</span> {internship.stipend}
                    </div>
                    <div>
                      <span className="font-semibold">Posted:</span> {internship.posted}
                    </div>
                    <div>
                      <span className="font-semibold">Deadline:</span> {internship.deadline}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Required Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {internship.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button className="flex-1">Apply Now</Button>
                    <Button variant="outline" className="bg-transparent">
                      Save
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our courses to build the skills needed for these internship opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/categories">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Browse Courses
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
            >
              Career Guidance
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
