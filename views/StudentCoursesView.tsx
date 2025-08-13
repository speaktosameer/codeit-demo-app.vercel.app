"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StudentLayout from "@/components/StudentLayout"

export default function StudentCoursesView() {
  const enrolledCourses = [
    {
      id: 1,
      title: "React.js Fundamentals",
      progress: 75,
      duration: "8 weeks",
      instructor: "John Doe",
      status: "In Progress",
      enrolledDate: "2024-01-01",
      completionDate: null,
      totalLessons: 24,
      completedLessons: 18,
      nextLesson: "React Hooks Advanced",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "UI/UX Design Basics",
      progress: 45,
      duration: "6 weeks",
      instructor: "Jane Smith",
      status: "In Progress",
      enrolledDate: "2023-12-15",
      completionDate: null,
      totalLessons: 18,
      completedLessons: 8,
      nextLesson: "User Research Methods",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Python Programming",
      progress: 100,
      duration: "10 weeks",
      instructor: "Mike Johnson",
      status: "Completed",
      enrolledDate: "2023-10-01",
      completionDate: "2023-12-10",
      totalLessons: 30,
      completedLessons: 30,
      nextLesson: null,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "JavaScript Essentials",
      progress: 100,
      duration: "6 weeks",
      instructor: "Sarah Wilson",
      status: "Completed",
      enrolledDate: "2023-08-01",
      completionDate: "2023-09-15",
      totalLessons: 20,
      completedLessons: 20,
      nextLesson: null,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const inProgressCourses = enrolledCourses.filter((course) => course.status === "In Progress")
  const completedCourses = enrolledCourses.filter((course) => course.status === "Completed")

  return (
    <StudentLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Courses</h1>
          <p className="text-gray-600">Track your learning progress and continue your education journey.</p>
        </div>

        <Tabs defaultValue="in-progress" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="in-progress">In Progress ({inProgressCourses.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedCourses.length})</TabsTrigger>
            <TabsTrigger value="all">All Courses ({enrolledCourses.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="in-progress" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {inProgressCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-200">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="default">{course.status}</Badge>
                      <div className="text-right text-sm text-gray-500">
                        {course.completedLessons}/{course.totalLessons} lessons
                      </div>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>
                      Instructor: {course.instructor} • Duration: {course.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>

                    {course.nextLesson && (
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-sm font-medium text-blue-900">Next Lesson:</div>
                        <div className="text-sm text-blue-700">{course.nextLesson}</div>
                      </div>
                    )}

                    <div className="flex space-x-2">
                      <Button className="flex-1">Continue Learning</Button>
                      <Button variant="outline" className="bg-transparent">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {completedCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-200 relative">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Completed
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>
                      Instructor: {course.instructor} • Completed: {course.completionDate}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <span className="mr-2">🏆</span>
                        <span className="text-sm font-medium text-green-900">Course Completed!</span>
                      </div>
                      <div className="text-sm text-green-700">100%</div>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1">Download Certificate</Button>
                      <Button variant="outline" className="bg-transparent">
                        Review Course
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-200 relative">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge
                        variant={course.status === "Completed" ? "secondary" : "default"}
                        className={
                          course.status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                        }
                      >
                        {course.status}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>
                      Instructor: {course.instructor} • Enrolled: {course.enrolledDate}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>

                    <div className="flex space-x-2">
                      {course.status === "In Progress" ? (
                        <Button className="flex-1">Continue Learning</Button>
                      ) : (
                        <Button className="flex-1">Download Certificate</Button>
                      )}
                      <Button variant="outline" className="bg-transparent">
                        View Details
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
