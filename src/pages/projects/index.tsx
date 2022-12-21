import { NumberOutlined } from 'shared/ui/outlined-text'
import { Page } from 'shared/ui/page-templates'
import { VerticalList } from 'shared/ui/vertical-list'

const ProjectsPage = () => (
  <Page
    title="work"
    decorationText={<NumberOutlined type="header">01</NumberOutlined>}
    filter={
      <VerticalList
        title="our style is"
        items={['locanic', 'simple', 'clear', 'accessible']}
      />
    }>
    "Some page content"
  </Page>
)

export default ProjectsPage
