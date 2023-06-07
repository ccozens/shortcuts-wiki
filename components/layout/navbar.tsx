"use client";

import NavButton from "@/components/shared/buttons/navButton";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import navLinks from "./navLinks";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();

  // destructure navLinks to githubLink and homeOrAbout
  const { githubLink, homeOrAbout } = navLinks();

  return (
    <>
      <SignInModal />

      <div className="my-auto flex max-w-screen-xl items-center justify-between gap-2">
        <NavButton text={homeOrAbout}> </NavButton>
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
        <NavButton text={githubLink}> </NavButton>
      </div>
    </>
  );
}
