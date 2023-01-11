import { ARIcon } from 'shared/icons/ar'
import { CGIIcon } from 'shared/icons/cgi'
import { ComputerIcon } from 'shared/icons/computer'
import { PhoneIcon } from 'shared/icons/phone'
import { UXUIIcon } from 'shared/icons/uxui'
import { VRIcon } from 'shared/icons/vr'

import { Service, ServiceType } from './types'

export const services: Service[] = [
  {
    type: 'mobile',
    name: 'mobile apps',
    shortName: 'mobile',
    description:
      'native mobile apps for IOS & Android. zero-code solutions for Start Up ',
    services: [
      'native apps for ios & android',
      'zero code solutions for a start ups',
      'crossplatforming solutions on flutter',
    ],
    details: {
      price: 830,
      developmentTime: 'two weeks',
      rate: 37,
      exactPrice: 1020,
      additionalExpenses: 20,
    },
    remark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    icon: <PhoneIcon />,
  },
  {
    type: 'web',
    name: 'WEB',
    shortName: 'web',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quae veniam quas, labore velit rem minus quasi doloremque eum. Adipisci aliquam laboriosam rerum perspiciatis illo id veniam iste blanditiis ullam.`,
    services: [
      'native apps for ios & android',
      'zero code solutions for a start ups',
      'crossplatforming solutions on flutter',
    ],
    details: {
      price: 830,
      developmentTime: 'two weeks',
      rate: 37,
      exactPrice: 1020,
      additionalExpenses: 20,
    },
    remark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    icon: <ComputerIcon />,
  },
  {
    type: 'CGI',
    name: 'CGI',
    shortName: 'CGI',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quae veniam quas, labore velit rem minus quasi doloremque eum. Adipisci aliquam laboriosam rerum perspiciatis illo id veniam iste blanditiis ullam.`,
    services: [
      'native apps for ios & android',
      'zero code solutions for a start ups',
      'crossplatforming solutions on flutter',
    ],
    details: {
      price: 830,
      developmentTime: 'two weeks',
      rate: 37,
      exactPrice: 1020,
      additionalExpenses: 20,
    },
    remark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    icon: <CGIIcon />,
  },
  {
    type: 'AR',
    name: 'AR',
    shortName: 'AR',
    nameExplanation: '(aguamented reality)',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quae veniam quas, labore velit rem minus quasi doloremque eum. Adipisci aliquam laboriosam rerum perspiciatis illo id veniam iste blanditiis ullam.`,
    services: [
      'native apps for ios & android',
      'zero code solutions for a start ups',
      'crossplatforming solutions on flutter',
    ],
    details: {
      price: 830,
      developmentTime: 'two weeks',
      rate: 37,
      exactPrice: 1020,
      additionalExpenses: 20,
    },
    remark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    icon: <ARIcon />,
  },
  {
    type: 'VR',
    name: 'VR',
    shortName: 'VR',
    nameExplanation: '(virtual reality)',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quae veniam quas, labore velit rem minus quasi doloremque eum. Adipisci aliquam laboriosam rerum perspiciatis illo id veniam iste blanditiis ullam.`,
    services: [
      'native apps for ios & android',
      'zero code solutions for a start ups',
      'crossplatforming solutions on flutter',
    ],
    details: {
      price: 830,
      developmentTime: 'two weeks',
      rate: 37,
      exactPrice: 1020,
      additionalExpenses: 20,
    },
    remark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    icon: <VRIcon />,
  },
  {
    type: 'UXUI',
    name: 'UX/ UI',
    shortName: 'UX/UI',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quae veniam quas, labore velit rem minus quasi doloremque eum. Adipisci aliquam laboriosam rerum perspiciatis illo id veniam iste blanditiis ullam.`,
    services: [
      'native apps for ios & android',
      'zero code solutions for a start ups',
      'crossplatforming solutions on flutter',
    ],
    details: {
      price: 830,
      developmentTime: 'two weeks',
      rate: 37,
      exactPrice: 1020,
      additionalExpenses: 20,
    },
    remark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    icon: <UXUIIcon />,
  },
]

export const serviceDetailsToPricesBlockItems = (
  serviceDetails: Service['details'],
) => {
  const money = ['price', 'rate', 'exactPrice', 'additionalExpenses']
  const details = Object.entries(serviceDetails)
  return details.map(detail => ({
    name: detail[0],
    value: money.includes(detail[0]) ? `${detail[1]} $` : detail[1],
  }))
}

export const serviceTypeToIcon: Record<ServiceType, React.ReactNode> = {
  web: <ComputerIcon />,
  mobile: <PhoneIcon />,
  CGI: <CGIIcon />,
  AR: <ARIcon />,
  VR: <VRIcon />,
  UXUI: <UXUIIcon />,
}
