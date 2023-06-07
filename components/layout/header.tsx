import Nav from "./nav";

const Header = () => {
  return (
    <div className="mx-5 flex h-16 max-w-screen-xl justify-between">
      <h1 className="m-4 text-4xl font-extrabold leading-none tracking-tight  text-green-400 md:text-5xl lg:text-6xl ">
        {" "}
        All the things{" "}
      </h1>
      {/* @ts-expect-error Server Component */}
      <Nav />
    </div>
  );
};

export default Header;
