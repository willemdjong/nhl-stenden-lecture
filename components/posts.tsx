import usePosts from '../hooks/usePosts'

import styled from 'styled-components'

const Title = styled.h1`
  color: #ed3732;
`

const Posts: React.VFC = () => {
  const { status, data, error, isFetching, } = usePosts()

  return (
    <div>
      <Title>Posts</Title>
      <div>
        {status === 'loading' ? (
          'Loading...'
        ) : status === 'error' ? (
          <span>
            Error:
            {error?.message}
          </span>
        ) : (
          <>
            <div>
              {data?.map((post) => (
                <p key={post.id}>
                  {post.title}
                </p>
              ))}
            </div>
            <div>{isFetching ? 'Background Updating...' : ' '}</div>
          </>
        )}
      </div>
    </div>
  )
}

export default Posts
