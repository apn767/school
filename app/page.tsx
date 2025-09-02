import Link from "next/link";
import { Button } from "@/components/Ui";

export const metadata = { title: "SchoolScout • Home" };

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6">
      <h1 className="text-3xl font-bold">Welcome to SchoolScout</h1>
      <p className="text-gray-600">Choose an option below to get started</p>
      <div className="flex gap-4">
        <Link href="/addSchool">
          <Button className="bg-gray-200 text-white-900 hover:bg-gray-500">
            Add School
          </Button>
        </Link>
        <Link href="/showSchools">
          <Button className="bg-gray-200 text-white-900 hover:bg-gray-500">
            Show Schools
          </Button>
        </Link>
      </div>
    </div>
  );
}
