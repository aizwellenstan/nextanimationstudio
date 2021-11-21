import axios from 'axios'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import useLanguage from '../hooks/useLanguage'
import usePath from '../hooks/usePath'
import { LANGUAGE_CN, LANGUAGE_JP, LANGUAGE_EN } from '../utils/type'
import { Container } from '../components/Layout/Wrapper'
import Breadcrumb from '../components/Layout/Breadcrumb'
import Title from '../components/Layout/Title'
import { IconArrowRightBottom } from '../components/Icons'

const StyleContent = styled.div`
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    max-width: 1280px;
  }
`

const StyleType = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 30px auto;

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    margin: 60px auto;
  }

  > i {
    width: 33.33%;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      width: 20%;
    }

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      width: 0;
    }
  }
`

const StyleTypeItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;

  span {
    flex: 0 0 auto;
    width: 22px;
    height: 10px;
    border-radius: 10px;
    background-color: ${({ color }) => color};
    margin-right: 10px;
  }

  p {
    flex: 1 0 auto;
    color: ${({ theme }) => theme.color.primary};
    font-size: 12px;
    font-weight: 600;

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      font-size: 16px;
    }
  }
`

const StyleGrid = styled.div`
  column-count: 1;
  column-gap: 15px;
  column-fill: auto;
  padding-bottom: 100px;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    column-count: 2;
    padding-bottom: 200px;
  }
`

const StyleWorkItem = styled.div`
  /* flex: 1 0 50%; */
  position: relative;
  margin-bottom: 20px;
  word-wrap: break-word;
  column-break-inside: avoid;
  background-color: ${({ theme }) => theme.color.gray};

  a {
    width: 100%;
    height: 100%;
    z-index: 1;

    &:hover {
      figure {
        &::after {
          opacity: 1;
        }
      }

      h2 {
        opacity: 1;
      }
    }

    figure {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: 0.3s ease-in-out;
      }
    }

    h2 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      opacity: 0;
      transition: 0.3s ease-in-out;

      span {
        color: #fff;
        font-size: 24px;
        font-weight: 600;
      }

      i {
        width: 30px;
        height: 30px;
      }
    }
  }
`

const StyleFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  div {
    flex: 0 1 auto;
    color: #000;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0px 16px;
    margin: 6px 10px 6px 0;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.color.blueGreen};
    cursor: pointer;

    &.active {
      background-color: ${({ theme }) => theme.color.gray};
    }

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      font-size: 16px;
      padding: 0px 20px;
      margin: 10px 20px 10px 0;
    }
  }
`

export default function OurWorks({ data }) {
  // const [orgData, setOrgData] = useState(data)
  const [pageData, setPageData] = useState(data.en)
  const router = useRouter()
  const language = useLanguage()
  const path = usePath(language)
  const { type, filter } = data
  const [filterStatus, setFilterStatus] = useState([])

  const filterHandler = async (tag) => {
    console.log('filter', tag)

    const newStatus = [...filterStatus]

    newStatus.map((item) => {
      return item.tag === tag ? (item.status ? (item.status = false) : (item.status = true)) : null
    })

    setFilterStatus(newStatus)

    const newFilter = newStatus.filter((item) => {
      return item.status
    })

    const res = await axios.post(`${process.env.HOST}/getWork`, {
      filter: newFilter,
    })
    const data = res.data

    // console.log('get work filter:', newFilter, data)

    if (language === LANGUAGE_CN) {
      setPageData(data.cn)
    }
    if (language === LANGUAGE_JP) {
      setPageData(data.jp)
    }
    if (language === LANGUAGE_EN) {
      setPageData(data.en)
    }
  }

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

    setFilterStatus(filter)
  }, [language, data])

  return (
    <Container>
      <Breadcrumb router={router} />
      <Title>
        LOOK
        <br />
        WHAT WE DID
      </Title>

      <StyleContent>
        <StyleType>
          {type.map((item) => {
            return (
              <StyleTypeItem key={item.id} color={item.color}>
                <span></span>
                <p>{item.text}</p>
              </StyleTypeItem>
            )
          })}
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </StyleType>
        <StyleGrid>
          <StyleFilter>
            {filter.map((item) => {
              return (
                <div key={item.id} className={item.status ? 'active' : null} onClick={() => filterHandler(item.tag)}>
                  {item.tag}
                </div>
              )
            })}
          </StyleFilter>

          {pageData.works.map((item) => {
            return (
              <StyleWorkItem key={item.id}>
                <Link href={`${path}/ourworks/${item.id}`} passHref>
                  <a>
                    <figure>
                      <Image
                        src={item.image.url}
                        alt=""
                        layout="responsive"
                        width={item.image.width}
                        height={item.image.height}
                      />
                    </figure>
                    <h2>
                      <span>{item.title}</span>
                      <i>
                        <IconArrowRightBottom fill="#15ff93" />
                      </i>
                    </h2>
                  </a>
                </Link>
              </StyleWorkItem>
            )
          })}
        </StyleGrid>
      </StyleContent>
    </Container>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get(`${process.env.HOST}/getWork`)
  const data = res.data

  console.log(data)

  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}
