import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-screen max-h-screen mt-20 flex justify-center">
      <div className="max-w-screen-md max-h-screen bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            Movies Review Home Page
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Are you hear to brows our movies collection or do you have something
            to say about movies, we are hear for it all, come and see what we
            have on offer.
          </p>
        </div>
      </div>
    </div>
  );
}
