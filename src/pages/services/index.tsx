import {
  serviceDetailsToPricesBlockItems,
  services,
} from 'entities/services/data'
import { ServiceCard } from 'entities/services/ui/service-card'

const ServicesPage = () => (
  <div>
    {services.map(service => {
      return (
        <ServiceCard
          title={service.name}
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

export default ServicesPage
