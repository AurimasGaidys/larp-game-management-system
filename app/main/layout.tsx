import { MainHeader } from '../../components/header/header'
import { EventContext } from '../../dataLayer/globalContext/eventContext'
import { UserContext } from '../../dataLayer/globalContext/userContext'
import '../globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <MainHeader />
        {children}</body>
    </html>
  )
}
