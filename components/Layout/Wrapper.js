import React from 'react'
import styled from 'styled-components'

const StyleContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 30px;
  /* background-color: rgba(0, 0, 0, 0.8); */
  border: 1px solid seagreen;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    padding: 0 80px;
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    padding: 0 30px;
  }
`
const StyleContainerFluid = styled.div`
  width: 100%;
  /* border: 1px solid goldenrod; */
`

export const Container = ({ children }) => {
  return <StyleContainer>{children}</StyleContainer>
}

export const ContainerFluid = ({ children }) => {
  return <StyleContainerFluid>{children}</StyleContainerFluid>
}
