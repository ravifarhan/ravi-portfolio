import Link from "next/link";
import Navbar from "./Navbar";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Ravi Farhan<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Navbar Desktop */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Navbar Mobile */}
        <div className="xl:hidden">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
