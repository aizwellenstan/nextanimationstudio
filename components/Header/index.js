import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useLanguage from '../../hooks/useLanguage'
import usePath from '../../hooks/usePath'
import { StyleHeader, StyleLogo, StyleHamburger, StyleNav } from './style'
import { IconInstagram, IconTwitter, IconYoutube, IconFacebook } from '../Icons'
import LanguageButton from './LanguageButton'
import MenuButton from './MenuButton'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const language = useLanguage()
  const path = usePath(language)

  const navOpenHandler = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <StyleHeader>
      <StyleLogo>
        <Link href={`${path}/home`} passHref>
          <a>
            <Image src="/global/logo.png" alt="me" layout="responsive" width={279} height={72} />
          </a>
        </Link>
      </StyleLogo>
      <StyleHamburger className={isNavOpen ? 'open' : null} onClick={navOpenHandler}>
        <div className="line-group">
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </StyleHamburger>
      <StyleNav className={isNavOpen ? 'open' : null}>
        <div className="nav-group">
          <div className="bg">
            <div className="language">
              <LanguageButton onNavOpen={navOpenHandler} name="E N" language="/en" /> /
              <LanguageButton onNavOpen={navOpenHandler} name="C N" language="/cn" /> /
              <LanguageButton onNavOpen={navOpenHandler} name="J P" language="/jp" />
            </div>
            <div className="menu">
              <MenuButton onNavOpen={navOpenHandler} serialNumber="01" name="HOME" url="/home" />
              <MenuButton onNavOpen={navOpenHandler} serialNumber="02" name="OUR VISION" url="/ourvision" />
              <MenuButton onNavOpen={navOpenHandler} serialNumber="03" name="OUR BUSINESS" url="/ourbusiness" />
              <MenuButton onNavOpen={navOpenHandler} serialNumber="04" name="OUR WORKS" url="/ourworks" />
              <MenuButton onNavOpen={navOpenHandler} serialNumber="05" name="OUR UPDATES" url="/ourupdates" />
              <MenuButton onNavOpen={navOpenHandler} serialNumber="06" name="CONTACT US" url="/home?contactus" />
            </div>
            <div className="social-media">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <IconInstagram fill="#fff" />
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                <IconTwitter fill="#fff" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                <IconYoutube fill="#fff" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <IconFacebook fill="#fff" />
              </a>
            </div>
          </div>
        </div>
      </StyleNav>
    </StyleHeader>
  )
}
