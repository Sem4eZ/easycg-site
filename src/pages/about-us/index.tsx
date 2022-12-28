import { team } from 'entities/team/data'
import { TeammateCard } from 'entities/team/ui/teammate-card'

import { HorizontalSliderContainer } from 'shared/ui/containers'
import { ScrollableList } from 'shared/ui/horizontal-list'
import { XLFont } from 'shared/ui/typography'

const AboutUsPage = () => (
  <div>
    <HorizontalSliderContainer>
      <XLFont variant="h2" textAlign="center">
        our team
      </XLFont>
      <ScrollableList>
        {team.map(teammate => (
          <TeammateCard
            key={teammate.id}
            name={teammate.name}
            date={teammate.date}
            description={teammate.description}
            image={teammate.image}
            position={teammate.position}
          />
        ))}
      </ScrollableList>
    </HorizontalSliderContainer>
  </div>
)

export default AboutUsPage
