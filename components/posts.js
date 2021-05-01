import usePosts from '../hooks/usePosts'

const Posts = () => {
  const {
    status, data, error, isFetching,
  } = usePosts()

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {status === 'loading' ? (
          'Loading...'
        ) : status === 'error' ? (
          <span>
            Error:
            {error.message}
          </span>
        ) : (
          <>
            <div>
              {data.map((post) => (
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
