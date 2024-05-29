import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">DevOps Engineer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Purushotam Sharma</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              As an experienced DevOps engineer, I specialize in CI/CD pipelines, cloud infrastructure, and automation, leveraging tools like Jenkins, Docker, and AWS to enhance efficiency and reliability. I am dedicated to continuous improvement and fostering collaboration to drive business success.
            </p>

            {/* button and socials */}
            
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="flex uppercase gap-2 items-center">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent hover:bg-accent hover:text-primary rounded-full flex items-center justify-center  text- accent text-base  hover-transition-all duration-500"
                />
              </div>
            </div>


          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home