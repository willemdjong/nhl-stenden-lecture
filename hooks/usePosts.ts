import { useQuery, UseQueryResult } from 'react-query'
import { request, gql } from 'graphql-request'

const endpoint = 'https://graphqlzero.almansi.me/api'

interface Post { 
  id: string
  title: string
}

const usePosts = (): UseQueryResult<Post[], Error> =>
  useQuery<Post[], Error>('posts', async () => {
    const { posts: { data } } = await request(
      endpoint,
      gql`
        query {
          posts {
            data {
              id
              title
            }
          }
        }
      `
    )
    return data
  })

export default usePosts
