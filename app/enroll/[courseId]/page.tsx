import EnrollmentView from "@/views/EnrollmentView"

export default function EnrollmentPage({ params }: { params: { courseId: string } }) {
  return <EnrollmentView courseId={params.courseId} />
}
