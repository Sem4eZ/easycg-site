import { useParams } from 'react-router-dom'

const ProjectDetailPage = () => {
  const { id } = useParams()

  return <div>Project detail: {id}</div>
}

export default ProjectDetailPage
