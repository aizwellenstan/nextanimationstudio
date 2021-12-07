import { useState, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import YouTube from '@u-wave/react-youtube'
import { ContainerFluid } from '../Layout/Wrapper'

const StyleKv = styled.div`
  margin-top: 60px;
  position: relative;

  .kv-xs {
    display: block;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      display: none;
    }
  }
  .kv-md {
    display: none;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      display: block;
    }
  }

  .video {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    overflow: hidden;

    .videoMask {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 140%;
      height: 140%;

      iframe {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
    }
  }

  .content {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    max-width: 1500px;
    height: 100%;
    transform: translate(-50%, -50%);
    padding: 0 30px;
    /* pointer-events: none; */

    h2 {
      font-size: 30px;
      font-weight: 600;
      font-style: italic;
      letter-spacing: 6px;
      text-transform: uppercase;
      transform: translateY(-30%);
      line-height: 1.1;

      @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
        font-size: 50px;
        transform: translateY(-20%);
      }
      @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
        font-size: 60px;
      }
      @media (min-width: ${({ theme }) => theme.breakPiont.xl}) {
        font-size: 70px;
      }

      span {
        color: ${({ theme }) => theme.color.primary};
      }
    }

    .des {
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translate(0%, -50%);
      width: 220px;
      display: none;

      @media (min-width: ${({ theme }) => theme.breakPiont.sm}) {
        display: block;
      }

      p {
        text-align: right;
      }

      .time {
        width: 100%;
        color: ${({ theme }) => theme.color.primary};
        font-size: 20px;
        letter-spacing: 2px;
      }

      .deco {
        display: flex;
        align-items: center;

        .deco-1 {
          font-size: 12px;
        }
        .deco-2 {
          color: ${({ theme }) => theme.color.primary};
          font-size: 24px;
          font-weight: 300;
          margin-left: 10px;
        }
      }
    }
  }
`

function KV(props) {
  const { bannerXS, bannerMD, video } = props
  const [date, setDate] = useState(new Date())

  const tick = () => {
    setDate(new Date())
  }

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000)
    return function cleanup() {
      clearInterval(timerID)
    }
  })

  const onYTReday = (e) => {
    console.log('yt ready!!', e.target)
    // e.target.playVideo()
  }

  const onYTEnd = (e) => {
    console.log('yt end')
    e.target.playVideo()
  }

  return (
    <ContainerFluid>
      <StyleKv>
        {video.url ? (
          <div className="video">
            <div className="videoMask">
              <YouTube
                video={video.url}
                autoplay={true}
                controls={false}
                showCaptions={false}
                onReady={onYTReday}
                onEnd={onYTEnd}
                muted={true}
                showInfo={false}
                rel={true}
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="kv-xs">
              <Image src={bannerXS.url} alt="" layout="responsive" width={bannerXS.width} height={bannerXS.height} />
            </div>
            <div className="kv-md">
              <Image src={bannerMD.url} alt="" layout="responsive" width={bannerMD.width} height={bannerMD.height} />
            </div>
          </div>
        )}
        <div className="content">
          <h2>
            <span>Next</span> second <br />
            <span>An</span>yth<span>i</span>ng <span>ma</span>y <br />
            be the evolut<span>ion</span>
          </h2>
          <div className="des">
            <p className="time" suppressHydrationWarning>
              {date.toLocaleTimeString('zh-TW', { hour12: false })}
            </p>
            <div className="deco">
              <p className="deco-1">{"We change the view you'll see you change the view of world."}</p>
              <p className="deco-2">01</p>
            </div>
          </div>
        </div>
      </StyleKv>
    </ContainerFluid>
  )
}

export default KV
