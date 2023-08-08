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
    description: `stay connected to your customers and employees with a customized mobile app. whether it's a store, service, or entertainment app, you choose the features and we make it happen`,
    services: [
      'native apps for ios & android',
      'zero code solutions for startups',
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
    description: `looking to establish a strong online presence? our web development services can help you create a website that stands out, with intuitive navigation, responsive design, and seamless functionality`,
    services: [
      'high-traffic website or service from scratch',
      'website with mobile app advantages',
      'zero-code solutions for startups',
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
    description: `We specialize in creating captivating CGI content that brings ideas to life, from stunning movie visual effects to immersive video game experiences`,
    services: [
      '3D computer graphics and animation',
      'VFX',
      'preparation of 2D and 3D assets',
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
    description: `We create custom AR solutions that captivate audiences, bring products to life, and drive sales. Elevate your brand with our cutting-edge technology`,
    services: [
      `we develop AR of any complexity: from image 
      and object tracking to gesture recognition and 
      terrain navigator`,
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
    description: `experience a new level of immersion with our VR services. From training simulations to engaging entertainment, we create customized VR solutions that engage and delight users`,
    services: [
      'virtual tour or interactive VR',
      'training simulator (rehabilitation systems)',
      'VR Showcase // NFT Gallery',
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
    name: 'UX/UI',
    shortName: 'UX/UI',
    description: `we specialize in crafting intuitive and visually appealing interfaces that enhance user experience. Let us help you create a seamless and engaging digital experience that keeps your customers coming back for more`,
    services: [
      `interface design development for 
      mobile and web application`,
      `redesign and improve the user 
      experience of your current sites`,
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
