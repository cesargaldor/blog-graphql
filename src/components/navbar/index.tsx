import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={`w-full bg-transparent`}>
      <div className="h-20 max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">Home</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
