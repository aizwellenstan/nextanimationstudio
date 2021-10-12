import React from 'react'
import styled from 'styled-components'

const StyleTitle = styled.h1`
  color: ${({ theme }) => theme.color.primary};
  font-size: 34px;
  font-weight: 600;
  font-style: italic;
  line-height: 1;
  text-transform: uppercase;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    font-size: 64px;
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    font-size: 72px;
    max-width: 1280px;
  }
`

export default function Title({ children }) {
  return <StyleTitle>{children}</StyleTitle>
}
