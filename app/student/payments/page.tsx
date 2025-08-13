import ProtectedRoute from "@/components/ProtectedRoute"
import StudentPaymentsView from "@/views/StudentPaymentsView"

export default function StudentPaymentsPage() {
  return (
    <ProtectedRoute requiredRole="student">
      <StudentPaymentsView />
    </ProtectedRoute>
  )
}
