import styled from 'styled-components'
import Link from 'next/link'

const List = styled.div`
  display: flex;
  flex-direction: column;
`

export default function About({test}) {
  return (
    <>
      <h1>About</h1>
      <List>
      {
        test.map((item) => {
          return <Link key={item.id} href={'/about/'+item.id}>{item.name}</Link>
        })
      }
      </List>
    </>
  )
}

export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);

  return {
    props: {
      test: data
    }
  }

}