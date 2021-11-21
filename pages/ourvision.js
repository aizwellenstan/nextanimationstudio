import axios from 'axios'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import useLanguage from '../hooks/useLanguage'
import usePath from '../hooks/usePath'
import { LANGUAGE_CN, LANGUAGE_JP, LANGUAGE_EN } from '../utils/type'
import { Container, ContainerFluid } from '../components/Layout/Wrapper'
import Breadcrumb from '../components/Layout/Breadcrumb'
import Title from '../components/Layout/Title'

const StyleContent = styled.div`
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    max-width: 1280px;
  }
`

const StyleSection = styled.section`
  margin-top: 60px;
`

const StyleSubtitle = styled.h2`
  color: ${({ theme }) => theme.color.blueGreen};
  font-size: 34px;
  font-weight: 600;
  font-style: italic;
  line-height: 1;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    font-size: 64px;
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    font-size: 72px;
  }
`

const StyleKv = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;

  .video {
    background: url(${(props) => props.banner}) no-repeat center center;
    background-size: cover;
  }

  .video,
  .video > iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .title {
    position: absolute;
    right: 0;
    top: 0;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    text-align: right;
    line-height: 1.4;
    text-transform: uppercase;
    transform: translate(16px, -75%);

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      font-size: 30px;
      transform: translate(20px, -75%);
    }

    span {
      padding: 0 12px;
      background-color: ${({ theme }) => theme.color.third};
    }
  }

  .bg {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 50px;
    background-image: linear-gradient(${({ theme }) => theme.color.third}, ${({ theme }) => theme.color.primary});
    transform: translate(-10px, 10px);

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      width: 100px;
      height: 100px;
      transform: translate(-20px, 20px);
    }
  }
`

const StyleDes = styled.div`
  width: 100%;
  margin-top: 60px;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    margin-top: 120px;
    padding: 0 10%;
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    padding: 0;
    padding-left: 40%;
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.xl}) {
    padding-left: 60%;
  }

  p {
    font-size: 14px;
    text-align: center;
    margin-bottom: 8%;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      font-size: 16px;
      text-align: left;
    }
  }
`

const StyleTeam = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 60px;

  h3 {
    font-size: 20px;
    font-weight: 600;
    font-style: italic;
    letter-spacing: 2px;
    text-transform: uppercase;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      font-size: 24px;
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -12px;
    margin-right: -12px;

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      width: 80%;
    }
  }
`

const StyleMember = styled.div`
  flex: 0 1 50%;
  padding: 12px;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    flex: 0 1 33.33%;
  }

  .name {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 20px;

    p {
      font-size: 16px;
      line-height: 1.2;
      text-transform: uppercase;
      /* margin-bottom: 0; */

      @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
        font-size: 20px;
      }
    }

    .bar {
      display: block;
      width: 20px;
      height: 10px;
      border-radius: 10px;
      background-color: ${({ color }) => color};

      @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
        width: 40px;
        height: 20px;
        border-radius: 20px;
      }
    }
  }

  .title {
    font-size: 16px;
    font-weight: 300;
    text-transform: uppercase;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      font-size: 20px;
    }
  }
`

const StyleProfile = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 8%;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    }

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      width: 660px;
      margin-top: 0;
    }
  }

  .item {
    flex: 1 0 100%;
    margin-bottom: 8%;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      flex: 1 0 50%;
    }

    h3 {
      color: ${({ theme }) => theme.color.secondary};
      font-size: 16px;
      text-transform: uppercase;

      @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
        font-size: 20px;
      }
    }

    p {
      font-size: 16px;
      font-weight: 300;

      @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
        font-size: 20px;
      }
    }
  }
`

const StyleClient = styled.div`
  padding-top: 60px;
  padding-bottom: 100px;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    padding-bottom: 200px;
  }
`

const StyleLogoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const StyleLogo = styled.div`
  position: relative;
  width: calc(${({ width }) => width / 6}px);

  @media (min-width: ${({ theme }) => theme.breakPiont.sm}) {
    width: calc(${({ width }) => width / 4}px);
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    width: calc(${({ width }) => width / 4}px);
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    width: calc(${({ width }) => width / 3}px);
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.xl}) {
    /* width: ${({ width }) => width}px; */
    width: calc(${({ width }) => width / 3}px);
  }

  margin: 6px;

  .logo {
    width: 100%;
    padding-top: calc(${({ height, width }) => (height / width) * 100}%);
  }
`

export default function OurVision({ data }) {
  const [pageData, setPageData] = useState(data.en)
  const router = useRouter()
  const language = useLanguage()
  const path = usePath(language)
  const { image, video, team, client } = data

  useEffect(() => {
    if (language === LANGUAGE_CN) {
      setPageData(data.cn)
    }
    if (language === LANGUAGE_JP) {
      setPageData(data.jp)
    }
    if (language === LANGUAGE_EN) {
      setPageData(data.en)
    }
  }, [language, data])

  return (
    <>
      <Container>
        <Breadcrumb router={router} />
        <Title>
          Our
          <br />
          Vision
        </Title>
        <StyleContent>
          <StyleSection>
            <StyleKv banner={image.url}>
              <div className="bg"></div>
              <div className="video">
                {video ? (
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : null}
              </div>
              <p className="title">
                Envision The Future With
                <br />
                <span>Animation.</span>
              </p>
            </StyleKv>
          </StyleSection>
          <StyleSection>
            <StyleDes dangerouslySetInnerHTML={{ __html: pageData.intro.value }} />
          </StyleSection>
          <StyleSection>
            <StyleSubtitle>
              Our
              <br />
              Team
            </StyleSubtitle>
            {team.map((team) => {
              return (
                <StyleTeam key={team.id}>
                  <h3>{team.department}</h3>
                  <div className="list">
                    {team.member.map((member) => {
                      return (
                        <StyleMember key={member.id} color={member.type}>
                          <Image
                            src={member.image.url}
                            alt=""
                            layout="responsive"
                            width={member.image.width}
                            height={member.image.height}
                          />
                          <div className="name">
                            <p>{member.name}</p>
                            <div className="bar"></div>
                          </div>
                          <p className="title">{member.title}</p>
                        </StyleMember>
                      )
                    })}
                  </div>
                </StyleTeam>
              )
            })}
          </StyleSection>
          <StyleSection>
            <StyleSubtitle>
              Our
              <br />
              Profile
            </StyleSubtitle>
            <StyleProfile>
              <div className="list">
                <div className="item">
                  <h3>Name</h3>
                  <p>Next Animation Studio Ltd.</p>
                </div>
                <div className="item">
                  <h3>tel</h3>
                  <p>02 6607 8666</p>
                </div>
                <div className="item">
                  <h3>CEO</h3>
                  <p>XIAO MING, WANG</p>
                </div>
                <div className="item">
                  <h3>E-mail</h3>
                  <p>nextanimationstudio@gmail.com</p>
                </div>
                <div className="item">
                  <h3>establishment</h3>
                  <p>2007</p>
                </div>
                <div className="item">
                  <h3>Address</h3>
                  <p>4f, No. 268, Xinhu 3rd Rd., Neihu Dist., Taipei City 114065, Taiwan</p>
                </div>
                <div className="item">
                  <h3>employee</h3>
                  <p>100 +</p>
                </div>
              </div>
            </StyleProfile>
          </StyleSection>
          <StyleSection>
            <StyleSubtitle>
              Our
              <br />
              Clients
            </StyleSubtitle>
          </StyleSection>
        </StyleContent>
      </Container>

      <ContainerFluid>
        <StyleClient>
          <StyleLogoList>
            {client.map((item) => {
              return (
                <StyleLogo key={item.id} width={item.image.width} height={item.image.height}>
                  <div className="logo">
                    <Image src={item.image.url} alt="" layout="fill" objectFit="cover" />
                  </div>
                </StyleLogo>
              )
            })}
          </StyleLogoList>
        </StyleClient>
      </ContainerFluid>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.HOST}/getOurVision`)
  const data = await res.json()

  console.log('our visition:', data)

  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}
