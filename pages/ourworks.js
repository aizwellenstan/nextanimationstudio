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
import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'

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
  const currentPage = useRef(0)
  const totalPage = useRef(1)
  const [pageData, setPageData] = useState(data.en)
  const [workData, setWorkData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [isMore, setIsMore] = useState(true)
  const [filterStatus, setFilterStatus] = useState([])
  //
  const router = useRouter()
  const language = useLanguage()
  const path = usePath(language)

  const filterHandler = async (tag) => {
    console.log('filter', tag)
    currentPage.current = 0
    setIsMore(true)
    // const emptyArr = []
    // setWorkData(emptyArr)

    const newStatus = [...filterStatus]

    newStatus.map((item) => {
      return item.tag === tag ? (item.status ? (item.status = false) : (item.status = true)) : null
    })

    const newFilter = newStatus.filter((item) => {
      return item.status
    })
    setFilterStatus(newFilter)

    // console.log('newFilter:', newFilter)
    // fetchMoreData(newFilter)

    // currentPage.current = 1
    // setIsMore(true)
    currentPage.current += 1

    const res = await axios.post(`${process.env.HOST}/getWork`, {
      filter: newFilter,
      page: 1,
    })
    const data = res.data

    // console.log('get work filter:', newFilter, data)

    if (language === LANGUAGE_CN) {
      // setPageData(data.cn)
      setWorkData(data.cn.works)
      totalPage.current = data.cn.totalPage
    }
    if (language === LANGUAGE_JP) {
      // setPageData(data.jp)
      setWorkData(data.jp.works)
      totalPage.current = data.jp.totalPage
    }
    if (language === LANGUAGE_EN) {
      // setPageData(data.en)
      setWorkData(data.en.works)
      totalPage.current = data.en.totalPage

      console.log('total page in filter:', data.en.totalPage)
    }
  }

  const fetchMoreData = async (_filter) => {
    console.log('fetch fn!!', workData, currentPage.current, totalPage.current)
    if (currentPage.current >= totalPage.current) {
      setIsMore(false)
      return
    }
    currentPage.current += 1
    // console.log(_filter)
    // if (_filter) {
    //   setWorkData([])
    // }

    const res = await axios.post(`${process.env.HOST}/getWork`, {
      filter: _filter,
      // filter: [{ id: 1, tag: 'MODEL', status: true }],
      page: currentPage.current,
    })
    const data = res.data

    console.log('data:', data.en.works)

    let newWorks = []
    if (language === LANGUAGE_CN) {
      if (workData.length <= 0) {
        setWorkData(data.cn.works)
        return
      }
      newWorks = [...pageData.works].concat(data.cn.works)
      totalPage.current = data.cn.totalPage
    }
    if (language === LANGUAGE_JP) {
      if (workData.length <= 0) {
        setWorkData(data.jp.works)
        return
      }
      newWorks = [...pageData.works].concat(data.jp.works)
      totalPage.current = data.jp.totalPage
    }
    if (language === LANGUAGE_EN) {
      if (workData.length <= 0) {
        console.log('here')
        setWorkData(data.en.works)
        return
      }
      // console.log('filter: ', _filter)
      // if (_filter && _filter.length > 1) {
      //   if (filterData.length <= 0) {
      //     console.log('has filter no data')
      //     setFilterData(data.en.works)
      //     newWorks = data.en.works
      //   } else {
      //     console.log('has filter has data')
      //     newWorks = [...filterData].concat(data.en.works)
      //   }
      // } else {
      // }
      newWorks = [...workData].concat(data.en.works)
      totalPage.current = data.en.totalPage
      console.log('total page:', data.en.totalPage)
    }
    setWorkData(newWorks)

    console.log('fetch more data', currentPage.current, workData, newWorks)
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

    totalPage.current = pageData.totalPage
    setFilterStatus(filter)
    fetchMoreData(filter)
  }, [language, data])

  // useEffect(() => {
  //   console.log('change filter!!')
  //   setWorkData([])
  // }, [filterStatus])

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

        {/* <StyleFilter>
          {filter.map((item) => {
            return (
              <div key={item.id} className={item.status ? 'active' : null} onClick={() => filterHandler(item.tag)}>
                {item.tag}
              </div>
            )
          })}
        </StyleFilter> */}

        <div className="grid-container">
          <InfiniteScroll
            dataLength={currentPage.current}
            next={fetchMoreData}
            hasMore={isMore}
            loader={'loading...'}
            endMessage={''}
          >
            <ResponsiveMasonry columnsCountBreakPoints={{ 576: 1, 768: 2 }}>
              <Masonry columnsCount={2}>
                {workData.map((item) => {
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
        </div>
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
