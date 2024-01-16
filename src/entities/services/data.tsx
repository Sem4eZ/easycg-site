import { AppSVG } from 'shared/icons/appSVG'
import { ARIcon } from 'shared/icons/ar'
import { CGIIcon } from 'shared/icons/cgi'
import { ComputerIcon } from 'shared/icons/computer'
import { Cube } from 'shared/icons/cube'
import { FramedCube } from 'shared/icons/framedCube'
import { Glasses } from 'shared/icons/glasses'
import { PhoneIcon } from 'shared/icons/phone'
import { UXUIIcon } from 'shared/icons/uxui'
import { VRIcon } from 'shared/icons/vr'

import { Service, ServiceType } from './types'

export const services: Service[] = [
  // {
  //   type: 'mobile',
  //   name: 'mobile apps',
  //   shortName: 'mobile',
  //   description: `stay connected to your customers and employees with a customized mobile app. whether it's a store, service, or entertainment app, you choose the features and we make it happen`,
  //   services: [
  //     'native apps for ios & android',
  //     'zero code solutions for startups',
  //     'crossplatforming solutions on flutter',
  //   ],
  //   details: {
  //     price: 830,
  //     developmentTime: 'two weeks',
  //     rate: 37,
  //     exactPrice: 1020,
  //     additionalExpenses: 20,
  //   },
  //   remark:
  //     'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
  //   icon: <PhoneIcon />,
  // },
  // {
  //   type: 'web',
  //   name: 'WEB',
  //   shortName: 'web',
  //   description: `looking to establish a strong online presence? our web development services can help you create a website that stands out, with intuitive navigation, responsive design, and seamless functionality`,
  //   services: [
  //     'high-traffic website or service from scratch',
  //     'website with mobile app advantages',
  //     'zero-code solutions for startups',
  //   ],
  //   details: {
  //     price: 830,
  //     developmentTime: 'two weeks',
  //     rate: 37,
  //     exactPrice: 1020,
  //     additionalExpenses: 20,
  //   },
  //   remark:
  //     'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
  //   icon: <ComputerIcon />,
  // },
  {
    type: 'CGI',
    name: 'CGI',
    shortName: 'CGI',
    description: `we create CGI content, ranging from 3D still images to action-packed animations, offering versatile solutions to meet a wide range of needs`,
    services: [
      '3D computer graphics and animation',
      'preparation of 2D and 3D assets',
      'VFX',
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
    type: 'XR',
    name: 'XR',
    shortName: 'XR',
    // nameExplanation: '(aguamented reality)',
    description: `we create innovative solutions using AR, VR and MR technologies to help grow your business, provide effective employee training and increase your brand awareness`,
    services: [
      `VR - virtual reality`,
      `AR - augmented reality`,
      `MR - mixed reality`,
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
    icon: <Cube />,
  },
  {
    type: 'APP',
    name: 'APP',
    shortName: 'APP/',
    // nameExplanation: '(virtual reality)',
    description: `we design and develop applications tailored to the specific needs of your business, offering a comprehensive cycle of digital product development to ensure the delivery of solutions of any complexity.`,
    services: [
      'native apps for ios & android',
      'desktop apps for pc & mac',
      'standalone platforms',
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
    icon: <AppSVG />,
  },

  // {
  //   type: 'UXUI',
  //   name: 'UX/UI',
  //   shortName: 'UX/UI',
  //   description: `we specialize in crafting intuitive and visually appealing interfaces that enhance user experience. Let us help you create a seamless and engaging digital experience that keeps your customers coming back for more`,
  //   services: [
  //     `interface design development for
  //     mobile and web application`,
  //     `redesign and improve the user
  //     experience of your current sites`,
  //   ],
  //   details: {
  //     price: 830,
  //     developmentTime: 'two weeks',
  //     rate: 37,
  //     exactPrice: 1020,
  //     additionalExpenses: 20,
  //   },
  //   remark:
  //     'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
  //   icon: <UXUIIcon />,
  // },
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
  XR: <Glasses />,
  APP: <AppSVG />,
}
