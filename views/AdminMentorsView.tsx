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

const mockMentors = [
  {
    id: 1,
    name: "Dr. Sarah Wilson",
    expertise: "Full Stack Development",
    experience: "8 years",
    email: "sarah@codeit.com",
    phone: "+977-9841234567",
    bio: "Expert in React, Node.js, and cloud technologies",
    courses: ["React Fundamentals", "Node.js Masterclass"],
    rating: 4.9,
    students: 120,
  },
  {
    id: 2,
    name: "Alex Chen",
    expertise: "UI/UX Design",
    experience: "6 years",
    email: "alex@codeit.com",
    phone: "+977-9841234568",
    bio: "Creative designer with expertise in modern design principles",
    courses: ["UI/UX Design Bootcamp"],
    rating: 4.8,
    students: 85,
  },
  {
    id: 3,
    name: "Raj Patel",
    expertise: "DevOps & Cloud",
    experience: "10 years",
    email: "raj@codeit.com",
    phone: "+977-9841234569",
    bio: "AWS certified architect with extensive DevOps experience",
    courses: ["Cloud Computing", "DevOps Fundamentals"],
    rating: 4.7,
    students: 95,
  },
]

export default function AdminMentorsView() {
  const [mentors, setMentors] = useState(mockMentors)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingMentor, setEditingMentor] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: "",
    expertise: "",
    experience: "",
    email: "",
    phone: "",
    bio: "",
  })

  const handleAddMentor = () => {
    const newMentor = {
      id: mentors.length + 1,
      ...formData,
      courses: [],
      rating: 0,
      students: 0,
    }
    setMentors([...mentors, newMentor])
    setFormData({ name: "", expertise: "", experience: "", email: "", phone: "", bio: "" })
    setIsAddDialogOpen(false)
  }

  const handleEditMentor = (mentor: any) => {
    setEditingMentor(mentor)
    setFormData({
      name: mentor.name,
      expertise: mentor.expertise,
      experience: mentor.experience,
      email: mentor.email,
      phone: mentor.phone,
      bio: mentor.bio,
    })
  }

  const handleUpdateMentor = () => {
    setMentors(mentors.map((mentor) => (mentor.id === editingMentor.id ? { ...mentor, ...formData } : mentor)))
    setEditingMentor(null)
    setFormData({ name: "", expertise: "", experience: "", email: "", phone: "", bio: "" })
  }

  const handleDeleteMentor = (id: number) => {
    setMentors(mentors.filter((mentor) => mentor.id !== id))
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Mentors</h1>
            <p className="text-gray-600">Add, edit, and manage mentor profiles</p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>Add New Mentor</Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Mentor</DialogTitle>
                <DialogDescription>Add a new mentor to your academy</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <Label htmlFor="expertise">Expertise</Label>
                  <Input
                    id="expertise"
                    value={formData.expertise}
                    onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
                    placeholder="e.g., Full Stack Development"
                  />
                </div>
                <div>
                  <Label htmlFor="experience">Experience</Label>
                  <Input
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    placeholder="e.g., 5 years"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="mentor@codeit.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+977-9841234567"
                  />
                </div>
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    placeholder="Brief bio and expertise"
                  />
                </div>
                <Button onClick={handleAddMentor} className="w-full">
                  Add Mentor
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {mentor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{mentor.name}</CardTitle>
                    <CardDescription>{mentor.expertise}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">{mentor.bio}</p>
                  <div className="flex justify-between text-sm">
                    <span>Experience: {mentor.experience}</span>
                    <span>Rating: ⭐ {mentor.rating}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Students: {mentor.students}</span>
                    <span>Courses: {mentor.courses.length}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {mentor.courses.map((course, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-2 space-y-2">
                    <p className="text-xs text-gray-500">📧 {mentor.email}</p>
                    <p className="text-xs text-gray-500">📱 {mentor.phone}</p>
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" onClick={() => handleEditMentor(mentor)} className="flex-1">
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteMentor(mentor.id)}
                      className="flex-1"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Edit Dialog */}
        <Dialog open={!!editingMentor} onOpenChange={() => setEditingMentor(null)}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Edit Mentor</DialogTitle>
              <DialogDescription>Update mentor information</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="edit-name">Full Name</Label>
                <Input
                  id="edit-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="edit-expertise">Expertise</Label>
                <Input
                  id="edit-expertise"
                  value={formData.expertise}
                  onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="edit-experience">Experience</Label>
                <Input
                  id="edit-experience"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="edit-email">Email</Label>
                <Input
                  id="edit-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="edit-phone">Phone</Label>
                <Input
                  id="edit-phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="edit-bio">Bio</Label>
                <Textarea
                  id="edit-bio"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                />
              </div>
              <Button onClick={handleUpdateMentor} className="w-full">
                Update Mentor
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  )
}
