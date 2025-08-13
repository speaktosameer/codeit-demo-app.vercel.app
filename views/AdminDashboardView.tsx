"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AdminLayout from "@/components/AdminLayout"

export default function AdminDashboardView() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600">Manage your coding academy from here</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,234</div>
              <p className="text-xs opacity-80">+12% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Active Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">45</div>
              <p className="text-xs opacity-80">+3 new this month</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">Rs. 2,45,000</div>
              <p className="text-xs opacity-80">+8% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Pending Enrollments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">23</div>
              <p className="text-xs opacity-80">Requires approval</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <span className="mr-3 text-2xl">📚</span>
                Manage Courses
              </CardTitle>
              <CardDescription>Add, edit, or remove courses and curriculum</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/admin/courses">
                <Button className="w-full">View Courses</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <span className="mr-3 text-2xl">👥</span>
                Manage Students
              </CardTitle>
              <CardDescription>View and manage student accounts and progress</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/admin/students">
                <Button className="w-full">View Students</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <span className="mr-3 text-2xl">👨‍🏫</span>
                Manage Mentors
              </CardTitle>
              <CardDescription>Add, edit, or remove mentor profiles</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/admin/mentors">
                <Button className="w-full">View Mentors</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <span className="mr-3 text-2xl">📅</span>
                Manage Events
              </CardTitle>
              <CardDescription>Create and manage workshops and events</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/admin/events">
                <Button className="w-full">View Events</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <span className="mr-3 text-2xl">📝</span>
                Manage Blogs
              </CardTitle>
              <CardDescription>Create and edit blog posts and articles</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/admin/blogs">
                <Button className="w-full">View Blogs</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <span className="mr-3 text-2xl">💰</span>
                Payment Reports
              </CardTitle>
              <CardDescription>View payment history and financial reports</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/admin/payments">
                <Button className="w-full">View Reports</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates and activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New student enrolled in React Fundamentals</p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Payment received for Node.js Masterclass</p>
                  <p className="text-xs text-gray-500">15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-purple-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New blog post published: "JavaScript Best Practices"</p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
