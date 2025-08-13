import CategoryCoursesView from "@/views/CategoryCoursesView"

export default function CategoryPage({ params }: { params: { category: string } }) {
  return <CategoryCoursesView category={params.category} />
}
