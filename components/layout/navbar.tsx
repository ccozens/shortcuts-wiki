"use client";

import NavButton from "@/components/shared/buttons/navButton";
import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);
  const homeLink = <Link href="/">Home</Link>;
  const aboutLink = <Link href="/about">About</Link>;
  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Precedent</p>
          </Link>
          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <NavButton 
              onClick={() => setShowSignInModal(true)}
              text="Sign in">
              </NavButton>
            )}
          </div>
          <NavButton text={homeLink}> </NavButton>
          <NavButton text={aboutLink}> </NavButton>
        </div>
      </div>
    </>
  );
}
