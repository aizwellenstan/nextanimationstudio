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
import { IconYoutube, IconWebsite } from '../../components/Icons'
import { SectionText, SectionAlbum, SectionPhoto, SectionTeam } from '../../components/Layout/Section'
import { v4 as uuidv4 } from 'uuid'

const StyleBanner = styled.div`
  width: 100%;
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

const StyleLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 12%;

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    max-width: 1280px;
    margin: 0 auto;
    margin-bottom: 6%;
  }

  .proportion {
    display: flex;
    width: 120px;
    height: 8px;
    border-radius: 8px;
    overflow: hidden;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      width: 200px;
    }
  }

  .link-group {
    display: flex;

    a {
      display: block;
      width: 26px;
      margin-left: 13px;

      @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
        width: 36px;
        margin-left: 18px;
      }
    }
  }
`

const StylePercentage = styled.div`
  width: ${({ width }) => width}%;
  height: 8px;
  background-color: ${({ color }) => color};
`

const StyleMain = styled.div`
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    max-width: 1280px;
    padding-left: 10%;
  }
`

export default function OurWorksSubpage({ data }) {
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
    <Container>
      <Breadcrumb router={router} name={pageData.title} />
      <StyleBanner>
        <Image src={pageData.banner} alt="" layout="responsive" width={1440} height={760} />
      </StyleBanner>
      <StyleTitle>{pageData.title}</StyleTitle>
      <StyleLinks>
        <div className="proportion">
          {pageData.proportion.map((item) => {
            return <StylePercentage key={item.id} width={item.percentage} color={item.color} />
          })}
        </div>
        <div className="link-group">
          <a href={pageData.youtubeLink} target="_blank" rel="noreferrer">
            <IconYoutube fill="#15ff93" />
          </a>
          <a href={pageData.websiteLink} target="_blank" rel="noreferrer">
            <IconWebsite fill="#15ff93" />
          </a>
        </div>
      </StyleLinks>
      <StyleMain>
        {pageData.section.map((item) => {
          if (item.type === 'text') {
            return <SectionText key={uuidv4()} item={item} />
          }
          if (item.type === 'album') {
            return <SectionAlbum key={uuidv4()} item={item} />
          }
          if (item.type === 'photo') {
            return <SectionPhoto key={uuidv4()} item={item} />
          }
          if (item.type === 'team') {
            return <SectionTeam key={uuidv4()} item={item} />
          }
        })}
        <Pagination previous={`${path}${pageData.previousPage}`} next={`${path}${pageData.nextPage}`} />
      </StyleMain>
    </Container>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.HOST}/api/getWorks`)
  const data = await res.json()

  const paths = data.en.works.map((item) => {
    return {
      params: {
        id: item.id,
      },
    }
  })

  console.log(paths)

  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`${process.env.HOST}/api/getWorks/${id}`)
  const data = await res.json()

  console.log(context)

  return {
    props: {
      data: data,
    },
  }
}