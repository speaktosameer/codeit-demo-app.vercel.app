import ProtectedRoute from "@/components/ProtectedRoute"
import StudentDashboardView from "@/views/StudentDashboardView"

export default function StudentPage() {
  return (
    <ProtectedRoute requiredRole="student">
      <StudentDashboardView />
    </ProtectedRoute>
  )
}
