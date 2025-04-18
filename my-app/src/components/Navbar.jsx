"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar({ isAuthenticated, handleSignout }) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Clicking "CommunityBuild" redirects to Home */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Heart className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">CommunityBuild</span>
        </Link>

        {/* Only show these links if NOT on /view_all_projects */}
        {pathname !== "/view_all_projects" && (
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/view_all_projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#success-stories" className="text-sm font-medium hover:text-primary transition-colors">
              Success Stories
            </Link>
          </nav>
        )}

        {/* Authentication Buttons */}
        <div className="flex items-center gap-4">
          {!isAuthenticated ? (
            <>
              <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">
                Login
              </Link>
              <Link href="/signup" className="text-sm font-medium hover:text-primary transition-colors ml-4">
                Signup
              </Link>
            </>
          ) : (
            <>
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/view_all_projects" className="text-sm font-medium hover:text-primary transition-colors">
                View
              </Link>
              <Link href="/Create" className="text-sm font-medium hover:text-primary transition-colors">
                Create
              </Link>
              <Link href="/myprojects" className="text-sm font-medium hover:text-primary transition-colors">
                My Projects
              </Link>
              <Link href="/Profile" className="text-sm font-medium hover:text-primary transition-colors">
                Profile
              </Link>
              <button onClick={handleSignout} className="text-sm font-medium hover:text-primary transition-colors">
                Sign Out
              </button>
            </>
          )}
          <Button variant="outline" className="hidden sm:flex">
            <Link href="/view_all_projects">Donate Now</Link>
          </Button>
          {!isAuthenticated && (
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
              <Link href="/login" className="flex items-center justify-center w-full h-full text-white text-lg">
                Start Project
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
