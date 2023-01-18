import { Article } from './types'

const IMAGES_PATH = '/assets/images/articles/'

export const articles: Article[] = [
  {
    id: '1',
    name: '10 UI/UX trends',
    description:
      '*name* likes playing XBOX and read digital news, just see, what’s a beautiful face',
    image: { path: IMAGES_PATH, name: 'article-1', fileType: 'jpg' },
    date: new Date('2021-11-12'),
    type: 'UI/UX design',
    detailPreviewImage: {
      path: IMAGES_PATH,
      name: 'article-1',
      fileType: 'jpg',
    },
    remark: [
      'something you shold know about new trends',
      'but not always follow',
    ],
  },
  {
    id: '2',
    name: '10 UI/UX trends',
    description:
      '*name* likes playing XBOX and read digital news, just see, what’s a beautiful face',
    image: { path: IMAGES_PATH, name: 'article-1', fileType: 'jpg' },
    date: new Date('2021-11-12'),
    type: 'UI/UX design',
    detailPreviewImage: {
      path: IMAGES_PATH,
      name: 'article-1',
      fileType: 'jpg',
    },
    remark: [
      'something you shold know about new trends',
      'but not always follow',
    ],
  },
  {
    id: '3',
    name: '10 UI/UX trends',
    description:
      '*name* likes playing XBOX and read digital news, just see, what’s a beautiful face',
    image: { path: IMAGES_PATH, name: 'article-1', fileType: 'jpg' },
    date: new Date('2021-11-12'),
    type: 'UI/UX design',
    detailPreviewImage: {
      path: IMAGES_PATH,
      name: 'article-1',
      fileType: 'jpg',
    },
    remark: [
      'something you shold know about new trends',
      'but not always follow',
    ],
  },
  {
    id: '4',
    name: '10 UI/UX trends',
    description:
      '*name* likes playing XBOX and read digital news, just see, what’s a beautiful face',
    image: { path: IMAGES_PATH, name: 'article-1', fileType: 'jpg' },
    date: new Date('2021-11-12'),
    type: 'UI/UX design',
    detailPreviewImage: {
      path: IMAGES_PATH,
      name: 'article-1',
      fileType: 'jpg',
    },
    remark: [
      'something you shold know about new trends',
      'but not always follow',
    ],
  },
]
