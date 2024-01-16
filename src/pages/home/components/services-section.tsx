import { useNavigate } from 'react-router-dom'

import { services } from 'entities/services/data'

import { PAGES } from 'shared/config'
import { Accordion } from 'shared/ui/accordion'
import { ButtonRipple } from 'shared/ui/button-ripple'
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
      title={[`let's see what we DO`]}
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
        <ButtonRipple
          variant="contained"
          onClick={() => navigate(PAGES.Services)}>
          learn more
        </ButtonRipple>
      }
    />
  )
}
