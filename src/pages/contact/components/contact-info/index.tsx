import { styled } from '@mui/material/styles'

import {
  COMPANY_EMAIL,
  COMPANY_PHONE,
} from 'shared/config/environment-variables'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { getPhoneWithoutFormatting } from 'shared/lib/get-phone-without-formatting'
import { LFont } from 'shared/ui/typography'

import { TimeRemark } from './time-remark'

const data: {
  label: string
  value: React.ReactNode
  remark?: React.ReactNode
}[] = [
  {
    label: 'e-mail',
    value: <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>,
  },
  {
    label: 'phone-number',
    value: (
      <a href={`tel:${getPhoneWithoutFormatting(COMPANY_PHONE)}`}>
        {COMPANY_PHONE}
      </a>
    ),
    remark:
      'now we based in Almaty (Kazahstan) and takes project all over the world',
  },
  { label: 'location*', value: 'worldwide' },
  {
    label: 'work time*',
    value: 'depends',
    remark: <TimeRemark />,
  },
]

export const ContactPageContactInfo = () => {
  return (
    <div>
      {data.map(_data => (
        <Row>
          <RowContent>
            <LFont>{_data.label}</LFont>
            <RightPart>{_data.value}</RightPart>
          </RowContent>
          {_data.remark && <Remark>{_data.remark}</Remark>}
        </Row>
      ))}
    </div>
  )
}

const Row = styled('div')(({ theme }) => ({
  '&:not(:first-of-type)': {
    ...getBreakpointsStylesByArray(theme, {
      paddingTop: [56, null, null, null, 40, null, 72, null, 80],
    }),
  },
}))

const RowContent = styled('div')(({ theme }) => ({
  display: 'grid',
  borderBottom: `1px solid ${theme.palette.text.secondary} `,
  gridTemplateColumns: '1fr 1fr',
  ...getBreakpointsStylesByArray(theme, {
    paddingBottom: [8, null, null, null, null, null, 24, null, 32],
  }),
}))

const RightPart = styled(LFont)(() => ({
  textAlign: 'end',
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
}))

const Remark = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
}))
