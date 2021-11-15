import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import useLanguage from '../../hooks/useLanguage'
import usePath from '../../hooks/usePath'
import { LANGUAGE_CN, LANGUAGE_JP, LANGUAGE_EN } from '../../utils/type'
import { Container } from '../../components/Layout/Wrapper'
import Breadcrumb from '../../components/Layout/Breadcrumb'
import Pagination from '../../components/Layout/Pagination'
import { SectionText, SectionAlbum, SectionPhoto } from '../../components/Layout/Section'
import { v4 as uuidv4 } from 'uuid'

const StyleBanner = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1500px;
  overflow: hidden;
  height: ${(props) => props.height};
  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      width: calc(100% - 60px);
    }
  }

  &::before {
    background: url(${(props) => props.banner}) no-repeat center center;
    background-size: cover;
  }

  &::after {
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    padding: 0 30px;
  }

  & > div {
    position: relative;
    z-index: 1;
  }
`

const StyleTitle = styled.h1`
  margin: 0 auto;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
  letter-spacing: 2px;
  line-height: 1.4;
  transform: translateY(-50%);

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    font-size: 36px;
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    max-width: 1280px;
    font-size: 48px;
    letter-spacing: 6px;
  }
`

const StyleMain = styled.div`
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    max-width: 1280px;
    padding-left: 10%;
  }
`

export default function OurUpdatesSubpage({ data }) {
  const [pageData, setPageData] = useState(data.en)
  const router = useRouter()
  const language = useLanguage()
  const path = usePath(language)

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
        <Breadcrumb router={router} name={pageData.title} />
      </Container>
      {pageData.banner ? (
        <StyleBanner banner={pageData.banner} height={600} display={400 > 600 ? 'block' : 'flex'}>
          <Image src={pageData.banner} alt="" layout={400 > 600 ? 'responsive' : 'fixed'} width={400} height={600} />
        </StyleBanner>
      ) : null}
      <Container>
        <StyleTitle>{pageData.title}</StyleTitle>
        <StyleMain>
          {pageData.section
            ? pageData.section.map((item) => {
                if (item.type === 'text') {
                  return <SectionText key={uuidv4()} item={item} />
                }
                if (item.type === 'album') {
                  return <SectionAlbum key={uuidv4()} item={item} />
                }
                if (item.type === 'photo') {
                  return <SectionPhoto key={uuidv4()} item={item} />
                }
              })
            : null}
          <Pagination previous={`${path}${pageData.previousPage}`} next={`${path}${pageData.nextPage}`} />
        </StyleMain>
      </Container>
    </>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.HOST}/getUpdate`)
  const data = await res.json()
  const paths = data.cn.list.map((item) => {
    return {
      params: {
        id: item.id,
      },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`${process.env.HOST}/getUpdate/${id}`)
  const data = await res.json()

  console.log(data)

  return {
    props: {
      data: data,
    },
  }
}
