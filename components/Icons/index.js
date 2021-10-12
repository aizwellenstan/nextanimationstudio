import React from 'react'
import styled from 'styled-components'
import FacebookSVG from './social-facebook.svg'
import InstagramSVG from './social-instagram.svg'
import TwitterSVG from './social-twitter.svg'
import YoutubeSVG from './social-youtube.svg'
import ArrowRightBottomSVG from './arrow-right-bottom.svg'
import ArrowRightTopSVG from './arrow-right-top.svg'
import ArrowLeftBottomSVG from './arrow-left-bottom.svg'
import ArrowLeftTopSVG from './arrow-left-top.svg'
import WebsiteSVG from './website.svg'
import LocationSVG from './location.svg'
import PhoneSVG from './phone.svg'

const StyleIcon = styled.div`
  display: flex;
  justify-content: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  svg {
    fill: ${({ fill }) => fill};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  }
`

export const IconFacebook = ({ width = '100%', height = '100%', fill }) => {
  return (
    <StyleIcon width={width} height={height} fill={fill}>
      <FacebookSVG />
    </StyleIcon>
  )
}

export const IconInstagram = ({ width = '100%', height = '100%', fill }) => {
  return (
    <StyleIcon width={width} height={height} fill={fill}>
      <InstagramSVG />
    </StyleIcon>
  )
}

export const IconTwitter = ({ width = '100%', height = '100%', fill }) => {
  return (
    <StyleIcon width={width} height={height} fill={fill}>
      <TwitterSVG />
    </StyleIcon>
  )
}

export const IconYoutube = ({ width = '100%', height = '100%', fill }) => {
  return (
    <StyleIcon width={width} height={height} fill={fill}>
      <YoutubeSVG />
    </StyleIcon>
  )
}

export const IconArrowRightBottom = ({ width = '100%', height = '100%', fill }) => {
  return (
    <StyleIcon width={width} height={height} fill={fill}>
      <ArrowRightBottomSVG />
    </StyleIcon>
  )
}

export const IconArrowRightTop = ({ width = '100%', height = '100%', fill }) => {
  return (
    <StyleIcon width={width} height={height} fill={fill}>
      <ArrowRightTopSVG />
    </StyleIcon>
  )
}

export const IconArrowLeftBottom = ({ width = '100%', height = '100%', fill }) => {
  return (
    <StyleIcon width={width} height={height} fill={fill}>
      <ArrowLeftBottomSVG />
    </StyleIcon>
  )
}

export const IconArrowLeftTop = ({ width = '100%', height = '100%', fill }) => {
  return (
    <StyleIcon width={width} height={height} fill={fill}>
      <ArrowLeftTopSVG />
    </StyleIcon>
  )
}

export const IconWebsite = ({ width = '100%', height = '100%', fill }) => {
  return (
    <StyleIcon width={width} height={height} fill={fill}>
      <WebsiteSVG />
    </StyleIcon>
  )
}

export const IconLocation = ({ width = '100%', height = '100%', fill }) => {
  return (
    <StyleIcon width={width} height={height} fill={fill}>
      <LocationSVG />
    </StyleIcon>
  )
}

export const IconPhone = ({ width = '100%', height = '100%', fill }) => {
  return (
    <StyleIcon width={width} height={height} fill={fill}>
      <PhoneSVG />
    </StyleIcon>
  )
}
