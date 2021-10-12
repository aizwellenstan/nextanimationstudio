import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styled from 'styled-components'
import useLanguage from '../hooks/useLanguage'
import { LANGUAGE_CN, LANGUAGE_JP, LANGUAGE_EN } from '../utils/type'
import { Container, ContainerFluid } from '../components/Layout/Wrapper'
import { IconArrowRightBottom, IconLocation, IconPhone } from '../components/Icons'

const StyleKv = styled.div`
  margin-top: 60px;
  position: relative;

  .kv-xs {
    display: block;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      display: none;
    }
  }
  .kv-md {
    display: none;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      display: block;
    }
  }

  .content {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    max-width: 1500px;
    height: 100%;
    transform: translate(-50%, -50%);
    padding: 0 30px;

    h2 {
      font-size: 30px;
      font-weight: 600;
      font-style: italic;
      text-transform: uppercase;
      transform: translateY(-50%);
      line-height: 1.1;

      @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
        font-size: 50px;
        transform: translateY(-20%);
      }
      @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
        font-size: 60px;
      }
      @media (min-width: ${({ theme }) => theme.breakPiont.xl}) {
        font-size: 70px;
      }
    }

    .des {
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translate(0%, -50%);
      width: 220px;
      /* display: flex; */
      /* flex-wrap: wrap; */
      /* justify-content: space-between; */

      p {
        text-align: right;
      }

      .time {
        width: 100%;
        color: ${({ theme }) => theme.color.primary};
        font-size: 20px;
        letter-spacing: 2px;
      }

      .deco {
        display: flex;
        align-items: center;

        .deco-1 {
          font-size: 12px;
        }
        .deco-2 {
          color: ${({ theme }) => theme.color.primary};
          font-size: 24px;
          font-weight: 300;
          margin-left: 10px;
        }
      }
    }
  }
`

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
    font-weight: 600;
    font-style: italic;
    line-height: 1.2;
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
      font-size: 20px;
      line-height: 2.2;
      letter-spacing: 2px;
      text-decoration: none;
      padding: 0 30px;
      margin-top: 30px;
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

      &:last-child {
        border-bottom: 0px;
      }

      label {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
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
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.color.gray};
        padding: 12px;
        color: #fff;
        font-size: 16px;
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

export default function Home({ data }) {
  const [date, setDate] = useState(new Date())
  const [pageData, setPageData] = useState(data.en)
  const { bannerXS, bannerMD, downloadUrl } = data
  const [inputName, setInputName] = useState('')
  const [inputPhone, setInputPhone] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [selectType, setSelectType] = useState('1')
  const [textareaOther, setTextareaOther] = useState('')
  const formData = useRef({})
  const router = useRouter()
  const language = useLanguage()

  if (router.asPath.includes('?')) {
    const index = router.asPath.indexOf('?')
    const path = router.asPath.substring(index + 1)
    const params = path.split('&')
    const isContactUs = params.some((item) => item === 'contactus')
    // console.log(params, isContactUs)

    if (isContactUs) {
      window.scrollTo({
        top: 100,
        behavior: 'smooth',
      })
    }
  }

  const tick = () => {
    setDate(new Date())
  }

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000)
    return function cleanup() {
      clearInterval(timerID)
    }
  })

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
    }
    if (language === LANGUAGE_JP) {
      setPageData(data.jp)
    }
    if (language === LANGUAGE_EN) {
      setPageData(data.en)
    }
  }, [language, data])

  useEffect(() => {
    const res = axios.get(`http://nas.api.smartores.com/getHome`)
    const data = res.data
    // console.log(data)
  }, [])

  const handleClear = () => {
    setInputName('')
    setInputPhone('')
    setInputEmail('')
    setTextareaOther('')
  }

  const handleSubmit = async () => {
    // console.log(formData.current)
    const res = await axios.post(`${process.env.HOST}/api/getHome`, formData.current)
    const data = res.data
    console.log(data)
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
      <ContainerFluid>
        <StyleKv>
          <div className="kv-xs">
            <Image src={bannerXS.url} alt="" layout="responsive" width={768} height={670} />
          </div>
          <div className="kv-md">
            <Image src={bannerMD.url} alt="" layout="responsive" width={1920} height={700} />
          </div>
          <div className="content">
            <h2>
              Next second <br />
              Anything may <br />
              be the evolution
            </h2>
            <div className="des">
              <p className="time" suppressHydrationWarning>
                {date.toLocaleTimeString('zh-TW', { hour12: false })}
              </p>
              <div className="deco">
                <p className="deco-1">{"We change the view you'll see you change the view of world."}</p>
                <p className="deco-2">01</p>
              </div>
            </div>
          </div>
        </StyleKv>
      </ContainerFluid>
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
                  <Image
                    src={item.image.url}
                    alt=""
                    layout="responsive"
                    width={item.image.width}
                    height={item.image.height}
                  />
                  <p>{item.title}</p>
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
                  台灣台北市內湖區新湖三路268號4樓
                </div>
                <div className="info">
                  <i>
                    <IconPhone fill="#fff" />
                  </i>
                  +886 2712-3456
                </div>
              </div>
            </div>
            <a className="download" href={downloadUrl}>
              Download 公司簡介
            </a>
          </div>
          <div className="form">
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
                <select name="type" onChange={handleSelectType}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </label>
            </div>
            <div className="form-group">
              <label>
                <span>Anything you want to say…</span>
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
  const res = await fetch(`${process.env.HOST}/api/getHome`)
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}
