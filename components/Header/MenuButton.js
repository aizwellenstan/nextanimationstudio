import styled from 'styled-components'
import Link from 'next/link'
import useLanguage from '../../hooks/useLanguage'
import usePath from '../../hooks/usePath'
import { IconArrowRightBottom } from '../Icons'

const StyleMenu = styled.div`
  margin-bottom: 8%;

  a {
    display: inline-block;
    text-decoration: none;

    &:hover {
      .name {
        span {
          color: #fff;
          background-color: ${({ theme }) => theme.color.secondary};
        }
      }

      svg {
        fill: #04d6b2;
        stroke: #04d6b2;
        stroke-width: 3px;
      }
    }
  }

  .serial-number {
    color: #a8a8a8;
    font-size: 12px;
    font-weight: 200;
    font-style: italic;
    margin: 0;
    padding: 0 6px;

    @media (min-width: ${({ theme }) => theme.breakPiont.xl}) {
      font-size: 14px;
    }
  }

  .name {
    margin: 0;
    display: flex;
    align-items: baseline;

    span {
      display: block;
      color: ${({ theme }) => theme.color.primary};
      font-size: 18px;
      font-weight: 600;
      font-style: italic;
      line-height: 1;
      white-space: nowrap;
      padding: 0 6px;
      transition: all 0.3s;

      @media (min-width: ${({ theme }) => theme.breakPiont.xl}) {
        font-size: 40px;
      }
    }

    i {
      width: 10px;
      height: 10px;
      margin-left: 5px;

      @media (min-width: ${({ theme }) => theme.breakPiont.xl}) {
        width: 20px;
        height: 20px;
        margin-left: 10px;
      }
    }

    svg {
      transition: all 0.3s;
    }
  }
`

export default function MenuButton(props) {
  const { onNavOpen, serialNumber, name, url } = props
  const language = useLanguage()
  const path = usePath(language)

  return (
    <StyleMenu onClick={onNavOpen}>
      <Link href={`${path}${url}`} passHref>
        <a>
          <p className="serial-number">{serialNumber}</p>
          <div className="name">
            <span className="text">{name}</span>
            <i>
              <IconArrowRightBottom fill="#15ff93" />
            </i>
          </div>
        </a>
      </Link>
    </StyleMenu>
  )
}
