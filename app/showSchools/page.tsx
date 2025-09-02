import { prisma } from "@/lib/db";
import SchoolCard from "@/components/SchoolCard";
import { Input } from "@/components/Ui";
import type { School } from "@prisma/client";

async function getSchools(query: string, state: string): Promise<School[]> {
  const where: any = {};
  if (query) {
    where.OR = [{ name: { contains: query } }, { city: { contains: query } }];
  }
  if (state) {
    where.state = { contains: state };
  }
  const data = await prisma.school.findMany({
    where,
    orderBy: { createdAt: "desc" },
    take: 24,
  });
  return data;
}

export const metadata = { title: "Browse Schools • SchoolScout" };

export default async function Page({
  searchParams,
}: {
  searchParams: { q?: string; state?: string };
}) {
  const q = searchParams.q ?? "";
  const state = searchParams.state ?? "";

  const schools = await getSchools(q, state);

  return (
    <div className="grid gap-4">
      <div className="card p-4 grid gap-3 sm:grid-cols-2">
        <form className="grid gap-2" action="/showSchools">
          <label className="text-sm font-medium">Search</label>
          <Input
            name="q"
            defaultValue={q}
            placeholder="Search by name or city"
          />
        </form>
        <form className="grid gap-2" action="/showSchools">
          <label className="text-sm font-medium">State</label>
          <Input
            name="state"
            defaultValue={state}
            placeholder="e.g., Gujarat"
          />
        </form>
      </div>

      {schools.length === 0 ? (
        <p className="text-center text-gray-600">
          No schools found. Try a different search.
        </p>
      ) : (
        <section
          role="list"
          aria-label="Schools"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {schools.map((s: School) => (
            <SchoolCard
              key={s.id}
              id={s.id}
              name={s.name}
              city={s.city}
              address={s.address}
              image={s.image}
            />
          ))}
        </section>
      )}
    </div>
  );
}
