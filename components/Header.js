import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #000;
  color: #fff;
  padding: 0 20px;
`;

const Menubar = styled.div`
  display: flex;
  align-items: center;

  & > div{
    margin: 0 10px;
  }
`;

const Header = () => {
  return (
    <Nav>
      <div>
        <Link href="/" passHref>
          <a>Next</a>
        </Link>
      </div>
      <Menubar>
        <div>
          <Link href="/" passHref>
            <a>Home</a>
          </Link>
        </div>
        <div>
          <Link href="/about" passHref>
            <a>About</a>
          </Link>
        </div>
        <div>
          <Link href="/contact" passHref>
            <a>Contact</a>
          </Link>
        </div>
      </Menubar>
    </Nav>
  )
}

export default Header
