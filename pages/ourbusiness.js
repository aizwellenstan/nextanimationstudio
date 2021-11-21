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

const StyleList = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-bottom: 100px;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    padding-bottom: 200px;
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    max-width: 1280px;
  }
`

const StyleItem = styled.div`
  & > a {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 60px;
  }

  &:last-child {
    margin-bottom: 60px;
  }
`

const StyleImage = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    width: 50%;
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    width: 660px;
  }
`

const StyleTitle = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  transform: translateY(-50%);
  z-index: 1;

  display: flex;
  flex-direction: row;
  align-items: baseline;
  text-decoration: none;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    left: -30%;
    top: 50%;
    transform: translateY(-50%);

    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    left: -20%;
  }

  p {
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    font-style: italic;
    letter-spacing: 6px;
    line-height: 1.4;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      font-size: 36px;
    }

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      font-size: 48px;
    }
  }

  i {
    display: block;
    width: 15px;
    height: 15px;

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      width: 30px;
      height: 30px;
    }
  }
`

export default function OurBusiness({ data }) {
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

  const Item = () => {
    return pageData.list.map((item) => {
      return (
        <StyleItem key={item.id}>
          <Link href={`${path}/ourbusiness/${item.id}`} passHref>
            <a>
              <StyleImage>
                <StyleTitle>
                  <p>{item.title}</p>
                  <i>
                    <IconArrowRightBottom fill="#15ff93" />
                  </i>
                </StyleTitle>
                <Image
                  src={item.image.url}
                  alt=""
                  layout="responsive"
                  width={item.image.width}
                  height={item.image.height}
                />
              </StyleImage>
            </a>
          </Link>
        </StyleItem>
      )
    })
  }

  return (
    <Container>
      <Breadcrumb router={router} />
      <Title>
        our
        <br />
        business
      </Title>
      <StyleList>{Item()}</StyleList>
    </Container>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get(`${process.env.HOST}/getBusiness`)
  const data = res.data

  console.log('business', data)

  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}
