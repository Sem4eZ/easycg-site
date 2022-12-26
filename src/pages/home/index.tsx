import { styled } from '@mui/material'

import { services } from 'entities/services/data'

import { Accordion } from 'shared/ui/accordion'
import { FreeRightPartContainer } from 'shared/ui/containers'
import { VerticalList } from 'shared/ui/vertical-list/default'

const HomePage = () => (
  <div>
    <FreeRightPartContainer
      number={1}
      section="about us"
      title={
        <>
          hello there! it’s EASY on the air
          <br /> we don’t speak about digital
          <br />
          we DO digital
        </>
      }
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
        <VerticalList
          title="our style is"
          items={['locanic', 'simple', 'clear', 'accessible']}
        />
      }
    />
    <Block />
    <FreeRightPartContainer
      number={1}
      section="about us"
      title={
        <>
          hello there! it’s EASY on the air
          <br /> we don’t speak about digital
          <br />
          we DO digital
        </>
      }
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
        <VerticalList
          title="our style is"
          items={['locanic', 'simple', 'clear', 'accessible']}
        />
      }
    />
    <FreeRightPartContainer
      number={2}
      section="services"
      title={<>what we DO</>}
      content={
        <Accordion
          name="Services"
          items={services.map(service => ({
            title: service.name,
            titleExplanation: service.nameExplanation,
            content: service.description,
          }))}
        />
      }
    />
    <Block />
  </div>
)

export default HomePage

const Block = styled('div')`
  height: 1000px;
  background-color: yellow;
`
