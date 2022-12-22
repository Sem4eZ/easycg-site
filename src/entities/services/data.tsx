import { ComputerIcon } from 'shared/icons/computer'
import { PhoneIcon } from 'shared/icons/phone'
import { ServiceSquareIcon } from 'shared/icons/service-square'

interface Service {
  type: string
  name: string
  nameExplanation?: string
  description: string
  services: string[]
  details: {
    price: string
    developmentTime: string
    rate: string
    exactPrice: string
    additionalExpenses: string
  }
  remark: string
  icon: React.ReactNode
}

export const services: Service[] = [
  {
    type: 'mobile',
    name: 'mobile apps',
    description:
      'native mobile apps for IOS & Android. zero-code solutions for Start Up ',
    services: [
      'native apps for ios & android',
      'zero code solutions for a start ups',
      'crossplatforming solutions on flutter',
    ],
    details: {
      price: '$830',
      developmentTime: 'two weeks',
      rate: '$37',
      exactPrice: '$1020',
      additionalExpenses: '$20',
    },
    remark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    icon: <PhoneIcon />,
  },
  {
    type: 'web',
    name: 'WEB',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quae veniam quas, labore velit rem minus quasi doloremque eum. Adipisci aliquam laboriosam rerum perspiciatis illo id veniam iste blanditiis ullam.`,
    services: [
      'native apps for ios & android',
      'zero code solutions for a start ups',
      'crossplatforming solutions on flutter',
    ],
    details: {
      price: '$830',
      developmentTime: 'two weeks',
      rate: '$37',
      exactPrice: '$1020',
      additionalExpenses: '$20',
    },
    remark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    icon: <ComputerIcon />,
  },
  {
    type: 'CGI',
    name: 'CGI',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quae veniam quas, labore velit rem minus quasi doloremque eum. Adipisci aliquam laboriosam rerum perspiciatis illo id veniam iste blanditiis ullam.`,
    services: [
      'native apps for ios & android',
      'zero code solutions for a start ups',
      'crossplatforming solutions on flutter',
    ],
    details: {
      price: '$830',
      developmentTime: 'two weeks',
      rate: '$37',
      exactPrice: '$1020',
      additionalExpenses: '$20',
    },
    remark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    icon: <ServiceSquareIcon />,
  },
  {
    type: 'AR',
    name: 'AR',
    nameExplanation: '(aguamented reality)',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quae veniam quas, labore velit rem minus quasi doloremque eum. Adipisci aliquam laboriosam rerum perspiciatis illo id veniam iste blanditiis ullam.`,
    services: [
      'native apps for ios & android',
      'zero code solutions for a start ups',
      'crossplatforming solutions on flutter',
    ],
    details: {
      price: '$830',
      developmentTime: 'two weeks',
      rate: '$37',
      exactPrice: '$1020',
      additionalExpenses: '$20',
    },
    remark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    icon: <ServiceSquareIcon />,
  },
  {
    type: 'VR',
    name: 'VR',
    nameExplanation: '(virtual reality)',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quae veniam quas, labore velit rem minus quasi doloremque eum. Adipisci aliquam laboriosam rerum perspiciatis illo id veniam iste blanditiis ullam.`,
    services: [
      'native apps for ios & android',
      'zero code solutions for a start ups',
      'crossplatforming solutions on flutter',
    ],
    details: {
      price: '$830',
      developmentTime: 'two weeks',
      rate: '$37',
      exactPrice: '$1020',
      additionalExpenses: '$20',
    },
    remark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    icon: <ServiceSquareIcon />,
  },
  {
    type: 'UX/ UI',
    name: 'UX/ UI',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quae veniam quas, labore velit rem minus quasi doloremque eum. Adipisci aliquam laboriosam rerum perspiciatis illo id veniam iste blanditiis ullam.`,
    services: [
      'native apps for ios & android',
      'zero code solutions for a start ups',
      'crossplatforming solutions on flutter',
    ],
    details: {
      price: '$830',
      developmentTime: 'two weeks',
      rate: '$37',
      exactPrice: '$1020',
      additionalExpenses: '$20',
    },
    remark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    icon: <ServiceSquareIcon />,
  },
]

export const serviceDetailsToPricesBlockItems = (
  serviceDetails: Service['details'],
) => {
  const details = Object.entries(serviceDetails)
  return details.map(detail => ({
    name: detail[0],
    value: detail[1],
  }))
}
