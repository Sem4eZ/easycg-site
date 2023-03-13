import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

import { LeaveProjectDetails } from 'features/project/leave-project-details/quiz'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { PricesBlock, PricesBlockProps } from 'shared/ui/prices-block'
import { XXLFont } from 'shared/ui/typography'

interface Props {
  title: string
  serviceType: string
  pricesBlock: PricesBlockProps
}

export const ServiceCard = ({ title, serviceType, pricesBlock }: Props) => {
  const navigate = useNavigate()

  return (
    <Container id={serviceType}>
      <Title variant="h2">{title}</Title>
      <PricesBlock {...pricesBlock} />

      <Footer>
        <LeaveProjectDetails buttonText="questions" />
        <Button
          onClick={() =>
            navigate(PAGES.Projects, { state: { filter: [serviceType] } })
          }>
          portfolio
        </Button>
      </Footer>
    </Container>
  )
}

const Container = styled('article')(() => ({
  position: 'relative',
}))

const Title = styled(XXLFont)(({ theme }) => ({
  position: 'relative',
  ...getBreakpointsStylesByArray(theme, {
    marginBottom: [24, 40, 48, 92, 40, null, 116, null, null, 208],
  }),
}))

const Footer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  rowGap: 40,
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [56, null, 96, 64, 104, null, 211, null, 258, 132],
    marginBottom: [24],
    justifyContent: [
      'space-between',
      'flex-start',
      'space-between',
      'flex-start',
    ],
    columnGap: [71, 194, 54, 247, 220, 236, 104, null, 244, 79],
    flexDirection: ['column', 'column', 'row'],
  }),
}))
