import { Project } from './types'

const IMAGES_PATH = '/assets/images/projects/'
const VIDEOS_PATH = '/assets/videos/projects/'

export const projects: Project[] = [
  {
    id: '1',
    name: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quam consequatur repudiandae, delectus tempore sequi molestiae itaque pariatur, ducimus dolores, repellendus a sed? Ab, magni optio vero minus incidunt perspiciatis!',
    image: {
      path: IMAGES_PATH,
      name: 'card',
      fileType: 'jpg',
      alt: 'smartphone on table',
    },
    date: new Date('2021-11-12'),
    servicesType: ['mobile', 'web'],
    type: 'Mobile delivery app',
    about: 'it’s about a food delivery',
    details: {
      price: 830,
      developmentTime: 'two weeks',
      rate: 37,
      exactPrice: 1020,
      additionalExpenses: 20,
    },
    detailsRemark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    picturesRemark: [
      'our goal was to create mobile app for delivery. Also it was about branding and positioning.',
      'before we start we made research',
    ],
    detailPreview: {
      type: 'image',
      image: {
        path: IMAGES_PATH,
        name: 'detail_preview',
        fileType: 'png',
        alt: 'mobile delivery app mockup',
      },
    },
    link: {
      type: 'app',
      url: 'https://play.google.com/store/games',
    },
    carousel: [
      { path: IMAGES_PATH, name: '1', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '2', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '3', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '4', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '5', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '6', fileType: 'png', alt: '' },
    ],
    tags: ['web', 'mobile'],
  },
  {
    id: '2',
    name: 'Project2',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quam consequatur repudiandae, delectus tempore sequi molestiae itaque pariatur, ducimus dolores, repellendus a sed? Ab, magni optio vero minus incidunt perspiciatis!',
    image: {
      path: IMAGES_PATH,
      name: 'card2',
      fileType: 'jpg',
      alt: 'smartphone on table',
    },
    date: new Date('2021-11-12'),
    servicesType: ['mobile', 'web'],
    type: 'Mobile delivery app',
    about: 'it’s about a food delivery',
    details: {
      price: 830,
      developmentTime: 'two weeks',
      rate: 37,
      exactPrice: 1020,
      additionalExpenses: 20,
    },
    detailsRemark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    picturesRemark: [
      'our goal was to create mobile app for delivery. Also it was about branding and positioning.',
      'before we start we made research',
    ],
    detailPreview: {
      type: 'image',
      image: {
        path: IMAGES_PATH,
        name: 'detail_preview',
        fileType: 'png',
        alt: 'mobile delivery app mockup',
      },
    },
    link: {
      type: 'site',
      url: 'https://google.com/',
    },
    carousel: [
      { path: IMAGES_PATH, name: '1', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '2', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '3', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '4', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '5', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '6', fileType: 'png', alt: '' },
    ],
    tags: ['web', 'mobile'],
  },
  {
    id: '3',
    name: 'Project3',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quam consequatur repudiandae, delectus tempore sequi molestiae itaque pariatur, ducimus dolores, repellendus a sed? Ab, magni optio vero minus incidunt perspiciatis!',
    image: {
      path: IMAGES_PATH,
      name: 'card',
      fileType: 'jpg',
      alt: 'smartphone on table',
    },
    date: new Date('2021-11-12'),
    servicesType: ['mobile'],
    type: 'Mobile delivery app',
    about: 'it’s about a food delivery',
    details: {
      price: 830,
      developmentTime: 'two weeks',
      rate: 37,
      exactPrice: 1020,
      additionalExpenses: 20,
    },
    detailsRemark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    picturesRemark: [
      'our goal was to create mobile app for delivery. Also it was about branding and positioning.',
      'before we start we made research',
    ],
    detailPreview: {
      type: 'image',
      image: {
        path: IMAGES_PATH,
        name: 'detail_preview',
        fileType: 'png',
        alt: 'mobile delivery app mockup',
      },
    },
    link: {
      type: 'app',
      url: 'https://play.google.com/store/games',
    },
    carousel: [
      { path: IMAGES_PATH, name: '1', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '2', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '3', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '4', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '5', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '6', fileType: 'png', alt: '' },
    ],
    tags: ['mobile', 'food'],
  },
  {
    id: '4',
    name: 'Project4',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quam consequatur repudiandae, delectus tempore sequi molestiae itaque pariatur, ducimus dolores, repellendus a sed? Ab, magni optio vero minus incidunt perspiciatis!',
    image: {
      path: IMAGES_PATH,
      name: 'card',
      fileType: 'jpg',
      alt: 'smartphone on table',
    },
    date: new Date('2021-11-12'),
    servicesType: ['mobile'],
    type: 'Mobile delivery app',
    about: 'it’s about a food delivery',
    details: {
      price: 830,
      developmentTime: 'two weeks',
      rate: 37,
      exactPrice: 1020,
      additionalExpenses: 20,
    },
    detailsRemark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    picturesRemark: [
      'our goal was to create mobile app for delivery. Also it was about branding and positioning.',
      'before we start we made research',
    ],
    detailPreview: {
      type: 'image',
      image: {
        path: IMAGES_PATH,
        name: 'detail_preview',
        fileType: 'png',
        alt: 'mobile delivery app mockup',
      },
    },
    link: {
      type: 'app',
      url: 'https://play.google.com/store/games',
    },
    carousel: [
      { path: IMAGES_PATH, name: '1', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '2', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '3', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '4', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '5', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '6', fileType: 'png', alt: '' },
    ],
    tags: ['mobile'],
  },
  {
    id: '5',
    name: 'Project4',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quam consequatur repudiandae, delectus tempore sequi molestiae itaque pariatur, ducimus dolores, repellendus a sed? Ab, magni optio vero minus incidunt perspiciatis!',
    image: {
      path: IMAGES_PATH,
      name: 'card',
      fileType: 'jpg',
      alt: 'smartphone on table',
    },
    date: new Date('2021-11-12'),
    servicesType: ['mobile'],
    type: 'Mobile delivery app',
    about: 'it’s about a food delivery',
    details: {
      price: 830,
      developmentTime: 'two weeks',
      rate: 37,
      exactPrice: 1020,
      additionalExpenses: 20,
    },
    detailsRemark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    picturesRemark: [
      'our goal was to create mobile app for delivery. Also it was about branding and positioning.',
      'before we start we made research',
    ],
    detailPreview: {
      type: 'image',
      image: {
        path: IMAGES_PATH,
        name: 'detail_preview',
        fileType: 'png',
        alt: 'mobile delivery app mockup',
      },
    },
    link: {
      type: 'app',
      url: 'https://play.google.com/store/games',
    },
    carousel: [
      { path: IMAGES_PATH, name: '1', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '2', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '3', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '4', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '5', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '6', fileType: 'png', alt: '' },
    ],
    tags: ['mobile'],
  },
  {
    id: '6',
    name: 'Project4',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quam consequatur repudiandae, delectus tempore sequi molestiae itaque pariatur, ducimus dolores, repellendus a sed? Ab, magni optio vero minus incidunt perspiciatis!',
    image: {
      path: IMAGES_PATH,
      name: 'card',
      fileType: 'jpg',
      alt: 'smartphone on table',
    },
    date: new Date('2021-11-12'),
    servicesType: ['CGI'],
    type: 'Mobile delivery app',
    about: 'it’s about a food delivery',
    details: {
      price: 830,
      developmentTime: 'two weeks',
      rate: 37,
      exactPrice: 1020,
      additionalExpenses: 20,
    },
    detailsRemark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    picturesRemark: [
      'our goal was to create mobile app for delivery. Also it was about branding and positioning.',
      'before we start we made research',
    ],
    detailPreview: {
      type: 'video',
      url: `${VIDEOS_PATH}/detail_preview.webm`,
    },
    link: {
      type: 'video',
      url: 'https://www.youtube.com/',
    },
    carousel: [
      { path: IMAGES_PATH, name: '1', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '2', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '3', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '4', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '5', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '6', fileType: 'png', alt: '' },
    ],
    tags: ['mobile', 'clothes'],
  },
  {
    id: '7',
    name: 'Project5',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    image: {
      path: IMAGES_PATH,
      name: 'card',
      fileType: 'jpg',
      alt: 'smartphone on table',
    },
    date: new Date('2021-11-12'),
    servicesType: ['CGI'],
    type: 'Mobile delivery app',
    about: 'it’s about a food delivery',
    details: {
      price: 830,
      developmentTime: 'two weeks',
      rate: 37,
      exactPrice: 1020,
      additionalExpenses: 20,
    },
    detailsRemark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    picturesRemark: [
      'our goal was to create mobile app for delivery. Also it was about branding and positioning.',
      'before we start we made research',
    ],
    detailPreview: {
      type: 'video',
      url: `${VIDEOS_PATH}/detail_preview.webm`,
    },
    link: {
      type: 'video',
      url: 'https://www.youtube.com/',
    },
    carousel: [
      { path: IMAGES_PATH, name: '1', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '2', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '3', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '4', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '5', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '6', fileType: 'png', alt: '' },
    ],
    tags: ['web', 'mobile'],
  },
  {
    id: '8',
    name: 'Project6',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quam consequatur repudiandae, delectus tempore sequi molestiae itaque pariatur, ducimus dolores, repellendus a sed? Ab, magni optio vero minus incidunt perspiciatis!',
    image: {
      path: IMAGES_PATH,
      name: 'card',
      fileType: 'jpg',
      alt: 'smartphone on table',
    },
    date: new Date('2021-11-12'),
    servicesType: ['AR'],
    type: 'Mobile delivery app',
    about: 'it’s about a food delivery',
    details: {
      price: 830,
      developmentTime: 'two weeks',
      rate: 37,
      exactPrice: 1020,
      additionalExpenses: 20,
    },
    detailsRemark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    picturesRemark: [
      'our goal was to create mobile app for delivery. Also it was about branding and positioning.',
      'before we start we made research',
    ],
    detailPreview: {
      type: 'video',
      url: `${VIDEOS_PATH}/detail_preview.webm`,
    },
    link: {
      type: 'video',
      url: 'https://www.youtube.com/',
    },
    carousel: [
      { path: IMAGES_PATH, name: '1', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '2', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '3', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '4', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '5', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '6', fileType: 'png', alt: '' },
    ],
    tags: ['web', 'clothes'],
  },
  {
    id: '9',
    name: 'Project4',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quam consequatur repudiandae, delectus tempore sequi molestiae itaque pariatur, ducimus dolores, repellendus a sed? Ab, magni optio vero minus incidunt perspiciatis!',
    image: {
      path: IMAGES_PATH,
      name: 'card',
      fileType: 'jpg',
      alt: 'smartphone on table',
    },
    date: new Date('2021-11-12'),
    servicesType: ['mobile'],
    type: 'Mobile delivery app',
    about: 'it’s about a food delivery',
    details: {
      price: 830,
      developmentTime: 'two weeks',
      rate: 37,
      exactPrice: 1020,
      additionalExpenses: 20,
    },
    detailsRemark:
      'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
    picturesRemark: [
      'our goal was to create mobile app for delivery. Also it was about branding and positioning.',
      'before we start we made research',
    ],
    detailPreview: {
      type: 'video',
      url: `${VIDEOS_PATH}/detail_preview.webm`,
    },
    link: {
      type: 'app',
      url: 'https://play.google.com/store/games',
    },
    carousel: [
      { path: IMAGES_PATH, name: '1', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '2', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '3', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '4', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '5', fileType: 'png', alt: '' },
      { path: IMAGES_PATH, name: '6', fileType: 'png', alt: '' },
    ],
    tags: ['web'],
  },
]

export const projectDetailsToPricesBlockItems = (
  projectDetails: Project['details'],
) => {
  const money = ['price', 'rate', 'exactPrice', 'additionalExpenses']
  const details = Object.entries(projectDetails)
  return details.map(detail => ({
    name: detail[0],
    value: money.includes(detail[0]) ? `${detail[1]} $` : detail[1],
  }))
}

export const getPreviousProject = (id: Project['id']): Project => {
  let currentProjectId = 0
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i]
    if (project.id === id) {
      currentProjectId = i
    }
  }

  if (currentProjectId === 0) return projects[projects.length - 1]
  return projects[currentProjectId - 1]
}

export const getNextProject = (id: Project['id']): Project => {
  let currentProjectId = 0
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i]
    if (project.id === id) {
      currentProjectId = i
    }
  }

  if (currentProjectId === projects.length - 1) return projects[0]
  return projects[currentProjectId + 1]
}
