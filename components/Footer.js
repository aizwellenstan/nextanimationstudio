import styled from 'styled-components'

const FooterSection = styled.footer`
  background-color: #000;
  height: 30px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>Next app copyright.</p>
    </FooterSection>
  )
}

export default Footer
