import { FiEye } from "react-icons/fi";
import { Button } from "@/components/ui/button";

//components
import SocialMedia from "@/components/SocialMedia";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 xl:items-start">
          <div className="text-center xl:text-left">
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
              <Button
                variant="outline"
                size="md"
                className="uppercase flex items-center gap-2"
              >
                <span>See CV</span>
                <FiEye className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <SocialMedia
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo Ravi */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
