interface CourseRequirementsProps {
  requirements: { id: string; content: string }[];
}

export default function CourseRequirements({
  requirements,
}: CourseRequirementsProps) {
  return (
    <section className="mx-auto w-full lg:w-[70%]">
      <h1 className="my-6 text-2xl font-semibold md:text-3xl">Request</h1>

      <ul className="flex w-full list-inside list-disc flex-col space-y-4">
        {requirements && requirements.length > 0 ? (
          requirements.map((req) => {
            return <li key={req.id}>{req.content}</li>;
          })
        ) : (
          <li>The course has no requirements</li>
        )}
      </ul>
    </section>
  );
}
