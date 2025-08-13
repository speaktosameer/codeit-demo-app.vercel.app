"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"

const blogs = [
  {
    id: 1,
    title: "Getting Started with React.js in 2024",
    excerpt:
      "Learn the fundamentals of React.js and build your first component-based application with modern best practices.",
    content: "React.js continues to be one of the most popular frontend frameworks...",
    author: "John Doe",
    date: "2024-01-10",
    readTime: "5 min read",
    category: "Programming",
    tags: ["React", "JavaScript", "Frontend"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "UI/UX Design Trends for 2024",
    excerpt: "Discover the latest design trends that will shape user interfaces and experiences in the coming year.",
    content: "The world of UI/UX design is constantly evolving...",
    author: "Sarah Wilson",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Design",
    tags: ["UI/UX", "Design Trends", "User Experience"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Python vs JavaScript: Which to Learn First?",
    excerpt:
      "A comprehensive comparison of Python and JavaScript to help beginners choose their first programming language.",
    content: "Choosing your first programming language is a crucial decision...",
    author: "Mike Johnson",
    date: "2024-01-05",
    readTime: "8 min read",
    category: "Programming",
    tags: ["Python", "JavaScript", "Beginner Guide"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "The Future of Cloud Computing",
    excerpt: "Explore emerging trends in cloud technology and how they will impact businesses and developers.",
    content: "Cloud computing has revolutionized how we build and deploy applications...",
    author: "Emma Davis",
    date: "2024-01-03",
    readTime: "6 min read",
    category: "Technology",
    tags: ["Cloud Computing", "AWS", "Technology Trends"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "Cybersecurity Best Practices for Developers",
    excerpt: "Essential security practices every developer should implement to protect applications and user data.",
    content: "Security should be a top priority for every developer...",
    author: "David Brown",
    date: "2024-01-01",
    readTime: "10 min read",
    category: "Security",
    tags: ["Cybersecurity", "Web Security", "Best Practices"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "Building Your First Mobile App",
    excerpt: "Step-by-step guide to creating your first mobile application using React Native.",
    content: "Mobile app development has become more accessible than ever...",
    author: "Lisa Wang",
    date: "2023-12-28",
    readTime: "12 min read",
    category: "Mobile Development",
    tags: ["React Native", "Mobile App", "Tutorial"],
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function BlogsView() {
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
              <Link href="/events" className="text-gray-600 hover:text-primary">
                Events
              </Link>
              <Link href="/blogs" className="text-primary font-medium">
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
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tech Blog</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights from the world of technology
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-4 items-center">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>All Categories</option>
              <option>Programming</option>
              <option>Design</option>
              <option>Technology</option>
              <option>Security</option>
              <option>Mobile Development</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>Sort by: Latest</option>
              <option>Sort by: Popular</option>
              <option>Sort by: Read Time</option>
            </select>
            <div className="flex-1"></div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent w-64"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogs[0].image || "/placeholder.svg"}
                  alt={blogs[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge>{blogs[0].category}</Badge>
                  <span className="text-sm text-gray-500">{blogs[0].readTime}</span>
                  <span className="text-sm text-gray-500">{new Date(blogs[0].date).toLocaleDateString()}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{blogs[0].title}</h3>
                <p className="text-gray-600 mb-6">{blogs[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm">👨‍💻</span>
                    </div>
                    <div>
                      <div className="font-semibold">{blogs[0].author}</div>
                      <div className="text-sm text-gray-500">Author</div>
                    </div>
                  </div>
                  <Button>Read More</Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(1).map((blog) => (
              <Card key={blog.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video bg-gray-200">
                  <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{blog.category}</Badge>
                    <span className="text-xs text-gray-500">{blog.readTime}</span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{blog.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{blog.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                        <span className="text-xs">👤</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium">{blog.author}</div>
                        <div className="text-xs text-gray-500">{new Date(blog.date).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      Read
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter and never miss the latest tech articles and tutorials
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
