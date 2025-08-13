import ProtectedRoute from "@/components/ProtectedRoute"
import StudentProfileView from "@/views/StudentProfileView"

export default function StudentProfilePage() {
  return (
    <ProtectedRoute requiredRole="student">
      <StudentProfileView />
    </ProtectedRoute>
  )
}
