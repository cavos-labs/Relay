"use client";

import { useState } from "react";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      // TODO: replace with your API route or waitlist service
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="border-t border-white/10 px-6 py-16 md:py-20">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Join the waitlist
        </h2>
        <p className="mt-3 text-white/80">
          Be the first to know when Relay is ready. No spam.
        </p>
        {status === "success" ? (
          <p className="mt-6 text-lg font-medium text-white">
            You&apos;re on the list. We&apos;ll be in touch.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 w-full max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                disabled={status === "loading"}
                className="min-w-0 flex-1 rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/20 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="shrink-0 rounded-lg border border-white bg-white px-6 py-3 text-base font-medium text-black transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {status === "loading" ? "Joining…" : "Join"}
              </button>
            </div>
            {status === "error" && (
              <p className="mt-3 text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
