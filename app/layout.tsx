import './globals.css'
import { RecoilRoot } from "recoil"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <RecoilRoot>{children}</RecoilRoot></body>
    </html>
  )
}
