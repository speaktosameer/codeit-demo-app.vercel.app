"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import StudentLayout from "@/components/StudentLayout"
import Link from "next/link"

export default function StudentDashboardView() {
  // Mock data for enrolled courses
  const enrolledCourses = [
    { id: 1, title: "React.js Fundamentals", progress: 75, duration: "8 weeks", instructor: "John Doe" },
    { id: 2, title: "UI/UX Design Basics", progress: 45, duration: "6 weeks", instructor: "Jane Smith" },
    { id: 3, title: "Python Programming", progress: 90, duration: "10 weeks", instructor: "Mike Johnson" },
  ]

  const upcomingEvents = [
    { id: 1, title: "Web Development Workshop", date: "2024-01-15", time: "2:00 PM" },
    { id: 2, title: "Career Guidance Session", date: "2024-01-20", time: "4:00 PM" },
    { id: 3, title: "Tech Talk: AI in 2024", date: "2024-01-25", time: "6:00 PM" },
  ]

  const recentPayments = [
    { id: 1, course: "React.js Fundamentals", amount: "Rs. 25,000", date: "2024-01-01", status: "Completed" },
    { id: 2, course: "UI/UX Design Basics", amount: "Rs. 22,000", date: "2023-12-15", status: "Completed" },
  ]

  return (
    <StudentLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
          <p className="text-gray-600">Here's what's happening with your learning journey.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Enrolled Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{enrolledCourses.length}</div>
              <p className="text-xs text-muted-foreground">Active enrollments</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Average Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">70%</div>
              <p className="text-xs text-muted-foreground">Across all courses</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Certificates Earned</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Completed courses</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Study Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">Total learning time</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Courses */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Current Courses</h2>
              <Link href="/student/courses">
                <Button variant="outline" size="sm" className="bg-transparent">
                  View All
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {enrolledCourses.slice(0, 2).map((course) => (
                <Card key={course.id}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription>
                      Instructor: {course.instructor} • Duration: {course.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <Button className="w-full mt-4 bg-transparent" variant="outline">
                      Continue Learning
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Upcoming Events</CardTitle>
                  <Link href="/student/events">
                    <Button variant="outline" size="sm" className="bg-transparent">
                      View All
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingEvents.slice(0, 3).map((event) => (
                    <div key={event.id} className="flex justify-between items-start py-2 border-b last:border-b-0">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{event.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          {event.date} at {event.time}
                        </p>
                      </div>
                      <Button size="sm" variant="outline" className="ml-2 bg-transparent">
                        Join
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Payments */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Recent Payments</CardTitle>
                  <Link href="/student/payments">
                    <Button variant="outline" size="sm" className="bg-transparent">
                      View All
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentPayments.map((payment) => (
                    <div key={payment.id} className="flex justify-between items-start py-2 border-b last:border-b-0">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{payment.course}</h4>
                        <p className="text-xs text-muted-foreground">{payment.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{payment.amount}</div>
                        <div className="text-xs text-green-600">{payment.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/categories">
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <span className="mr-2">🔍</span>
                    Browse New Courses
                  </Button>
                </Link>
                <Link href="/student/profile">
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <span className="mr-2">👤</span>
                    Update Profile
                  </Button>
                </Link>
                <Link href="/events">
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <span className="mr-2">📅</span>
                    View All Events
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </StudentLayout>
  )
}
