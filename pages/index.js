import Image from "next/image";
import { Inter } from "next/font/google";
import AnimateText from "@/components/animate-text";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} h-[100vh] flex flex-col items-center justify-end font-extrabold`}
    >
      <AnimateText text={"refinestudio"} />
    </main>
  );
}
