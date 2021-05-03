// import { ReactQueryDevtools } from 'react-query-devtools'
import Link from 'next/link'

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import Posts from '../components/posts'

const queryClient = new QueryClient()

const PostsPage: React.VFC = () => (
  <QueryClientProvider client={queryClient}>
    <Link href='/'>Back</Link>
    <Posts />
    {/* <ReactQueryDevtools initialIsOpen toggleButtonProps={{ style: { right: 70 } }} /> */}
  </QueryClientProvider>
)

export default PostsPage
