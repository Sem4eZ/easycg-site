import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'

import { FacebookIcon } from 'shared/icons/facebook'
import { InstagramIcon } from 'shared/icons/instagram'
import { LinkedinIcon } from 'shared/icons/linkedin'
import { TwitterIcon } from 'shared/icons/twitter'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'

interface Props {
  size: 'small' | 'medium'
}

const SOCIAL_MEDIA: { link: string; icon: React.ReactNode }[] = [
  {
    link: 'https://twitter.com/easycgimmersive',
    icon: <TwitterIcon />,
  },
  {
    link: 'https://facebook.com/easycg.dev',
    icon: <FacebookIcon />,
  },
  {
    link: 'https://www.instagram.com/easy.cg/',
    icon: <InstagramIcon />,
  },
  {
    link: 'http://www.linkedin.com/company/easycg',
    icon: <LinkedinIcon />,
  },
]

export const SocialMedia = ({ size, ...rest }: Props) => {
  return (
    <Container data-size={size} {...rest}>
      {SOCIAL_MEDIA.map((socialMedia, i) => (
        <ListItem key={i} data-size={size}>
          <IconButton href={socialMedia.link} target="_blank">
            {socialMedia.icon}
          </IconButton>
        </ListItem>
      ))}
    </Container>
  )
}

const Container = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  '&[data-size="small"]': {
    ...getBreakpointsStylesByArray(theme, {
      gap: [8],
    }),
  },
  '&[data-size="medium"]': {
    ...getBreakpointsStylesByArray(theme, {
      gap: [8, null, null, null, null, null, 40],
    }),
  },
}))

const ListItem = styled('li')(({ theme }) => ({
  '&[data-size="small"]': {
    ...getBreakpointsStylesByArray(theme, {
      width: [32, null, null, null, 40, null, 32, null, 40],
    }),
  },
  '&[data-size="medium"]': {
    ...getBreakpointsStylesByArray(theme, {
      width: [32, null, null, null, null, null, 56],
    }),
  },
  '& a': {
    color: theme.palette.text.primary,
  },
  svg: {
    width: '100%',
    height: 'auto',
  },
}))
