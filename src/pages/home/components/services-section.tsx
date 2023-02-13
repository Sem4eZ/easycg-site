import { Button, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { services } from 'entities/services/data'

import { PAGES } from 'shared/config'
import { Accordion } from 'shared/ui/accordion'
import { FreeRightPartContainer } from 'shared/ui/containers'
import { TextOutlined } from 'shared/ui/outlined-text'

export const MainPageServicesSection = () => {
  const navigate = useNavigate()

  return (
    <FreeRightPartContainer
      number={
        <TextOutlined viewBoxWidth={803} animate>
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
      footer={
        <Button variant="contained" onClick={() => navigate(PAGES.Services)}>
          <ButtonText>learn more</ButtonText>
        </Button>
      }
    />
  )
}

const ButtonText = styled('span')(() => ({
  zIndex: 1,
}))
