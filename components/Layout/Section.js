import Image from 'next/image'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const StyleText = styled.section`
  h2 {
    font-size: 28px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.primary};
    margin-bottom: 4%;

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      font-size: 32px;
      margin-bottom: 2%;
    }
  }

  p {
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 12%;

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      font-size: 16px;
      margin-bottom: 6%;
    }
  }
`

const StylePhoto = styled.section`
  display: flex;
  flex-wrap: wrap;

  &.wrap {
    figure {
      flex: 1 0 100%;

      @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
        flex: 0 1 50%;
      }

      @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
        flex: 0 1 33.33%;
      }
    }
  }

  figure {
    flex: 1 0 100%;
    margin-bottom: 6%;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      flex: 0 1 50%;
    }
    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      flex: 1 0 auto;
    }

    figcaption {
      font-size: 14px;
      font-weight: 300;
      text-align: center;

      @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
        font-size: 16px;
      }
    }
  }
`

const StyleAlbum = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-left: -6px;
  margin-right: -6px;

  &.wrap {
    figure {
      flex: 1 0 100%;

      @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
        flex: 0 1 50%;
      }

      @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
        flex: 0 1 33.33%;
      }
    }
  }

  figure {
    flex: 1 0 100%;
    padding: 6px;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      flex: 0 1 50%;
    }
    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      flex: 1 0 auto;
    }

    figcaption {
      font-size: 14px;
      font-weight: 300;
      text-align: center;

      @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
        font-size: 16px;
      }
    }
  }
`

const StyleTeam = styled.section`
  margin-top: 6%;

  .team {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
  }

  p {
    font-size: 14px;
    word-wrap: break-word;
    word-break: break-all;

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      font-size: 16px;
    }
  }

  .title {
    flex: 0 1 120px;
    padding-right: 6px;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      flex: 1 0 50%;
    }

    .title-name {
      color: ${({ theme }) => theme.color.primary};
      font-weight: 600;
      text-align: left;

      @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
        text-align: right;
      }
    }
  }

  .list {
    flex: 1 0 50%;
    padding-left: 6px;

    .list-name {
      font-weight: 300;
    }
  }
`

export const SectionText = ({ item }) => {
  return <StyleText key={item.id} dangerouslySetInnerHTML={{ __html: item.content }}></StyleText>
}

export const SectionPhoto = ({ item }) => {
  return (
    <StylePhoto key={item.id} className={item.content.length > 3 ? 'wrap' : null}>
      {item.content.map((photo) => {
        return (
          <figure key={photo.id}>
            <Image src={photo.url} alt="" layout="responsive" width={540} height={360} />
            <figcaption>{photo.description}</figcaption>
          </figure>
        )
      })}
    </StylePhoto>
  )
}

export const SectionAlbum = ({ item }) => {
  return (
    <StyleAlbum key={item.id} className={item.content.length > 3 ? 'wrap' : null}>
      {item.content.map((photo) => {
        return (
          <figure key={photo.id}>
            <Image src={photo.url} alt="" layout="responsive" width={540} height={360} />
          </figure>
        )
      })}
    </StyleAlbum>
  )
}

export const SectionTeam = ({ item }) => {
  return (
    <StyleTeam>
      {item.content.map((team) => {
        return (
          <div key={team.id} className="team">
            <div className="title">
              <p className="title-name">{team.title}</p>
            </div>
            <div className="list">
              {team.name.map((name) => {
                return (
                  <p key={uuidv4()} className="list-name">
                    {name}
                  </p>
                )
              })}
            </div>
          </div>
        )
      })}
    </StyleTeam>
  )
}
