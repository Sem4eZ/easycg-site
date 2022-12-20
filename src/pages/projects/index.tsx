import { NumberOutlined } from 'shared/ui/outlined-text'
import { Page } from 'shared/ui/page-templates'

const ProjectsPage = () => (
  <Page
    title="work"
    decorationText={<NumberOutlined type="header">01</NumberOutlined>}
    subtitleContent="Block under the title"
    filter="Filter"
    children="Some page content"></Page>
)

export default ProjectsPage
