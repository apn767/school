import SchoolForm from "@/components/SchoolForm";
export const metadata = { title: "Add School • SchoolScout" };
export default function Page() {
  return (
    <div className="max-w-3xl  mx-auto">
      <h1 className="text-2xl text-center font-bold mb-4">Add a School</h1>
      <p className="text-sm text-gray-600 text-center mb-4">
        Fill the details and upload an image. All fields are validated.
      </p>
      <SchoolForm />
    </div>
  );
}
