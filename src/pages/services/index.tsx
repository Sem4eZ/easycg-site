import { styled } from '@mui/material/styles'
import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import { useServicesFilter } from 'features/services/filter'

import {
  serviceDetailsToPricesBlockItems,
  services,
} from 'entities/services/data'
import { Service } from 'entities/services/types'
import { ServiceCard } from 'entities/services/ui/service-card'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { maxWidth, spaceArr } from 'shared/theme'
import { TextOutlined } from 'shared/ui/outlined-text'
import { Page } from 'shared/ui/page-templates'

const ServicesPage = () => {
  const { hash } = useLocation()

  const { template: filterTemplate, filter } = useServicesFilter({})

  useEffect(() => {
    if (!hash) return
    const serviceContainer = document.querySelector(hash)
    if (!serviceContainer) return
    serviceContainer.scrollIntoView()
  }, [])

  const filteredServices = useMemo(() => {
    const filtered: Service[] = []

    if (filter.includes('all')) {
      return services
    }

    for (let i = 0; i < services.length; i++) {
      const service = services[i]

      if (filter.includes(service.type)) {
        filtered.push(service)
      }
    }

    return filtered
  }, [filter])

  return (
    <Page
      title="services"
      decorationText={
        <TextOutlined viewBoxWidth={797} type="header">
          03
        </TextOutlined>
      }
      filter={filterTemplate}>
      <Container>
        {filteredServices.map(service => {
          return (
            <li key={service.name}>
              <ServiceCard
                title={service.name}
                serviceType={service.type}
                pricesBlock={{
                  items: serviceDetailsToPricesBlockItems(service.details),
                  services: service.services,
                  remark: service.remark,
                }}
              />
            </li>
          )
        })}
      </Container>
    </Page>
  )
}

export default ServicesPage

const Container = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  display: 'grid',
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  ...getBreakpointsStylesByArray(theme, {
    gridRowGap: [40, 40, 50, 70, 100, null, 100, 150],
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
    paddingBottom: [150, null, 115, 158, 136, 259, 195, null, 223, 532],
  }),
}))
