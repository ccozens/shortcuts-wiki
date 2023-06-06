import Nav from "./nav";

const Header = () => {
  return (
    <div className="flex max-w-screen-xl">
      <h1 className="text-green-400"> Title </h1>
      {/* @ts-expect-error Server Component */}
      <Nav />
    </div>
  );
};

export default Header;
