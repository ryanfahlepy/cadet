
import HeaderRoot from './HeaderRoot'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Poppins } from '@next/font/google'
import { useState } from 'react'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function Layout({ children }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const closeMobileHeader = () => {
    if (isOpen === true) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <div className={poppins.className}>
      <Head>
        <link rel="icon" href="/images/logo/logo_menkad.png" />
      </Head>
      {router.pathname === "/"
        ? <HeaderRoot setIsOpen={setIsOpen} isOpenParent={isOpen} />
        : <HeaderRoot background={"bg-[#650000]"} setIsOpen={setIsOpen} isOpenParent={isOpen} />
      }
      <main onClick={closeMobileHeader}>{children}</main>
      <Footer />
    </div>
  )
}