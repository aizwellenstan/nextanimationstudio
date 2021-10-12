import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import useLanguage from '../hooks/useLanguage'
import usePath from '../hooks/usePath'
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 60px;

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

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    left: -30%;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    left: -20%;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    text-decoration: none;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      flex-direction: column;
      align-items: flex-start;
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
  }
`

export default function OurBusiness({ data }) {
  const router = useRouter()
  const language = useLanguage()
  const path = usePath(language)
  const { list } = data

  const Item = () => {
    return list.map((item) => {
      return (
        <StyleItem key={item.id}>
          <StyleImage>
            <StyleTitle>
              <Link href={`${path}/ourbusiness/${item.id}`} passHref>
                <a>
                  <p>{item.title}</p>
                  <i>
                    <IconArrowRightBottom fill="#15ff93" />
                  </i>
                </a>
              </Link>
            </StyleTitle>
            <Image src={item.image} alt="" layout="responsive" width={660} height={300} />
          </StyleImage>
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
  const res = await fetch(`${process.env.HOST}/api/getBusiness`)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
