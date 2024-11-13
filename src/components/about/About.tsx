import { AiOutlineArrowRight } from "react-icons/ai"
import { MyLinks } from "../nav/Header"
import Reveal from "../util/Reveal"
import { SectionHeader } from "../util/SectionHeader"
import { Stats } from "./Stats"

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="flex flex-col justify-between items-start gap-4 space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              ey! I&apos;m Mohamad, if you haven&apos;t already gathered that by
              now. I&apos;m a designer turned software engineer. I specialize in
              the frontend, primarily Next.js and React, but love building with
              whatever tools are right for the job.
            </p>
          </Reveal>

          {/* <div className="h-full" /> */}

          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I currently work advanced e-commerce solutions. I also toss in my
              ¢2 with the design systems teams from time to time (once an
              artist, always an artist, amirite?).
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">Outside of web,...</p>
          </Reveal>
          {/* <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I&apos;m passively looking for new positions where I can merge my
              love for code with my love for the canvas. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
            </p>
          </Reveal> */}
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-indigo-300">
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  )
}
