import { About } from "@/components/about/About"
import { Contact } from "@/components/contact/Contact"
import { Experience } from "@/components/experience/Experience"
import Hero from "@/components/hero/Hero"
import { Header } from "@/components/nav/Header"
import { SideBar } from "@/components/nav/SideBar"
import { Projects } from "@/components/projects/Projects"

export default function Home() {
  return (
    <div className="grid grid-cols-[54px_1fr]">
      <SideBar />
      <main>
        <Header />
        <div className="mx-auto max-w-5xl px-4 md:px-8 space-y-32 pb-24">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>
    </div>
  )
}
