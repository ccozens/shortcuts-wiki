"use client";

import NavButton from "@/components/shared/buttons/navButton";
import Link from "next/link";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import { Github } from "@/components/shared/icons";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const homeLink = <Link href="/">Home</Link>;
  const aboutLink = <Link href="/about">About</Link>;
  const githubLink = (
    <Link
      href="https://github.com/ccozens/shortcuts-wiki"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="flex gap-2">
        <Github />
        Code
      </span>
    </Link>
  );

  return (
    <>
      <SignInModal />

      <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
        <NavButton text={githubLink}> </NavButton>
        <div>
          {session ? (
            <UserDropdown session={session} />
          ) : (
            <NavButton
              onClick={() => setShowSignInModal(true)}
              text="Sign in"
            ></NavButton>
          )}
        </div>
        <NavButton text={homeLink}> </NavButton>
        <NavButton text={aboutLink}> </NavButton>
      </div>
    </>
  );
}
