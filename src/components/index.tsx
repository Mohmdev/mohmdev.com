import React from "react"
import { About } from "./about/About"
import { Contact } from "./contact/Contact"
import { Experience } from "./experience/Experience"
import Hero from "./hero/Hero"
import { Header } from "./nav/Header"
import { SideBar } from "./nav/SideBar"
import { Projects } from "./projects/Projects"

export const HomPage = () => {
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
