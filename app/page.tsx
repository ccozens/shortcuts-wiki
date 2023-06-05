import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { Github } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";

export default function Page() {
  console.log("Home");
  return (
    <>
      <h1 className="text-gray-800">Hello, Next.js!</h1>;
      <a
        className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
        href="https://github.com/ccozens/shortcuts-wiki"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
        <p>
          <span className="hidden sm:inline-block">Code at </span> GitHub{" "}
        </p>
      </a>
    </>
  );
}
