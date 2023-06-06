// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="text-gray-800 align-middle">Hello, Dashboard About!</h1>
      <Link href="/">Home</Link>
    </>
  );
}
