import AccordionBase from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import { pxToRem } from 'shared/lib/px-to-rem'

import { ExplanationFont, LFont } from '../typography'

interface Props {
  name: string
  items: {
    title: string
    titleExplanation?: string
    content: React.ReactNode
  }[]
}

export const Accordion = ({ name, items }: Props) => {
  return (
    <Container>
      {items.map(item => {
        return (
          <AccordionBase key={item.title}>
            <Summary
              expandIcon={<></>}
              aria-controls={`${name}-content`}
              id={`${name}-header`}>
              <LFont>
                {item.title}
                <ExplanationFont variant="caption">
                  {item.titleExplanation}
                </ExplanationFont>
              </LFont>
            </Summary>
            <AccordionDetails>
              <Typography>{item.content}</Typography>
            </AccordionDetails>
          </AccordionBase>
        )
      })}
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  display: 'grid',
  gridRowGap: pxToRem(8),
  [theme.breakpoints.up('laptop')]: {
    gridRowGap: pxToRem(16),
  },
}))

export const Summary = styled(AccordionSummary)(({ theme }) => ({
  paddingRight: pxToRem(6),
  '& .MuiAccordionSummary-expandIconWrapper': {
    position: 'relative',
    '&::after': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      transform: 'translate(-50%, -50%)',
      width: '12px',
      height: '2px',
      backgroundColor: theme.palette.text.primary,
    },
    '&::before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      transform: 'translate(-50%, -50%)',
      width: '2px',
      height: '12px',
      backgroundColor: theme.palette.text.primary,
    },
    '&.Mui-expanded': {
      '&::before': {
        opacity: 0,
      },
    },
  },
  [theme.breakpoints.up('tablet')]: {
    paddingRight: pxToRem(54),
  },
  [theme.breakpoints.up('tablet_landscape')]: {
    paddingRight: pxToRem(47),
  },
  [theme.breakpoints.up('laptop')]: {
    paddingRight: pxToRem(190),
  },
  [theme.breakpoints.up('desktop')]: {
    paddingRight: pxToRem(230),
  },
}))
