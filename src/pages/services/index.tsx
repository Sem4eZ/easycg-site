import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import {
  serviceDetailsToPricesBlockItems,
  services,
} from 'entities/services/data'
import { ServiceCard } from 'entities/services/ui/service-card'

const ServicesPage = () => {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const serviceContainer = document.querySelector(hash)
    if (!serviceContainer) return
    serviceContainer.scrollIntoView()
  }, [])

  return (
    <div style={{ display: 'grid', gridRowGap: '50px' }}>
      {services.map(service => {
        return (
          <ServiceCard
            key={service.name}
            title={service.name}
            serviceType={service.type}
            pricesBlock={{
              items: serviceDetailsToPricesBlockItems(service.details),
              services: service.services,
              remark: service.remark,
            }}
          />
        )
      })}
    </div>
  )
}

export default ServicesPage
