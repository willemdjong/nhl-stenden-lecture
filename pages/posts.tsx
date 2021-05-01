import { ReactQueryDevtools } from 'react-query-devtools'

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import Posts from '../components/posts'

const queryClient = new QueryClient()

const PostsPage: React.VFC = () => (
  <QueryClientProvider client={queryClient}>
    <Posts />
    <ReactQueryDevtools toggleButtonProps={{ style: { right: 70 } }} />
  </QueryClientProvider>
)

export default PostsPage
