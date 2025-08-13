// Mock API functions to simulate backend operations

import {
  mockCourses,
  mockMentors,
  mockEvents,
  mockBlogs,
  mockStudents,
  mockPayments,
  type Course,
  type Mentor,
  type Event,
  type BlogPost,
  type Student,
  type Payment,
} from "./mockData"

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Courses API
export const coursesApi = {
  getAll: async (): Promise<Course[]> => {
    await delay(500)
    return mockCourses
  },

  getById: async (id: number): Promise<Course | null> => {
    await delay(300)
    return mockCourses.find((course) => course.id === id) || null
  },

  getByCategory: async (category: string): Promise<Course[]> => {
    await delay(400)
    return mockCourses.filter((course) => course.category.toLowerCase() === category.toLowerCase())
  },

  search: async (query: string): Promise<Course[]> => {
    await delay(300)
    return mockCourses.filter(
      (course) =>
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.description.toLowerCase().includes(query.toLowerCase()),
    )
  },

  create: async (courseData: Omit<Course, "id">): Promise<Course> => {
    await delay(600)
    const newCourse = {
      ...courseData,
      id: Math.max(...mockCourses.map((c) => c.id)) + 1,
    }
    mockCourses.push(newCourse)
    return newCourse
  },

  update: async (id: number, courseData: Partial<Course>): Promise<Course | null> => {
    await delay(500)
    const index = mockCourses.findIndex((course) => course.id === id)
    if (index === -1) return null

    mockCourses[index] = { ...mockCourses[index], ...courseData }
    return mockCourses[index]
  },

  delete: async (id: number): Promise<boolean> => {
    await delay(400)
    const index = mockCourses.findIndex((course) => course.id === id)
    if (index === -1) return false

    mockCourses.splice(index, 1)
    return true
  },
}

// Mentors API
export const mentorsApi = {
  getAll: async (): Promise<Mentor[]> => {
    await delay(400)
    return mockMentors
  },

  getById: async (id: number): Promise<Mentor | null> => {
    await delay(300)
    return mockMentors.find((mentor) => mentor.id === id) || null
  },

  create: async (mentorData: Omit<Mentor, "id">): Promise<Mentor> => {
    await delay(600)
    const newMentor = {
      ...mentorData,
      id: Math.max(...mockMentors.map((m) => m.id)) + 1,
    }
    mockMentors.push(newMentor)
    return newMentor
  },

  update: async (id: number, mentorData: Partial<Mentor>): Promise<Mentor | null> => {
    await delay(500)
    const index = mockMentors.findIndex((mentor) => mentor.id === id)
    if (index === -1) return null

    mockMentors[index] = { ...mockMentors[index], ...mentorData }
    return mockMentors[index]
  },

  delete: async (id: number): Promise<boolean> => {
    await delay(400)
    const index = mockMentors.findIndex((mentor) => mentor.id === id)
    if (index === -1) return false

    mockMentors.splice(index, 1)
    return true
  },
}

// Events API
export const eventsApi = {
  getAll: async (): Promise<Event[]> => {
    await delay(400)
    return mockEvents
  },

  getUpcoming: async (): Promise<Event[]> => {
    await delay(300)
    return mockEvents.filter((event) => event.status === "upcoming")
  },

  getById: async (id: number): Promise<Event | null> => {
    await delay(300)
    return mockEvents.find((event) => event.id === id) || null
  },

  register: async (eventId: number, studentId: number): Promise<boolean> => {
    await delay(500)
    const event = mockEvents.find((e) => e.id === eventId)
    if (!event || event.registered >= event.capacity) return false

    event.registered += 1
    return true
  },

  create: async (eventData: Omit<Event, "id">): Promise<Event> => {
    await delay(600)
    const newEvent = {
      ...eventData,
      id: Math.max(...mockEvents.map((e) => e.id)) + 1,
    }
    mockEvents.push(newEvent)
    return newEvent
  },
}

// Blog API
export const blogsApi = {
  getAll: async (): Promise<BlogPost[]> => {
    await delay(400)
    return mockBlogs.filter((blog) => blog.status === "published")
  },

  getById: async (id: number): Promise<BlogPost | null> => {
    await delay(300)
    return mockBlogs.find((blog) => blog.id === id) || null
  },

  getByCategory: async (category: string): Promise<BlogPost[]> => {
    await delay(400)
    return mockBlogs.filter(
      (blog) => blog.category.toLowerCase() === category.toLowerCase() && blog.status === "published",
    )
  },

  incrementViews: async (id: number): Promise<void> => {
    await delay(200)
    const blog = mockBlogs.find((b) => b.id === id)
    if (blog) blog.views += 1
  },
}

// Students API
export const studentsApi = {
  getAll: async (): Promise<Student[]> => {
    await delay(400)
    return mockStudents
  },

  getById: async (id: number): Promise<Student | null> => {
    await delay(300)
    return mockStudents.find((student) => student.id === id) || null
  },

  enroll: async (studentId: number, courseId: number): Promise<boolean> => {
    await delay(500)
    const student = mockStudents.find((s) => s.id === studentId)
    const course = mockCourses.find((c) => c.id === courseId)

    if (!student || !course) return false

    if (!student.enrolledCourses.includes(course.title)) {
      student.enrolledCourses.push(course.title)
      student.totalPayments += course.price
      student.progress[courseId.toString()] = 0
      course.students += 1
    }

    return true
  },

  updateProgress: async (studentId: number, courseId: number, progress: number): Promise<boolean> => {
    await delay(300)
    const student = mockStudents.find((s) => s.id === studentId)
    if (!student) return false

    student.progress[courseId.toString()] = progress
    return true
  },
}

// Payments API
export const paymentsApi = {
  getAll: async (): Promise<Payment[]> => {
    await delay(400)
    return mockPayments
  },

  getByStudent: async (studentName: string): Promise<Payment[]> => {
    await delay(300)
    return mockPayments.filter((payment) => payment.studentName === studentName)
  },

  create: async (paymentData: Omit<Payment, "id">): Promise<Payment> => {
    await delay(600)
    const newPayment = {
      ...paymentData,
      id: Math.max(...mockPayments.map((p) => p.id)) + 1,
    }
    mockPayments.push(newPayment)
    return newPayment
  },

  updateStatus: async (id: number, status: Payment["status"]): Promise<boolean> => {
    await delay(400)
    const payment = mockPayments.find((p) => p.id === id)
    if (!payment) return false

    payment.status = status
    return true
  },
}

// Analytics API
export const analyticsApi = {
  getDashboardStats: async () => {
    await delay(500)
    return {
      totalStudents: mockStudents.length,
      activeCourses: mockCourses.length,
      totalRevenue: mockPayments.filter((p) => p.status === "completed").reduce((sum, p) => sum + p.amount, 0),
      pendingEnrollments: mockPayments.filter((p) => p.status === "pending").length,
      popularCourses: mockCourses.sort((a, b) => b.students - a.students).slice(0, 5),
      recentActivity: [
        { type: "enrollment", message: "New student enrolled in React Fundamentals", time: "2 minutes ago" },
        { type: "payment", message: "Payment received for Node.js Masterclass", time: "15 minutes ago" },
        { type: "blog", message: 'New blog post published: "JavaScript Best Practices"', time: "1 hour ago" },
      ],
    }
  },
}
