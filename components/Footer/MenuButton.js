import styled from 'styled-components'
import Link from 'next/link'
import useLanguage from '../../hooks/useLanguage'
import usePath from '../../hooks/usePath'
import { IconArrowRightBottom } from '../Icons'

const StyleMenu = styled.div`
  margin-top: 0;
  margin-bottom: 8%;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    width: 33%;
    margin-bottom: 14px;
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    margin-top: 20px;
    margin-bottom: 0;
    width: 33.33%;
    height: 14px;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  .name {
    color: #000;
    font-size: 14px;
    font-weight: 600;
    font-style: italic;
    line-height: 1;
    white-space: nowrap;
    margin: 0;
    display: flex;
    align-items: baseline;

    i {
      width: 10px;
      height: 10px;
      margin-left: 5px;
    }
  }
`

export default function MenuButton(props) {
  const { onNavOpen, name, url } = props
  const language = useLanguage()
  const path = usePath(language)

  return (
    <StyleMenu onClick={onNavOpen}>
      <Link href={`${path}${url}`} passHref>
        <a>
          <div className="name">
            {name}
            <i>
              <IconArrowRightBottom fill="#000000" />
            </i>
          </div>
        </a>
      </Link>
    </StyleMenu>
  )
}
