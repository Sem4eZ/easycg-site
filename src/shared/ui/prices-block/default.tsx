import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'

import { LFont } from '../typography'

export interface Props {
  items: { name: string; value: string }[]
  services?: string[]
  remark: string
}

export const PricesBlock = ({ items, services, remark }: Props) => {
  return (
    <div>
      <Container>
        {services && (
          <Row>
            <Name>services</Name>
            <ServicesList>
              {services.map(service => (
                <li key={service}>
                  <LFont>{service}</LFont>
                </li>
              ))}
            </ServicesList>
          </Row>
        )}
        {items.map(item => {
          return (
            <Row key={item.value}>
              <Name>{item.name}</Name>
              <LFont>{item.value}</LFont>
            </Row>
          )
        })}
      </Container>
      <Remark>{remark}</Remark>
    </div>
  )
}

const Container = styled('ul')(({ theme }) => ({
  position: 'relative',
  listStyle: 'none',
  padding: 0,
  margin: 0,
}))

const ServicesList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  textAlign: 'end',
  '& li': {
    display: 'flex',
    alignItems: 'flex-start',
    ...getBreakpointsStylesByArray(theme, {
      marginBottom: [32, null, 24, null, 32, null, 48, null, 24],
    }),
    '&:before': {
      position: 'relative',
      content: '""',
      background: theme.palette.text.primary,
      width: '16px',
      height: '16px',
      ...getBreakpointsStylesByArray(theme, {
        top: [7, null, null, null, null, null, 19],
        width: [8, null, null, null, null, null, 16],
        height: [8, null, null, null, null, null, 16],
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

const Row = styled('li')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: '8px',
  borderBottom: `1px ${theme.palette.text.secondary}`,
  borderBottomStyle: 'solid',
  ...getBreakpointsStylesByArray(theme, {
    paddingTop: [16, null, null, 20, 24, null, null, null, 64, 32],
  }),
}))

const Name = styled(LFont)(({ theme }) => ({
  color: theme.palette.text.secondary,
}))

const Remark = styled('span')(({ theme }) => ({
  display: 'inline-block',
  marginTop: '8px',
  color: theme.palette.text.secondary,
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [10, null, 16, 24, 16, null, 25],
  }),
}))
