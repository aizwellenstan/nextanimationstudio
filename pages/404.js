import Head from 'next/head'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <h1>
        404!!!
        <br />
        Go to back{' '}
        <Link href="/" passHref>
          <a>Homepage</a>
        </Link>
      </h1>
    </>
  )
}
