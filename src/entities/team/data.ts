import { Teammate } from './types'

const IMAGES_PATH = '/assets/images/team/'

export const team: Teammate[] = [
  {
    id: '1',
    name: 'Anton Khanyakin',
    description: `long-term cooperation is the result of mutual responsibility. we strive to be reliable partners, providing effective solutions and support at every stage of cooperation`,
    image: {
      main: {
        path: `${IMAGES_PATH}`,
        name: 'teammate_anton3',
        fileType: 'jpg',
        alt: 'Our teammate 1',
      },
      hidden: {
        path: `${IMAGES_PATH}`,
        name: 'teammate_anton-evil',
        fileType: 'png',
        alt: '',
      },
    },
    date: new Date('2018'),
    position: 'founder, CEO',
  },
  // {
  //   id: '2',
  //   name: 'egor galembo',
  //   description: `an important aspect in development is crafting interfaces that provide users with the best experience`,
  //   image: {
  //     main: {
  //       path: IMAGES_PATH + 'Egor_frontend_easy_cg_',
  //       name: 'teammate',
  //       fileType: 'png',
  //       alt: 'Our teammate 2',
  //     },
  //     hidden: {
  //       path: IMAGES_PATH + 'Egor_frontend_easy_cg_',
  //       name: 'teammate-evil',
  //       fileType: 'jpg',
  //       alt: '',
  //     },
  //   },
  //   date: new Date('2019'),
  //   position: 'teamlead',
  // },
  // {
  //   id: '3',
  //   name: 'tanya makarova',
  //   description:
  //     'my goal is to ensure effective project management by achieving set objectives within the budget and timeline',
  //   image: {
  //     main: {
  //       path: IMAGES_PATH + 'Tatiana_project_manager_easy_cg_',
  //       name: 'teammate',
  //       fileType: 'png',
  //       alt: 'Our teammate 3',
  //     },
  //     hidden: {
  //       path: IMAGES_PATH + 'Tatiana_project_manager_easy_cg_',
  //       name: 'teammate-evil',
  //       fileType: 'jpg',
  //       alt: '',
  //     },
  //   },
  //   date: new Date('2021'),
  //   position: 'pm',
  // },
  // {
  //   id: '4',
  //   name: 'garry shikhov',
  //   description:
  //     'for me, the primary focus is creative expression and conveying ideas through visual art',
  //   image: {
  //     main: {
  //       path: IMAGES_PATH + 'Garry_frayo_mes_easy_cg_',
  //       name: 'teammate',
  //       fileType: 'png',
  //       alt: 'Our teammate 4',
  //     },
  //     hidden: {
  //       path: IMAGES_PATH + 'Garry_frayo_mes_easy_cg_',
  //       name: 'teammate-evil',
  //       fileType: 'jpg',
  //       alt: '',
  //     },
  //   },
  //   date: new Date('2020'),
  //   position: '3d artist',
  // },
  // {
  //   id: '6',
  //   name: 'tony zholba',
  //   description:
  //     'effective process management and communication with the target audience are key factors in achieving project success',
  //   image: {
  //     main: {
  //       path: IMAGES_PATH + 'Tony_Zhoba_easy_cg_',
  //       name: 'teammate',
  //       fileType: 'png',
  //       alt: 'Our teammate 4',
  //     },
  //     hidden: {
  //       path: IMAGES_PATH + 'Tony_Zhoba_easy_cg_',
  //       name: 'teammate-evil',
  //       fileType: 'jpg',
  //       alt: '',
  //     },
  //   },
  //   date: new Date('2020'),
  //   position: 'pm, smm',
  // },
]
