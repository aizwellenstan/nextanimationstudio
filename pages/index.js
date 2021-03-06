import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import useLanguage from '../hooks/useLanguage'
import usePath from '../hooks/usePath'
import { LANGUAGE_CN, LANGUAGE_JP, LANGUAGE_EN } from '../utils/type'
import { Container, ContainerFluid } from '../components/Layout/Wrapper'
import { IconArrowRightBottom, IconLocation, IconPhone } from '../components/Icons'
import KV from '../components/KV'

const StyleIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: ${({ theme }) => theme.breakPiont.xl}) {
    flex-direction: row;
  }

  h2 {
    flex: 0 0 auto;
    font-size: 18px;
    font-weight: 800;
    font-style: italic;
    line-height: 1.2;
    letter-spacing: 6px;
    text-transform: uppercase;
    transform: translateY(-50%);

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      font-size: 20px;
    }

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      font-size: 40px;
    }

    span {
      background-color: ${({ theme }) => theme.color.secondary};
      padding: 0 12px;
    }
  }

  article {
    flex: 0 1 auto;
    padding: 8% 0px;
    padding-bottom: 20%;
    position: relative;

    @media (min-width: ${({ theme }) => theme.breakPiont.xl}) {
      padding: 12% 30px;
    }

    &::before {
      content: '';
      position: absolute;
      right: 0;
      top: 10%;
      width: 70px;
      height: 45%;
      background-color: transparent;
      z-index: -1;

      @media (min-width: ${({ theme }) => theme.breakPiont.xl}) {
        background-color: ${({ theme }) => theme.color.third};
      }
    }

    p {
      margin-bottom: 6%;
      font-size: 14px;
      font-style: italic;
      letter-spacing: 2px;
      text-transform: capitalize;

      &:last-child {
        margin-bottom: 0;
      }

      @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
        font-size: 18px;
      }
    }

    p.highlight {
      color: ${({ theme }) => theme.color.secondary};
    }
  }
`

const StyleWorks = styled.section`
  position: relative;
  margin-bottom: 60px;
  margin-left: -30px;
  margin-right: -30px;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    margin-left: 0px;
    margin-right: 0px;
  }

  .title {
    position: absolute;
    left: 30px;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: baseline;
    color: ${({ theme }) => theme.color.primary};
    font-size: 40px;
    font-weight: 600;
    font-style: italic;
    line-height: 1;
    text-transform: uppercase;
    transform: translateY(-50%);

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      font-size: 60px;
    }

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      left: 60px;
    }

    i {
      display: block;
      width: 20px;
      height: 20px;
      margin-left: 10px;

      @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
        width: 24px;
        height: 24px;
        margin-left: 12px;
      }
    }
  }
`

const StyleList = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    color: #fff;
  }

  .des {
    flex: 1 0 100%;

    text-align: center;
    text-transform: capitalize;
    margin: 4% 0;
    padding: 0 30px;
  }
`

const StyleItem = styled.div`
  flex: 0 1 50%;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    flex: 0 1 33.33%;
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    flex: 0 1 20%;
  }

  p {
    position: absolute;
    left: 20px;
    bottom: 20px;
    z-index: 1;
    font-size: 16px;
    line-height: 1;
  }
`

const StyleFindUs = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -30px;
  margin-right: -30px;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    margin-left: -80px;
    margin-right: -80px;
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    flex-direction: row;
    margin-left: 0;
    margin-right: 0;
  }

  .bar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1 0 100%;
    padding: 30px;
    background-image: linear-gradient(${({ theme }) => theme.color.third}, ${({ theme }) => theme.color.primary});

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      padding: 60px 110px;
    }

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      flex: 1 0 46%;
      padding: 60px;
    }

    @media (min-width: ${({ theme }) => theme.breakPiont.xl}) {
      flex: 1 0 40%;
    }

    .title {
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;

      @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
        flex-direction: column;
      }

      & > div {
        display: flex;
        align-items: baseline;
        color: ${({ theme }) => theme.color.primary};
        font-size: 40px;
        font-weight: 600;
        font-style: italic;
        line-height: 1;
        text-transform: uppercase;

        &:last-child {
          margin-left: 20px;
          @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
            margin-left: 0px;
          }
        }

        @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
          font-size: 60px;
        }

        @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
          left: 60px;
        }
      }

      i {
        display: block;
        width: 20px;
        height: 20px;
        margin-left: 10px;

        @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
          width: 24px;
          height: 24px;
          margin-left: 12px;
        }
      }
    }

    .info {
      display: flex;
      align-items: center;
      margin-top: 10px;

      i {
        display: block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }

    .download {
      color: #fff;
      background-color: ${({ theme }) => theme.color.third};
      border-radius: 40px;
      font-size: 16px;
      line-height: 2.2;
      letter-spacing: 2px;
      text-decoration: none;
      padding: 0 30px;
      margin-top: 30px;

      @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
        font-size: 20px;
      }
    }
  }

  .form {
    flex: 1 0 100%;
    padding: 30px;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      flex: 1 0 60%;
      padding: 60px 110px;
    }

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      padding: 60px;
    }

    .form-group {
      border-bottom: 1px solid ${({ theme }) => theme.color.gray};

      &.no-underline {
        border-bottom: 0px;
      }

      &:last-child {
        border-bottom: 0px;
      }

      label {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        /* flex-direction: column; */

        span {
          color: ${({ theme }) => theme.color.primary};
          margin: 20px 10px 20px 0;
          min-width: 60px;
        }
      }

      input,
      select {
        flex: 1 0 auto;
        background-color: transparent;
        border: 0px;
        padding: 12px;
        color: #fff;
        font-size: 16px;
      }

      textarea {
        flex: 0 0 100%;
        outline: none;
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.color.gray};
        /* border-bottom: 0px; */
        border-radius: 0;
        padding: 12px;
        color: #fff;
        font-size: 16px;
        font-family: 'Mulish', sans-serif;
      }
    }

    .btn-group {
      display: flex;
      justify-content: center;

      @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
        justify-content: flex-end;
        margin-right: -15px;
      }

      .btn {
        background-color: #008045;
        padding: 6px 20px;
        margin: 30px 15px;
        cursor: pointer;
      }
    }
  }
`

export default function Home({ data, contactData }) {
  const [pageData, setPageData] = useState(data.en)
  const { bannerXS, bannerMD, downloadUrl, video } = data
  const [inputName, setInputName] = useState('')
  const [inputPhone, setInputPhone] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [selectType, setSelectType] = useState('1')
  const [textareaOther, setTextareaOther] = useState('')
  const [address, setAddress] = useState('')
  const formData = useRef({})
  const formDom = useRef(null)
  const router = useRouter()
  const language = useLanguage()
  const path = usePath(language)

  useEffect(() => {
    if (router.asPath.includes('?')) {
      const index = router.asPath.indexOf('?')
      const path = router.asPath.substring(index + 1)
      const params = path.split('&')
      const isContactUs = params.some((item) => item === 'contactus')
      const formOffsetY = formDom.current.offsetTop

      if (isContactUs) {
        window.scrollTo({
          top: formOffsetY,
          behavior: 'smooth',
        })
      }
    }
  }, [])

  useEffect(() => {
    formData.current = {
      name: inputName,
      phone: inputPhone,
      email: inputEmail,
      type: selectType,
      other: textareaOther,
    }
  }, [inputName, inputPhone, inputEmail, selectType, textareaOther])

  useEffect(() => {
    if (language === LANGUAGE_CN) {
      setPageData(data.cn)
      setAddress('??????????????????????????????268???4F')
    }
    if (language === LANGUAGE_JP) {
      setPageData(data.jp)
      setAddress('4F, No. 268, Xinhu 3rd Road, Neihu, Taipei 11494, Taiwan (R.O.C.)')
    }
    if (language === LANGUAGE_EN) {
      setPageData(data.en)
      setAddress('4F, No. 268, Xinhu 3rd Road, Neihu, Taipei 11494, Taiwan (R.O.C.)')
    }
  }, [language, data])

  const handleClear = () => {
    setInputName('')
    setInputPhone('')
    setInputEmail('')
    setTextareaOther('')
  }

  const handleSubmit = async () => {
    console.log(formData.current)
    const res = await axios.post(`${process.env.HOST}/sendContact`, formData.current)
    const data = res.data

    console.log(data)

    if (data.result) {
      alert('success!')
      handleClear()
    } else {
      alert('fail')
    }
  }

  const handleInputName = (e) => {
    setInputName(e.target.value)
  }

  const handleInputPhone = (e) => {
    setInputPhone(e.target.value)
  }

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value)
  }

  const handleSelectType = (e) => {
    setSelectType(e.target.value)
  }

  const handleTextareaOther = (e) => {
    setTextareaOther(e.target.value)
  }

  return (
    <>
      <KV bannerXS={bannerXS} bannerMD={bannerMD} video={video} />

      <Container>
        <StyleIntro>
          <h2>
            <span>Every frame</span>
            <br />
            <span>is the moment of evolution</span>
          </h2>
          <article>
            <p>
              The world is changing too fast
              <br /> In the next second, maybe everything is embodying evolution itself
            </p>
            <p className="highlight">29.97 Evolutions Per Second</p>
            <p>
              Connect every moment of flow
              <br />
              We use Not only animation to express evolution
              <br /> But also Use animation to create evolution Foresee the future
            </p>
          </article>
        </StyleIntro>
        <StyleWorks>
          <div className="title">
            Work
            <i>
              <IconArrowRightBottom fill="#15ff93" />
            </i>
          </div>
          <StyleList>
            {pageData.list.map((item) => {
              return (
                <StyleItem key={item.id}>
                  <Link href={`${path}/ourworks/${item.id}`} passHref>
                    <a>
                      <Image
                        src={item.image.url}
                        alt=""
                        layout="responsive"
                        width={item.image.width}
                        height={item.image.height}
                      />
                      <p>{item.title}</p>
                    </a>
                  </Link>
                </StyleItem>
              )
            })}
            <p className="des">We have the skills, insights and creativities to envision the future with animation.</p>
          </StyleList>
        </StyleWorks>
        <StyleFindUs>
          <div className="bar">
            <div>
              <div className="title">
                <div>Find</div>
                <div>
                  Us
                  <i>
                    <IconArrowRightBottom fill="#15ff93" />
                  </i>
                </div>
              </div>
              <div className="info-group">
                <div className="info">
                  <i>
                    <IconLocation fill="#fff" />
                  </i>
                  {address}
                </div>
                <div className="info">
                  <i>
                    <IconPhone fill="#fff" />
                  </i>
                  +886 2712-3456
                </div>
              </div>
            </div>
            {/* {downloadUrl ? ( */}
            <a className="download" href={downloadUrl} target="_blank" rel="noreferrer">
              Download NAS Profile
            </a>
            {/* ) : null} */}
          </div>
          <div className="form" ref={formDom}>
            <div className="form-group">
              <label>
                <span>Name</span>
                <input type="text" name="name" value={inputName} onChange={handleInputName} />
              </label>
            </div>
            <div className="form-group">
              <label>
                <span>Phone</span>
                <input type="phone" name="phone" value={inputPhone} onChange={handleInputPhone} />
              </label>
            </div>
            <div className="form-group">
              <label>
                <span>Email</span>
                <input type="mail" name="mail" value={inputEmail} onChange={handleInputEmail} />
              </label>
            </div>
            <div className="form-group">
              <label>
                <span>Type</span>
                <select name="type" onChange={handleSelectType} value={selectType}>
                  {contactData.list.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.type}
                      </option>
                    )
                  })}
                  {/* <option value="1">1</option>
                  <option value="2">2</option> */}
                </select>
              </label>
            </div>
            <div className="form-group no-underline">
              <label>
                <span>Anything you want to say???</span>
                <textarea rows="5" name="other" value={textareaOther} onChange={handleTextareaOther} />
              </label>
            </div>
            <div className="btn-group">
              <div className="btn" onClick={handleClear}>
                Clear
              </div>
              <div className="btn" onClick={handleSubmit}>
                Send
              </div>
            </div>
          </div>
        </StyleFindUs>
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get(`${process.env.HOST}/getHome`)
  const data = res.data

  const contactRes = await axios.get(`${process.env.HOST}/getContact`)
  const contactData = contactRes.data

  console.log(data, contactData)

  return {
    props: {
      data: data,
      contactData: contactData,
    },
    revalidate: 10,
  }
}
