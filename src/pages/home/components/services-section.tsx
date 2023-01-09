import { Button } from '@mui/material'

import { services } from 'entities/services/data'

import { PAGES } from 'shared/config'
import { useGetDevice } from 'shared/lib/use-get-device'
import { Accordion } from 'shared/ui/accordion'
import { FreeRightPartContainer } from 'shared/ui/containers'
import { TextOutlined } from 'shared/ui/outlined-text'

export const MainPageServicesSection = () => {
  const { isMacbook, isDesktop } = useGetDevice()

  const showFooter = isMacbook || isDesktop

  return (
    <FreeRightPartContainer
      number={
        <TextOutlined viewBoxWidth={800} animate>
          02
        </TextOutlined>
      }
      section="services"
      title={['what we DO']}
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
      footer={showFooter && <Button href={PAGES.Services}>learn more</Button>}
    />
  )
}
