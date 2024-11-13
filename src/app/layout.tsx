import "@/styles/globals.css"
import { ReactNode } from "react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mohmdev",
  description:
    "Specialized in custom software development, full-stack solutions, and enterprise applications. Delivering scalable and innovative technology solutions.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body id="root" className={`${inter.className} bg-zinc-900 text-zinc-50`}>
        {children}
      </body>
    </html>
  )
}
