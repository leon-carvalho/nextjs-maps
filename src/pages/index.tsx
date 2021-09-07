import { MapProps } from 'components/Map'
import { GetPlacesQuery } from 'generated/graphql'
import client from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'
import { GetStaticProps } from 'next'
import HomeTemplate from 'templates/Home'

export default function Home({ places }: MapProps): JSX.Element {
  return <HomeTemplate places={places} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    props: {
      places
    }
  }
}
