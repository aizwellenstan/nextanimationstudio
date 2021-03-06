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
import InfiniteScroll from 'react-infinite-scroll-component'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const StyleContent = styled.div`
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    max-width: 1280px;
  }

  .grid-container {
    padding-bottom: 100px;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      padding-bottom: 200px;
    }
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
  /* column-count: 1;
  column-gap: 15px;
  column-fill: auto;
  padding-bottom: 100px;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    column-count: 2;
    padding-bottom: 200px;
  } */
`

const StyleWorkItem = styled.div`
  /* flex: 1 0 50%; */
  position: relative;
  margin: 10px;
  /* word-wrap: break-word; */
  /* column-break-inside: avoid; */
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
  const { type, filter } = data
  const totalPage = useRef(1)
  const [pageData, setPageData] = useState(data.en)
  const [isMore, setIsMore] = useState(true)
  const [filterStatus, setFilterStatus] = useState([])
  //
  const router = useRouter()
  const language = useLanguage()
  const path = usePath(language)

  const filterHandler = async (tag) => {
    console.log('filter', tag)
    setIsMore(true)

    const newStatus = [...filterStatus]

    newStatus.map((item) => {
      return item.tag === tag ? (item.status ? (item.status = false) : (item.status = true)) : null
    })

    // console.log('newStatus:', newStatus)

    const newFilter = newStatus.filter((item) => {
      return item.status
    })

    // console.log('newFilter:', newFilter)

    const res = await axios.post(`${process.env.HOST}/getOurWork`, {
      filter: newFilter,
    })
    const data = res.data

    if (language === LANGUAGE_CN) {
      setPageData(data.cn)
      totalPage.current = data.cn.total
    }
    if (language === LANGUAGE_JP) {
      setPageData(data.jp)
      totalPage.current = data.jp.total
    }
    if (language === LANGUAGE_EN) {
      setPageData(data.en)
      totalPage.current = data.en.total
    }
  }

  const scrollHandler = async (_last, _pageY) => {
    // console.log(_last, _pageY)
    const res = await axios.post(`${process.env.HOST}/getOurWork`, {
      begin: 0,
      end: _last - 1,
    })
    const data = res.data

    if (language === LANGUAGE_CN) {
      setPageData(data.cn)
    }
    if (language === LANGUAGE_JP) {
      setPageData(data.jp)
    }
    if (language === LANGUAGE_EN) {
      setPageData(data.en)
    }

    setTimeout(() => {
      window.scrollTo(0, _pageY)
    }, 200)
  }

  const fetchMoreData = async (_filter) => {
    console.log('fetch fn!!', pageData.works.length, totalPage.current)
    if (pageData.works.length >= totalPage.current) {
      setIsMore(false)
      return
    }

    const amount = 5
    const last =
      pageData.works.length + amount >= totalPage.current ? totalPage.current : pageData.works.length + amount

    const res = await axios.post(`${process.env.HOST}/getOurWork`, {
      filter: _filter,
      begin: 0,
      end: last - 1,
    })
    const data = res.data

    let dataLength

    if (language === LANGUAGE_CN) {
      setPageData(data.cn)
      dataLength = data.cn.works.length
    }
    if (language === LANGUAGE_JP) {
      setPageData(data.jp)
      dataLength = data.jp.works.length
    }
    if (language === LANGUAGE_EN) {
      setPageData(data.en)
      dataLength = data.en.works.length
    }

    const sessionObj = JSON.parse(sessionStorage.getItem('pathType'))
    const obj = Object.assign({}, sessionObj, { total: dataLength })
    sessionStorage.setItem('pathType', JSON.stringify(obj))
  }

  useEffect(() => {
    if (language === LANGUAGE_CN) {
      setPageData(data.cn)
      totalPage.current = data.cn.total
    }
    if (language === LANGUAGE_JP) {
      setPageData(data.jp)
      totalPage.current = data.jp.total
    }
    if (language === LANGUAGE_EN) {
      setPageData(data.en)
      totalPage.current = data.en.total
    }

    setFilterStatus(filter)
  }, [language, data])

  useEffect(() => {
    const { type, pageY, total } = JSON.parse(sessionStorage.getItem('pathType'))
    if (type === 'back' && pageY) {
      // console.log('s:', total, pageY)
      scrollHandler(total, pageY)
    }
  }, [])

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

        <StyleFilter>
          {filter.map((item) => {
            return (
              <div key={item.id} className={item.status ? 'active' : null} onClick={() => filterHandler(item.tag)}>
                {item.tag}
              </div>
            )
          })}
        </StyleFilter>

        <InfiniteScroll
          className="grid-container"
          dataLength={pageData.works.length}
          next={fetchMoreData}
          hasMore={isMore}
          loader={'loading...'}
          endMessage={''}
        >
          <ResponsiveMasonry columnsCountBreakPoints={{ 576: 1, 768: 2 }}>
            <Masonry columnsCount={2}>
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
            </Masonry>
          </ResponsiveMasonry>
        </InfiniteScroll>
      </StyleContent>
    </Container>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get(`${process.env.HOST}/getOurWork`)
  const data = res.data

  console.log(data)

  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}
