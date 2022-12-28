import { styled } from '@mui/material'

import { projects } from 'entities/project/data'
import { ProjectCard } from 'entities/project/ui/project-card'
import {
  serviceDetailsToPricesBlockItems,
  services,
} from 'entities/services/data'

import {
  FreeRightPartContainer,
  HorizontalSliderContainer,
} from 'shared/ui/containers'
import { HorizontalList, ScrollableList } from 'shared/ui/horizontal-list'
import { PricesBlock } from 'shared/ui/prices-block'
import { XLFont } from 'shared/ui/typography'

const service = services[0]
const topProjects = projects.slice(0, 6)

const HomePage = () => (
  <div>
    <Block />

    <PricesBlock
      items={serviceDetailsToPricesBlockItems(service.details)}
      remark={service.remark}
    />
    <PricesBlock
      items={serviceDetailsToPricesBlockItems(service.details)}
      services={service.services}
      remark={service.remark}
    />
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
