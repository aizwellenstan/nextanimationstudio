import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { IconArrowLeftTop, IconArrowRightTop } from '../Icons'

const StylePagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 20px;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    margin-top: 200px;
    margin-bottom: 40px;
  }
`

const StylePage = styled.div`
  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.primary};
    text-decoration: none;
  }

  p {
    font-size: 14px;
    font-weight: 300;
    margin: 0 7px;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      font-size: 16px;
      margin: 0 8px;
    }

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      font-size: 20px;
      margin: 0 10px;
    }
  }

  i {
    width: 14px;
    height: 14px;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      width: 16px;
      height: 16px;
    }

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      width: 22px;
      height: 22px;
    }
  }
`

export default function Pagination({ previous, next }) {
  return (
    <StylePagination>
      <StylePage>
        <Link href={previous} passHref>
          <a>
            <i>
              <IconArrowLeftTop fill="#15ff93" />
            </i>
            <p>Previous</p>
          </a>
        </Link>
      </StylePage>
      <StylePage>
        <Link href={next} passHref>
          <a>
            <p>Next</p>
            <i>
              <IconArrowRightTop fill="#15ff93" />
            </i>
          </a>
        </Link>
      </StylePage>
    </StylePagination>
  )
}
