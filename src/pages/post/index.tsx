import { useParams } from 'react-router-dom'

const PostPage = () => {
  const { id } = useParams()

  return <div>Post: {id}</div>
}

export default PostPage
