import LinkButton from "@/components/LinkButton";

export default function SuccsessPage() {
  return (
    <div className="max-w-screen max-h-screen mt-20 flex justify-center">
      <div className="max-w-screen-md max-h-screen bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            Review Added Successfully!
          </h5>
          <LinkButton href="/add-review">add another review?</LinkButton>
        </div>
      </div>
    </div>
  );
}
