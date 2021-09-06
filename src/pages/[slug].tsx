import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import { GetStaticPaths } from 'next'
import { useRouter } from 'next/dist/client/router'
import AboutTemplate from 'templates/About'

export default function About(): JSX.Element {
  const router = useRouter()

  if (router.isFallback) return <small>Loading...</small>

  return <AboutTemplate />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }: { slug: string }) => ({
    params: { slug }
  }))

  console.log(paths)

  return { paths, fallback: true }
}
