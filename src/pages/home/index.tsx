import { styled } from '@mui/material'

import {
  serviceDetailsToPricesBlockItems,
  services,
} from 'entities/services/data'

import { FreeRightPartContainer } from 'shared/ui/containers'
import { HorizontalList } from 'shared/ui/horizontal-list'
import { PricesBlock } from 'shared/ui/prices-block'

const HomePage = () => (
  <div>
    <PricesBlock
      items={serviceDetailsToPricesBlockItems(services[0].details)}
      remark={services[0].remark}
    />
    <PricesBlock
      items={serviceDetailsToPricesBlockItems(services[0].details)}
      services={services[0].services}
      remark={services[0].remark}
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
    <Block />
  </div>
)

export default HomePage

const Block = styled('div')`
  height: 1000px;
  background-color: yellow;
`
