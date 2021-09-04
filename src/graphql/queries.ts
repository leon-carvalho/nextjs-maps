import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query GetPages {
    pages {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`
