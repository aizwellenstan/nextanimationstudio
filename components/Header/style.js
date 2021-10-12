import styled from 'styled-components'

export const StyleHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #000; */
  z-index: ${({ theme }) => theme.zHeader};

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    height: 46px;
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    height: 70px;
  }
`

export const StyleLogo = styled.div`
  width: 26px;
  margin-left: 12px;

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    width: 35px;
    margin-left: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    width: 77px;
    margin-left: 48px;
  }
`

export const StyleHamburger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  z-index: ${({ theme }) => theme.zHamburger};

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    width: 46px;
    height: 46px;
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    width: 70px;
    height: 70px;
  }

  &.open {
    background-color: #000;

    .line-group {
      .line:first-child {
        background-color: #fff;
        transform: rotate(45deg) translate(1px, 0px);
      }

      .line:last-child {
        background-color: #fff;
        transform: rotate(-45deg) translate(1px, 0px);
        margin-top: 0%;
      }
    }
  }

  .line-group {
    width: 50%;

    .line {
      width: 100%;
      height: 1px;
      background-color: #000;
      transform-origin: center center;
      transition: 0.2s ease-in-out;

      &:last-child {
        margin-top: 40%;
      }
    }
  }
`

export const StyleNav = styled.nav`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zNav};
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &.open {
    pointer-events: visible;

    &::before {
      opacity: 1;
    }

    .nav-group {
      transform: translateX(0%);
    }
  }

  .nav-group {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    overflow: auto;
    transition: transform 0.3s ease-in-out;
    transform: translateX(100%);

    @media (min-width: ${({ theme }) => theme.breakPiont.sm}) {
      width: 50%;
    }

    @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
      width: 40%;
      max-width: 800px;
    }

    .bg {
      position: absolute;
      width: 100%;
      min-height: 100vh;
      padding: 50px;
      overflow: hidden;

      @media (min-width: ${({ theme }) => theme.breakPiont.xl}) {
        padding: 70px;
      }

      &::before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0px;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.third};
        filter: blur(100px);
        z-index: -1;
        transform: translate(50%, 50%);
      }
    }

    .language {
      color: #fff;
      display: flex;
      gap: 8%;
      margin-bottom: 16%;
    }

    .menu {
      flex: 1 0 auto;
      margin-bottom: 16%;
    }

    .social-media {
      /* position: relative; */
      display: flex;
      gap: 8%;

      a {
        display: block;
        width: 20px;
        height: 20px;
      }
    }
  }
`
