// app/dashboard/layout.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          open ? "w-1/4" : "w-16"
        } bg-gray-900 text-white flex flex-col p-4 transition-all duration-300`}
      >
        <button
          className="mb-4"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>
        <h2 className="text-lg font-bold mb-4">KodeMe</h2>
        <nav className="flex-1 space-y-2">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard/game">Games</Link>
          <Link href="/dashboard/profile">Profile</Link>
        </nav>
        <div className="mt-auto">
          <UserButton afterSignOutUrl="/" />
        </div>
        <footer className="mt-4 text-xs text-gray-400">
          © 2025 KodeMe
        </footer>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-100">{children}</div>
    </div>
  );
}
