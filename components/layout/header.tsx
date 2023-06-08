import Nav from "./nav";
import Link from 'next/link';

const Header = () => {
  return (
    <div className="mx-5 flex h-16 max-w-screen-xl justify-between">
      <h1 className="m-4 text-4xl font-extrabold leading-none tracking-tight  text-green-400 md:text-5xl lg:text-6xl ">
        <Link href="https://www.youtube.com/watch?v=9Ht5RZpzPqw" target="_blank">
        All the small things
        </Link>
      </h1>
      {/* @ts-expect-error Server Component */}
      <Nav />
    </div>
  );
};

export default Header;
