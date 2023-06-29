import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-24">
      <h2 className="text-2xl font-semibold">All Training</h2>

      <div className="grid grid-cols-2">
        <Card displayName="All" linkTo="/training" />
        <Card displayName="Arm" linkTo="/training" />
        <Card displayName="Chest" linkTo="training" />
        <Card displayName="Back" linkTo="training" />
        <Card displayName="Foot" linkTo="training" />
      </div>
    </main>
  );
}

function Card({
  displayName,
  linkTo,
}: {
  displayName: string;
  linkTo: string;
}) {
  return (
    <Link href={linkTo}>
      <div className="m-3 h-[4cm] w-[6cm] border p-6 hover:bg-slate-800">
        <h3 className="text-xl">{displayName}</h3>
      </div>
    </Link>
  );
}
