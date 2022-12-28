import { styled } from '@mui/material'

import { FreeRightPartContainer } from 'shared/ui/containers'
import { Hero } from 'shared/ui/hero'
import { VerticalList } from 'shared/ui/vertical-list/default'

const HomePage = () => (
  <div>
    <Hero />
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
    <Block />
  </div>
)

export default HomePage

const Block = styled('div')`
  height: 1000px;
  background-color: yellow;
`
