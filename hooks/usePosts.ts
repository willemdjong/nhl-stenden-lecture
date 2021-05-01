import { useQuery, UseQueryResult } from 'react-query'
import { request, gql } from 'graphql-request'

const endpoint = 'https://graphqlzero.almansi.me/api'

interface Post { 
  id: string
  title: string
}

// React Query is a great hook library for managing data requests that completely removes the need to put your remote data inside the global state. You just need to tell the library where you need to fetch your data, and it will handle caching, background updates, and stale data without any extra code or configuration

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
