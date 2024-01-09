import { Teammate } from './types'

const IMAGES_PATH = '/assets/images/team/'

export const team: Teammate[] = [
  {
    id: '1',
    name: 'TONY ANTONY',
    description: 'Это Наш pr smm',
    image: {
      main: {
        path: IMAGES_PATH,
        name: 'Egor_frontend_easy_cg_teammate',
        fileType: 'png',
        alt: 'Our teammate 1',
      },
      hidden: {
        path: IMAGES_PATH,
        name: 'Egor_frontend_easy_cg_teammate-evil',
        fileType: 'jpg',
        alt: '',
      },
    },
    date: new Date('2021-11-12'),
    position: 'seo',
  },
  {
    id: '2',
    name: 'Teammate2',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quam consequatur repudiandae, delectus tempore sequi molestiae itaque pariatur, ducimus dolores, repellendus a sed? Ab, magni optio vero minus incidunt perspiciatis!',
    image: {
      main: {
        path: IMAGES_PATH,
        name: 'Anton_owner_easy_cg_teammate',
        fileType: 'png',
        alt: 'Our teammate 2',
      },
      hidden: {
        path: IMAGES_PATH,
        name: 'Anton_owner_easy_cg_teammate-evil',
        fileType: 'png',
        alt: '',
      },
    },
    date: new Date('2021-11-12'),
    position: 'seo',
  },
  {
    id: '3',
    name: 'Teammate3',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quam consequatur repudiandae, delectus tempore sequi molestiae itaque pariatur, ducimus dolores, repellendus a sed? Ab, magni optio vero minus incidunt perspiciatis!',
    image: {
      main: {
        path: IMAGES_PATH,
        name: 'teammate',
        fileType: 'png',
        alt: 'Our teammate 3',
      },
      hidden: {
        path: IMAGES_PATH,
        name: 'teammate-evil',
        fileType: 'png',
        alt: '',
      },
    },
    date: new Date('2021-11-12'),
    position: 'seo',
  },
  // {
  //   id: '4',
  //   name: 'Teammate4',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quam consequatur repudiandae, delectus tempore sequi molestiae itaque pariatur, ducimus dolores, repellendus a sed? Ab, magni optio vero minus incidunt perspiciatis!',
  //   image: {
  //     main: {
  //       path: IMAGES_PATH,
  //       name: 'teammate',
  //       fileType: 'png',
  //       alt: 'Our teammate 4',
  //     },
  //     hidden: {
  //       path: IMAGES_PATH,
  //       name: 'teammate-evil',
  //       fileType: 'png',
  //       alt: '',
  //     },
  //   },
  //   date: new Date('2021-11-12'),
  //   position: 'seo',
  // },
  // {
  //   id: '5',
  //   name: 'Teammate4',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quam consequatur repudiandae, delectus tempore sequi molestiae itaque pariatur, ducimus dolores, repellendus a sed? Ab, magni optio vero minus incidunt perspiciatis!',
  //   image: {
  //     main: {
  //       path: IMAGES_PATH,
  //       name: 'teammate',
  //       fileType: 'png',
  //       alt: 'Our teammate 4',
  //     },
  //     hidden: {
  //       path: IMAGES_PATH,
  //       name: 'teammate-evil',
  //       fileType: 'png',
  //       alt: '',
  //     },
  //   },
  //   date: new Date('2021-11-12'),
  //   position: 'seo',
  // },
  // {
  //   id: '6',
  //   name: 'Teammate4',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quam consequatur repudiandae, delectus tempore sequi molestiae itaque pariatur, ducimus dolores, repellendus a sed? Ab, magni optio vero minus incidunt perspiciatis!',
  //   image: {
  //     main: {
  //       path: IMAGES_PATH,
  //       name: 'teammate',
  //       fileType: 'png',
  //       alt: 'Our teammate 4',
  //     },
  //     hidden: {
  //       path: IMAGES_PATH,
  //       name: 'teammate-evil',
  //       fileType: 'png',
  //       alt: '',
  //     },
  //   },
  //   date: new Date('2021-11-12'),
  //   position: 'seo',
  // },
]
