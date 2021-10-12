import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import useLanguage from '../../hooks/useLanguage'
import usePath from '../../hooks/usePath'

const StyleBeadcrumb = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    max-width: 1280px;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  a {
    display: inline-block;
    color: ${({ theme }) => theme.color.gray};
    font-size: 14px;
    letter-spacing: 2px;
    text-decoration: none;
    margin-right: 10px;

    &::after {
      content: '/';
      margin-left: 10px;
    }

    &:last-child {
      color: #fff;
      font-weight: 600;
      &::after {
        content: '';
      }
    }

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      font-size: 16px;
      letter-spacing: 4px;
    }
  }
`

export default function Breadcrumb({ router, name = '' }) {
  const language = useLanguage()
  const path = usePath(language)
  const crumbName = []
  const crumbAmount = router.pathname.split('/')

  crumbAmount.forEach((item, index) => {
    if (item === '') {
      crumbName[index] = {
        name: 'HOMEPAGE',
        page: 'home',
      }
    }
    if (item === 'ourvision') {
      crumbName[index] = {
        name: 'OUR VISION',
        page: item,
      }
    }
    if (item === 'ourbusiness') {
      crumbName[index] = {
        name: 'OUR BUSINESS',
        page: item,
      }
    }
    if (item === 'ourworks') {
      crumbName[index] = {
        name: 'OUR WORKS',
        page: item,
      }
    }
    if (item === 'ourupdates') {
      crumbName[index] = {
        name: 'OUR UPDATES',
        page: item,
      }
    }
    if (item.includes('[id]')) {
      crumbName[index] = {
        name,
        page: `${crumbName[index - 1].page}/${router.query.id}`,
      }
    }
  })

  const Crumb = () => {
    return crumbName.map((item, index) => {
      return (
        <Link key={index} href={`${path}/${item.page}`} passHref>
          <a>{item.name}</a>
        </Link>
      )
    })
  }

  return <StyleBeadcrumb>{Crumb()}</StyleBeadcrumb>
}
