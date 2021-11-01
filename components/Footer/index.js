import React from 'react'
import Image from 'next/image'
import MenuButton from './MenuButton'
import { StyleFooter, StyleSiteMap, StyleAside, StyleLogo } from './style'
import { IconFacebook, IconTwitter, IconYoutube, IconInstagram } from '../Icons'

export default function Footer() {
  return (
    <StyleFooter>
      <StyleSiteMap>
        <div className="menu">
          <MenuButton name="OUR VISION" url="/ourvision" />
          <MenuButton name="OUR BUSINESS" url="/ourbusiness" />
          <MenuButton name="OUR WORKS" url="/ourworks" />
          <MenuButton name="OUR UPDATES" url="/ourupdates" />
          <MenuButton name="CONTACT US" url="/home?contactus" />
        </div>
        <div className="social-and-copyright">
          <div className="social-media">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <IconInstagram fill="#0915f9" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <IconTwitter fill="#0915f9" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <IconYoutube fill="#0915f9" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <IconFacebook fill="#0915f9" />
            </a>
          </div>
          <p className="copyright">Copyright©2021 Inc. All Rights Reserved</p>
        </div>
      </StyleSiteMap>
      <StyleAside>
        <StyleLogo>
          <Image src="/global/logo.png" alt="me" layout="responsive" width={279} height={72} />
        </StyleLogo>
        <p className="copyright">Copyright©2021 Inc. All Rights Reserved</p>
      </StyleAside>
    </StyleFooter>
  )
}
