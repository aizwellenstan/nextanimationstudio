import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const StyleLanguage = styled.div`
  font-size: 14px;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakPiont.xl}) {
    font-size: 18px;
  }
`

export default function LanguageButton(props) {
  const { onNavOpen, name, language } = props
  const router = useRouter()

  const changeLanguage = (language) => {
    let newUrl = '/'

    // 在business, updates, works subpage時
    if (router.route.includes('[id]')) {
      let newRoute = router.route.replace(/\[id\]/i, router.query.id)
      if (language === '/en') {
        newUrl = newRoute
      } else {
        newUrl = language + newRoute
      }
    } else {
      // 在首頁時
      if (router.route === '/') {
        if (language === '/en') {
          newUrl = '/home'
        } else {
          newUrl = language + '/home'
        }
      } else {
        if (language === '/en') {
          newUrl = router.route
        } else {
          newUrl = language + router.route
        }
      }
    }

    router.push(newUrl)
    onNavOpen()
  }

  return <StyleLanguage onClick={() => changeLanguage(language)}>{name}</StyleLanguage>
}
