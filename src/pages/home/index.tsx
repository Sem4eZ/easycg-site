import { styled } from '@mui/material'

import { FreeRightPartContainer } from 'shared/ui/containers'
import { HorizontalList } from 'shared/ui/horizontal-list'

const HomePage = () => (
  <div>
    <Block />
    <FreeRightPartContainer
      number={1}
      section="about us"
      title={[
        'hello there! it’s EASY on the air',
        'we don’t speak about digital',
        ' we DO digital',
      ]}
      description={[
        <>
          let us quess! are you looking for a mobile app or website?
          <b>it’s for us</b>
        </>,
        <>
          AR/VR? wait for it... <b>we can do it, too</b>
        </>,
        <>
          we create <b>simple solutions</b> for serious buisness since 2018
        </>,
      ]}
      content={
        <HorizontalList
          title="our style is"
          items={['locanic', 'simple', 'clear', 'accessible']}
        />
      }
    />
    <HorizontalSliderContainer>
      <XLFont variant="h2" textAlign="center">
        our projects
      </XLFont>
      <ScrollableList parallax>
        {topProjects.map((project, i) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            date={project.date}
            description={project.description}
            image={project.image}
            type={project.type}
            servicesType={project.servicesType}
            zIndex={topProjects.length - i}
          />
        ))}
      </ScrollableList>
    </HorizontalSliderContainer>

    <Block />
  </div>
)

export default HomePage

const Block = styled('div')`
  height: 1000px;
  background-color: yellow;
`
