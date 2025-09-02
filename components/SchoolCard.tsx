import Image from "next/image";
export type SchoolCardProps = {
  id: number;
  name: string;
  city: string;
  address: string;
  image?: string | null;
};
export default function SchoolCard({
  id,
  name,
  city,
  address,
  image,
}: SchoolCardProps) {
  return (
    <article className="card overflow-hidden" role="listitem">
      <Image
        src={image ?? "/greenvalley.jpg"}
        alt={`${name} campus`}
        width={640}
        height={360}
        className="h-44 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold" title={name}>
          {name}
        </h3>
        <p className="text-sm text-gray-600 truncate" title={address}>
          {address}
        </p>
        <p className="text-xs mt-1 text-gray-500">{city}</p>
      </div>
    </article>
  );
}
