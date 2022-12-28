import AccordionBase from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

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
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <Container>
      {items.map(item => {
        return (
          <AccordionBase
            key={item.title}
            expanded={expanded === item.title}
            onChange={handleChange(item.title)}>
            <Summary
              expandIcon={<LFont></LFont>}
              aria-controls={`${item.title}-content`}
              id={`${item.title}-header`}>
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
  // '& .MuiAccordionSummary-expandIconWrapper': {
  //   p: {
  //     '&::after': {
  //       content: "'+'",
  //     },
  //   },
  //   '&.Mui-expanded': {
  //     p: {
  //       '&::after': {
  //         content: "'-'",
  //         marginRight: '7px',
  //         ...getBreakpointsStylesByArray(theme, {
  //           marginRight: [2, null, null, null, 4, null, 7],
  //         }),
  //       },
  //     },
  //     transform: 'unset',
  //   },
  // },
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
