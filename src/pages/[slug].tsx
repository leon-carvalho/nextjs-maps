import client from 'graphql/client'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import PageTemplate from 'templates/Pages'

export default function Page(): JSX.Element {
  const router = useRouter()

  if (router.isFallback) return <small>Loading...</small>

  return <PageTemplate />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }: { slug: string }) => ({
    params: { slug }
  }))

  console.log(paths)

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = await client.request(GET_PAGE_BY_SLUG, {
    slug: params?.slug
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
