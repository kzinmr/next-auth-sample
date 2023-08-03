import type { ReactNode } from "react"

import "@/app/styles.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Providers from "@/components/providers"

interface RootLayoutProps {
    children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head/>
      <body>
      <Providers>
        <Header />
        <main>{children}</main>
        <Footer />
      </Providers>
      </body>
    </html>
  )
}
