import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  UserButton,
  // SignIn,
  useUser,
  // SignUp,
  SignInButton,
} from "@clerk/clerk-react";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";

export const Header = () => {
  const { user } = useUser();

  return (
    <>
      <nav className=" flex justify-between items-center border-amber-500 p-4">
        {/* Logo */}
        <Link to="/">
          <img
            src="/ehire.png"
            className="h-12 w-full rounded-2xl"
            alt="Hirrd Logo"
          />
        </Link>

        {/* right side buttons */}
        <div className="flex gap-8">
          <SignedOut>
            <SignInButton 
              mode="modal"
              signUpForceRedirectUrl="/onboarding"
              fallbackRedirectUrl="/"
            >
              <Button variant="outline" className="cursor-pointer">
                Login
              </Button>

            </SignInButton>
          </SignedOut>

          <SignedIn>
            {/* agar user recruiter hai to post job ka button show karo */}
            {user?.unsafeMetadata?.role === "recruiter" && (
              <Link to="/post-job">
                <Button variant="destructive" className="rounded-full">
                  <PenBox size={20} className="mr-2" />
                  Post a Job
                </Button>
              </Link>
            )}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-20 h-20",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/my-jobs"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/saved-jobs"
                />
                <UserButton.Action label="manageAccount" />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>
    </>
  );
};
