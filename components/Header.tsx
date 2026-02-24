import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#161616]/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-white">
            RELAY
          </span>
          <span className="text-sm font-normal text-white/90" style={{ alignSelf: "flex-end", marginBottom: "2px" }}>
            by
          </span>
          <span style={{ alignSelf: "flex-end", marginBottom: "2px" }} className="relative h-4 w-4">
            <Image
              src="/cavos-black.png"
              alt="Cavos"
              width={16}
              height={16}
              className="h-4 w-4 invert"
            />
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-white">
          <Link href="/" className="transition-opacity hover:opacity-80">
            Docs
          </Link>
          <Link href="/" className="transition-opacity hover:opacity-80">
            More
          </Link>
          <span className="h-4 w-px bg-white/30" aria-hidden />
          <Link href="/" className="transition-opacity hover:opacity-80">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
