import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 pt-24 pb-16">
      {/* Splatter / spray paint background image */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        aria-hidden
      >
        <Image
          src="/splatter-bg.png"
          alt=""
          width={1200}
          height={800}
          className="h-auto w-[min(100%,140vmin)] max-w-[140vmin] object-contain opacity-90"
          priority
          style={{ objectPosition: "center center" }}
        />
      </div>

      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Turn Dapps into Apps
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">
          Relay embeds Stellar smart accounts directly into your product — with
          passkeys, gas abstraction, and programmable security. No extensions.
          No seed phrases. No wallet popups.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg border border-white bg-black px-6 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
          >
            Start building
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-black bg-white px-6 py-3 text-base font-medium text-black transition-opacity hover:opacity-90"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
