import styled from 'styled-components'

export const StyleFooter = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
  /* margin-top: 100px; */

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    justify-content: space-between;
    /* min-height: 200px; */
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    /* margin-top: 200px; */
  }
`

export const StyleSiteMap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    width: 80%;
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .menu {
    display: flex;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  .social-and-copyright {
    flex: 1 0 auto;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      align-self: flex-end;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
    }

    .social-media {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0%;

      @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
        justify-content: flex-end;
      }

      @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
        margin-bottom: 14px;
      }

      a {
        display: block;
        width: 20px;
        height: 20px;

        @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
          margin-left: 10px;
        }
      }
    }

    .copyright {
      display: none;
      color: #000;
      font-size: 12px;
      line-height: 1;

      @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
        display: block;
        order: -1;
      }

      @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
        order: 0;
      }
    }
  }
`

export const StyleAside = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  min-height: 95px;
  padding: 30px;
  background-color: ${({ theme }) => theme.color.secondary};

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    justify-content: flex-end;
    align-items: flex-end;
    width: 20%;
  }

  .copyright {
    display: block;
    color: #000;
    font-size: 12px;
    line-height: 1;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      display: none;
    }
  }
`

export const StyleLogo = styled.div`
  width: 45px;

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    width: 90px;
  }
`
