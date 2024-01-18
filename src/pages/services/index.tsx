import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useEffect, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { LeaveProjectDetails } from 'features/project/leave-project-details/quiz'
import { useServicesFilter } from 'features/services/filter'

import {
  serviceDetailsToPricesBlockItems,
  services,
} from 'entities/services/data'
import { Service, serviceType } from 'entities/services/types'
import { ServiceCard } from 'entities/services/ui/service-card'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { maxWidth, spaceArr } from 'shared/theme'
import { Accordion } from 'shared/ui/accordion'
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
  const navigate = useNavigate()

  return (
    <Page
      title="services"
      decorationText={
        <TextOutlined viewBoxWidth={797} type="header">
          03
        </TextOutlined>
      }
      // filter={filterTemplate}
    >
      <Container>
        <OverviewPlace>
          <TextPlace>overview</TextPlace>
          <BlockTextOverview>
            <TitleOverview>
              we do impressive things to make your presence visible in the
              digital space
            </TitleOverview>
            <TextOverview>
              we specialize in high-quality and photorealistic
              computer-generated imagery (CGI), immersive extended reality (XR)
              and user-friendly applications (APP)
            </TextOverview>
          </BlockTextOverview>
        </OverviewPlace>
        <ServicesPlace>
          <TextPlace>services</TextPlace>
          <BlockTextOverview>
            <Accordion
              name="services"
              items={services.map(services => ({
                title: services.name,
                titleExplanation: services.nameExplanation,
                content: (
                  <StyledAccordionContent key={services.name}>
                    <li>{services.services[0]}</li>
                    <li>{services.services[1]}</li>
                    <li>{services.services[2]}</li>
                  </StyledAccordionContent>
                ),
                remark: services.remark,
              }))}
            />
          </BlockTextOverview>
        </ServicesPlace>
        <Footer>
          <LeaveProjectDetails buttonText="order a project" />
          <Button onClick={() => navigate(PAGES.Projects)}>
            view out portfolio
          </Button>
        </Footer>
      </Container>
    </Page>
  )
}

export default ServicesPage

const ServicesPlace = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 20,
}))

const OverviewPlace = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 20,
}))

const BlockTextOverview = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'space-between',
  justifyContent: 'center',
  gap: 20,
  width: '60%',
}))

const TitleOverview = styled('div')(({ theme }) => ({
  fontWeight: 700,
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [16, 16, 24, 24, 32, 42, 44, 64],
    lineHeight: [16, 16, 24, 32, 36, 50, 50, 77],
  }),
}))
const TextOverview = styled('div')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [16, 16, 16, 16, 16, null, 24, 24],
    lineHeight: [16, 16, 24, 32, 36, null, 24, 32],
  }),
}))

const TextPlace = styled('div')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [16, 16, 24, 32, 36, null, 42, 42],
  }),
}))

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
    paddingBottom: [150, null, 115, 158, 136, 259, 195, null, 223, 223],
  }),
}))

const StyledAccordionContent = styled('ul')(({ theme }) => ({
  paddingLeft: 4,
  listStyle: 'none',
  textAlign: 'start',
  '& li': {
    display: 'flex',
    alignItems: 'flex-start',
    ...getBreakpointsStylesByArray(theme, {
      marginBottom: [12, 12, 12, null, 12, null, 16, null, 12],
    }),
    '&:before': {
      position: 'relative',
      content: '""',
      background: theme.palette.text.primary,
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      marginRight: '20px',
      ...getBreakpointsStylesByArray(theme, {
        top: [7, null, null, null, null, null, 9],
        width: [8, null, null, null, null, null, 14],
        height: [8, null, null, null, null, null, 14],
      }),
    },
    p: {
      ...getBreakpointsStylesByArray(theme, {
        paddingLeft: [16],
        width: [
          'calc(100% - 8px)',
          null,
          null,
          null,
          null,
          null,
          'calc(100% - 16px)',
        ],
      }),
    },
  },
}))

const Footer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  rowGap: 40,
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [5, 10, 15, 15, 15, 15, 15, 15, 15, 20],
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
