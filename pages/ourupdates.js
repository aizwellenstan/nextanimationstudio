import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
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
import InfiniteScroll from 'react-infinite-scroller'

const StyleMain = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    flex-direction: row;
    padding-bottom: 200px;
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    max-width: 1280px;
  }
`

const StyleYear = styled.div`
  margin-top: 60px;
  display: flex;
  overflow-x: auto;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    flex-direction: column;
  }

  p {
    background-color: transparent;
    padding: 0 20px;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    font-style: italic;
    letter-spacing: 4px;
    cursor: pointer;

    &.active {
      background-color: ${({ theme }) => theme.color.primary};
    }

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      margin-bottom: 20px;
      font-size: 18px;
    }
  }
`

const StyleList = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    width: 70%;
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    width: 660px;
  }
`

const StyleItem = styled.div`
  margin-top: 60px;

  a {
    display: block;
    text-decoration: none;
  }

  .date {
    color: #fff;
    font-size: 18px;
    padding: 0 6px;

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      font-size: 30px;
    }

    span {
      letter-spacing: 4px;
    }

    .year {
      font-weight: 300;
    }

    .month {
      font-weight: 600;
      margin: 0 6px;

      @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
        margin: 0 12px;
      }
    }

    .day {
      color: ${({ theme }) => theme.color.primary};
      font-weight: 300;
    }
  }

  h2 {
    color: #fff;
    font-size: 14px;
    padding: 0 6px;

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      font-size: 18px;
    }

    i {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 6px;
      transform: translateY(2px);

      @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
        width: 16px;
        height: 16px;
        margin-left: 8px;
      }
    }
  }
`

export default function OurUpdates({ data }) {
  const { year, totalPage } = data
  const total = useRef(totalPage)
  const page = useRef(1)
  const [nowYear, setNowYear] = useState(year[0].text)
  const orgData = useRef()
  const [pageData, setPageData] = useState(data.en)
  const router = useRouter()
  const language = useLanguage()
  const path = usePath(language)

  const handlePageData = (data) => {
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

  const handleYearData = async (year) => {
    if (year === nowYear) return
    setNowYear(year)
    page.current = 1

    const res = await fetch(`${process.env.HOST}/api/getUpdates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        year: year,
      }),
    })
    const data = await res.json()

    orgData.current = data
    handlePageData(orgData.current)
  }

  const handleFetch = async (_page) => {
    if (_page > total.current) return
    // console.log(_page, nowYear)

    const res = await fetch(`${process.env.HOST}/api/getUpdates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        page: _page,
        year: nowYear,
      }),
    })
    const data = await res.json()

    page.current = _page
    orgData.current = data
    handlePageData(orgData.current)
  }

  useEffect(() => {
    orgData.current = data
  }, [])

  useEffect(() => {
    page.current = 1
    handlePageData(orgData.current)
  }, [language, data])

  return (
    <Container>
      <Breadcrumb router={router} />
      <Title>
        our
        <br />
        updates
      </Title>
      <StyleMain>
        <StyleYear>
          {year.map((item) => {
            return (
              <p
                key={item.id}
                className={nowYear === item.text ? 'active' : null}
                onClick={() => handleYearData(item.text)}
              >
                {item.text}
              </p>
            )
          })}
        </StyleYear>
        <StyleList>
          <InfiniteScroll
            pageStart={0}
            loadMore={() => handleFetch(page.current + 1)}
            hasMore={true || false}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            {pageData.list.map((item) => {
              return (
                <StyleItem key={item.id}>
                  <Link href={`${path}/ourupdates/${item.id}`} passHref>
                    <a>
                      <Image src={item.image} alt="" layout="responsive" width={660} height={180} />
                      <p className="date">
                        <span className="year">{item.date.year}</span>
                        <span className="month">{item.date.month}</span>
                        <span className="day">{item.date.day}</span>
                      </p>
                      <h2>
                        {item.title}
                        <i>
                          <IconArrowRightBottom fill="#15ff93" />
                        </i>
                      </h2>
                    </a>
                  </Link>
                </StyleItem>
              )
            })}
          </InfiniteScroll>
        </StyleList>
      </StyleMain>
    </Container>
  )
}

export const getStaticProps = async () => {
  const res = await axios.post(`${process.env.HOST}/api/getUpdates`, {
    page: 1,
    year: '2021',
  })
  // const res = await fetch(`${process.env.HOST}/api/getUpdates`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     page: 1,
  //     year: '2021',
  //   }),
  // })
  const data = res.data

  return {
    props: {
      data,
    },
  }
}
