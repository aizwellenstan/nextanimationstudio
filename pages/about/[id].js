import Link from 'next/link'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map(item => {
    return {
      params: { id: item.id.toString() }
    }
  })

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: {
      test: data
    }
  }
}

const Detail = ({test}) => {
  return (
    <div>
      <Link href="/about">Back to About</Link>
      <h1>Detail</h1>
      <p>{test.name}</p>
      <p>{test.email}</p>
      <p>{test.address.city}</p>
    </div>
  )
}

export default Detail
