import ProtectedRoute from "@/components/ProtectedRoute"
import StudentEventsView from "@/views/StudentEventsView"

export default function StudentEventsPage() {
  return (
    <ProtectedRoute requiredRole="student">
      <StudentEventsView />
    </ProtectedRoute>
  )
}
