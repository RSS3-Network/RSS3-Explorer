import type { Metadata } from "next"

import "@mantine/charts/styles.css"

import { Providers } from "@/components/providers"

import "./globals.css"

import { Shell } from "@/components/shell"

export const metadata: Metadata = {
  title: "RSS3 Explorer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Shell>{children}</Shell>
        </Providers>
      </body>
    </html>
  )
}
