import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import PagesTemplate from 'templates/About'

export default function AboutPage(): JSX.Element {
  return <PagesTemplate />
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)

  console.log(pages)

  return {
    props: {}
  }
}
