import ProtectedRoute from "@/components/ProtectedRoute"
import StudentCoursesView from "@/views/StudentCoursesView"

export default function StudentCoursesPage() {
  return (
    <ProtectedRoute requiredRole="student">
      <StudentCoursesView />
    </ProtectedRoute>
  )
}
