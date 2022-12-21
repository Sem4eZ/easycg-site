import { useParams } from 'react-router-dom'

import { TextOutlined } from 'shared/ui/outlined-text'
import { Page } from 'shared/ui/page-templates'

const ProjectDetailPage = () => {
  const { id } = useParams()

  return (
    <Page
      title={`work: ${id}`}
      decorationText={
        <TextOutlined viewBoxWidth={2220} type="header">
          contact
        </TextOutlined>
      }
      subtitleContent="Block under the title">
      "Some page content"
    </Page>
  )
}

export default ProjectDetailPage
