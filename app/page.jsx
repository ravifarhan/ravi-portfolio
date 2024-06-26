import { FiEye } from "react-icons/fi";
import { Button } from "@/components/ui/button";

//components
import SocialMedia from "@/components/SocialMedia";
import Photo from "@/components/Photo";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:my-6 xl:items-start">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Fullstack Developer</span>
            <h1 className="h2 mb-6">
              Hello, I'm <br />
              <span className="text-accent">Muhamad Ravi Farhan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I have a solid background in Information Management and have honed
              my technical skills through coding bootcamp. And i have experience
              working on several real projects.
            </p>

            {/* button cv & social media */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href="https://drive.google.com/file/d/1U36SleFUbHMfCJHuxTtisBYOemGRBZ9I/view"
                target="_blank"
                className="uppercase flex items-center gap-2 border border-accent rounded-full py-2 px-6 hover:bg-accent hover:text-primary hover:transition-all duration-500"
              >
                <span>See CV</span>
                <FiEye className="text-xl" />
              </Link>
              <div className="mb-8 xl:mb-0">
                <SocialMedia
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo Ravi */}
          <div className="mx-auto order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
