"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import AdminLayout from "@/components/AdminLayout"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const mockBlogs = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    category: "Programming",
    author: "Dr. Sarah Wilson",
    publishDate: "2024-03-15",
    status: "published",
    views: 1250,
    excerpt: "Learn the fundamentals of React Hooks and how to use them effectively in your applications.",
  },
  {
    id: 2,
    title: "Modern UI/UX Design Principles",
    category: "Design",
    author: "Alex Chen",
    publishDate: "2024-03-10",
    status: "published",
    views: 890,
    excerpt: "Explore the latest trends and principles in modern user interface and experience design.",
  },
  {
    id: 3,
    title: "Cloud Computing Best Practices",
    category: "Technology",
    author: "Raj Patel",
    publishDate: "2024-03-20",
    status: "draft",
    views: 0,
    excerpt: "A comprehensive guide to implementing cloud solutions effectively in your organization.",
  },
]

export default function AdminBlogsView() {
  const [blogs, setBlogs] = useState(mockBlogs)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingBlog, setEditingBlog] = useState<any>(null)
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    author: "",
    excerpt: "",
    content: "",
  })

  const handleAddBlog = () => {
    const newBlog = {
      id: blogs.length + 1,
      ...formData,
      publishDate: new Date().toISOString().split("T")[0],
      status: "draft",
      views: 0,
    }
    setBlogs([...blogs, newBlog])
    setFormData({ title: "", category: "", author: "", excerpt: "", content: "" })
    setIsAddDialogOpen(false)
  }

  const handleEditBlog = (blog: any) => {
    setEditingBlog(blog)
    setFormData({
      title: blog.title,
      category: blog.category,
      author: blog.author,
      excerpt: blog.excerpt,
      content: blog.content || "",
    })
  }

  const handleUpdateBlog = () => {
    setBlogs(blogs.map((blog) => (blog.id === editingBlog.id ? { ...blog, ...formData } : blog)))
    setEditingBlog(null)
    setFormData({ title: "", category: "", author: "", excerpt: "", content: "" })
  }

  const handleDeleteBlog = (id: number) => {
    setBlogs(blogs.filter((blog) => blog.id !== id))
  }

  const toggleBlogStatus = (id: number) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === id ? { ...blog, status: blog.status === "published" ? "draft" : "published" } : blog,
      ),
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Blogs</h1>
            <p className="text-gray-600">Create and edit blog posts and articles</p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>Add New Blog Post</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Blog Post</DialogTitle>
                <DialogDescription>Create a new blog post or article</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Blog Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter blog title"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Programming">Programming</SelectItem>
                        <SelectItem value="Design">Design</SelectItem>
                        <SelectItem value="Technology">Technology</SelectItem>
                        <SelectItem value="Career">Career</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      placeholder="Author name"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    placeholder="Brief description of the blog post"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Write your blog content here..."
                    rows={8}
                  />
                </div>
                <Button onClick={handleAddBlog} className="w-full">
                  Add Blog Post
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{blogs.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Published</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{blogs.filter((b) => b.status === "published").length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Drafts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{blogs.filter((b) => b.status === "draft").length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Views</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{blogs.reduce((sum, b) => sum + b.views, 0).toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Card key={blog.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg line-clamp-2">{blog.title}</CardTitle>
                    <CardDescription>
                      By {blog.author} • {blog.publishDate}
                    </CardDescription>
                  </div>
                  <Badge variant={blog.status === "published" ? "default" : "secondary"}>{blog.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="outline">{blog.category}</Badge>
                  <p className="text-sm text-gray-600 line-clamp-3">{blog.excerpt}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>👁️ {blog.views} views</span>
                    <span>📅 {blog.publishDate}</span>
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" onClick={() => handleEditBlog(blog)} className="flex-1">
                      Edit
                    </Button>
                    <Button
                      variant={blog.status === "published" ? "secondary" : "default"}
                      size="sm"
                      onClick={() => toggleBlogStatus(blog.id)}
                      className="flex-1"
                    >
                      {blog.status === "published" ? "Unpublish" : "Publish"}
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDeleteBlog(blog.id)}>
                      🗑️
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Edit Dialog */}
        <Dialog open={!!editingBlog} onOpenChange={() => setEditingBlog(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Blog Post</DialogTitle>
              <DialogDescription>Update blog post information</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="edit-title">Blog Title</Label>
                <Input
                  id="edit-title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="edit-category">Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Programming">Programming</SelectItem>
                      <SelectItem value="Design">Design</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Career">Career</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="edit-author">Author</Label>
                  <Input
                    id="edit-author"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="edit-excerpt">Excerpt</Label>
                <Textarea
                  id="edit-excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="edit-content">Content</Label>
                <Textarea
                  id="edit-content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={8}
                />
              </div>
              <Button onClick={handleUpdateBlog} className="w-full">
                Update Blog Post
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  )
}
