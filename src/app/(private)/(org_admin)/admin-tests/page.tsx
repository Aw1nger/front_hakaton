import { CourseList } from "@/features/course-list";

const Page = () => {
  return (
    <section className="container py-10">
      <CourseList type={"admin"} />
    </section>
  );
};

export default Page;
