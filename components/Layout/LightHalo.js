import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { debounce } from 'lodash'

const StyleBG = styled.div`
  position: relative;
  width: 100%;
`

const StyleBall = styled.div.attrs((props) => ({
  style: {
    left: `${props.x}px`,
    top: `${props.y}px`,
  },
}))`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.third};
  color: #000;
  z-index: -1;
  transition: all 0.2s ease-out;
  filter: blur(100px);
`

export default function LightHalo({ children }) {
  const scrollTop = useRef(0)
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const [ballPoint, setBallPoint] = useState({
    x: mouseX.current,
    y: mouseY.current,
  })

  const updateScreenSize = debounce((e) => {
    mouseX.current = e.clientX - 100
    mouseY.current = e.clientY - 100

    setBallPoint({
      x: mouseX.current,
      y: mouseY.current + scrollTop.current,
    })
  }, 6)

  const updateWindowScroll = debounce(() => {
    let st = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    scrollTop.current = st

    setBallPoint({
      x: mouseX.current,
      y: mouseY.current + scrollTop.current,
    })
  }, 10)

  // useEffect(() => {
  //   window.addEventListener('mousemove', updateScreenSize)
  //   window.addEventListener('scroll', updateWindowScroll)

  //   return () => {
  //     window.removeEventListener('mousemove', updateScreenSize)
  //     window.removeEventListener('scroll', updateWindowScroll)
  //   }
  // }, [])

  return (
    <StyleBG>
      {children}
      <StyleBall x={ballPoint.x} y={ballPoint.y} />
    </StyleBG>
  )
}
