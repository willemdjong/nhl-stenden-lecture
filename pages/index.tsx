import { ReactQueryDevtools } from "react-query/devtools";

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import Layout from '../components/layout'
import Posts from '../components/posts'

const queryClient = new QueryClient()

const BlogOverview: React.VFC = () => (
  <QueryClientProvider client={queryClient}>
    <Layout>
      <Posts />
      <ReactQueryDevtools />
    </Layout>
  </QueryClientProvider>
)

export default BlogOverview
