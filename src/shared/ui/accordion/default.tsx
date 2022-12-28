import AccordionBase from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'

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
  ...getBreakpointsStylesByArray(theme, {
    gridRowGap: [12, 8, null, 10, 12, null, 44],
  }),
}))

export const Summary = styled(AccordionSummary)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    paddingRight: [6, null, null, null, 54, 47, 190, null, 123, 230],
  }),
  '& .MuiAccordionSummary-expandIconWrapper': {
    position: 'relative',
    '&::after': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      transform: 'translate(-50%, -50%)',
      ...getBreakpointsStylesByArray(theme, {
        width: [14, null, null, null, null, null, 28, null, 32],
        height: [2, null, null, null, null, null, 4, null, 5],
      }),
      backgroundColor: theme.palette.text.primary,
    },
    '&::before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      transform: 'translate(-50%, -50%)',
      ...getBreakpointsStylesByArray(theme, {
        width: [2, null, null, null, null, null, 4, null, 5],
        height: [14, null, null, null, null, null, 28, null, 32],
      }),
      backgroundColor: theme.palette.text.primary,
    },
    '&.Mui-expanded': {
      '&::before': {
        opacity: 0,
      },
    },
  },
}))
