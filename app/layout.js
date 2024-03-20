import { Inter, Istok_Web } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const istok = Istok_Web({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
})

export const metadata = {
  title: "Site Presentation",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={istok.className}>{children}</body>
    </html>
  )
}
