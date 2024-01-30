import { styled } from '@mui/material/styles'

import { COMPANY_EMAIL, COMPANY_TG } from 'shared/config/environment-variables'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { LFont } from 'shared/ui/typography'

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
    label: 'telegram',
    value: <a href={COMPANY_TG}>@workshop_easy</a>,
    // remark:
    //   'now we are based in Bali (Indonesia) and take projects all over the world',
  },
  // { label: 'location*', value: 'worldwide' },
  // {
  //   // label: 'work time*',
  //   // value: '10 am to 7 pm',
  //   remark: <TimeRemark />,
  // },
]

export const ContactPageContactInfo = () => {
  return (
    <div>
      {data.map(_data => (
        <Row key={_data.label}>
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
      paddingTop: [56, null, null, null, 40, null, 72, null, 60],
    }),
  },
}))

const RowContent = styled('div')(({ theme }) => ({
  color: 'rgb(121, 127, 154);',
  display: 'grid',
  borderBottom: `1px solid ${theme.palette.text.secondary} `,
  gridTemplateColumns: '1fr 1fr',
  ...getBreakpointsStylesByArray(theme, {
    paddingBottom: [8, null, null, null, null, null, 24, null, 32],
  }),
}))

const RightPart = styled(LFont)(({ theme }) => ({
  textAlign: 'end',
  '& a': {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}))

const Remark = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
}))
