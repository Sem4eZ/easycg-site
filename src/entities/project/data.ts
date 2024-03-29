import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { db } from 'shared/firebase'

import { Project } from './types'

const useProjects = () => {
  const [projectsAll, setProjects] = useState<Project[]>([])

  const fetchData = async () => {
    const snapshot = await getDocs(collection(db, 'projects'))
    const projectsData = snapshot.docs
      .map(doc => ({
        id: doc.id,
        ...doc.data(),
        visible: doc.data().visible,
      }))
      .filter(project => project.visible)
    setProjects(projectsData as Project[])
  }

  useEffect(() => {
    fetchData()
  }, [])

  return projectsAll
}

export default useProjects

// {
//   id: '1',
//   name: 'Название проекта',
//   titleDescription: 'bvzjgd',
//   description:
//     'описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1описание нашего проекта 1',
//   image: {
//     path: IMAGES_PATH,
//     name: 'card2',
//     fileType: 'jpg',
//     alt: 'smartphone on table',
//   },
//   date: new Date('2021-11-12'),
//   servicesType: ['mobile', 'web', 'AR'],
//   type: 'Тип нашего проекта',
//   titleAbout: 'erberb',
//   about:
//     'эбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проектеэбаут о нашем проекте',
//   details: {
//     price: 830,
//     developmentTime: 'two weeks',
//     rate: 37,
//     exactPrice: 1020,
//     additionalExpenses: 20,
//   },
//   detailsRemark: 'детаилс ремарк проекта',
//   picturesRemark: [
//     'приктурес ремарк проекта for delivery. Also it was about branding and positioning.',
//     'before we start we made research',
//   ],
//   detailPreview: '32r233232',

//   // carousel: [
//   //   { path: IMAGES_PATH, name: '1', fileType: 'png', alt: '' },
//   //   { path: IMAGES_PATH, name: '2', fileType: 'png', alt: '' },
//   //   { path: IMAGES_PATH, name: '3', fileType: 'png', alt: '' },
//   //   { path: IMAGES_PATH, name: '4', fileType: 'png', alt: '' },
//   //   { path: IMAGES_PATH, name: '5', fileType: 'png', alt: '' },
//   //   { path: IMAGES_PATH, name: '6', fileType: 'png', alt: '' },
//   // ],
//   tags: ['mobile'],
// },
// {
//   id: '2',
// },
// {
//   id: '2',
//   name: 'Project2',
//   description:
//     'описание нашего проекта 2 длинное описание капец какое длинное очень',
//   image: {
//     path: IMAGES_PATH,
//     name: 'card2',
//     fileType: 'jpg',
//     alt: 'smartphone on table',
//   },
//   date: new Date('2021-11-12'),
//   servicesType: ['mobile', 'web'],
//   type: 'Mobile delivery app',
//   about: 'it’s about a food delivery',
//   details: {
//     price: 830,
//     developmentTime: 'two weeks',
//     rate: 37,
//     exactPrice: 1020,
//     additionalExpenses: 20,
//   },
//   detailsRemark:
//     'publishing at the App Store (99 $/year) and Play Market (25 $/year)',
//   picturesRemark: [
//     'our goal was to create mobile app for delivery. Also it was about branding and positioning.',
//     'before we start we made research',
//   ],
//   detailPreview: {
//     type: 'image',
//     image: {
//       path: IMAGES_PATH,
//       name: 'detail_preview',
//       fileType: 'png',
//       alt: 'mobile delivery app mockup',
//     },
//   },
//   link: {
//     type: 'site',
//     url: 'https://google.com/',
//   },
//   carousel: [
//     { path: IMAGES_PATH, name: '1', fileType: 'png', alt: '' },
//     { path: IMAGES_PATH, name: '2', fileType: 'png', alt: '' },
//     { path: IMAGES_PATH, name: '3', fileType: 'png', alt: '' },
//     { path: IMAGES_PATH, name: '4', fileType: 'png', alt: '' },
//     { path: IMAGES_PATH, name: '5', fileType: 'png', alt: '' },
//     { path: IMAGES_PATH, name: '6', fileType: 'png', alt: '' },
//   ],
//   tags: ['web', 'mobile'],
// },
// ]

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

// export const getPreviousProject = (id: Project['id']): Project => {
//   let currentProjectId = 0
//   for (let i = 0; i < projects.length; i++) {
//     const project = projects[i]
//     if (project.id === id) {
//       currentProjectId = i
//     }
//   }

//   if (currentProjectId === 0) return projects[projects.length - 1]
//   return projects[currentProjectId - 1]
// }

// export const getNextProject = (id: Project['id']): Project => {
//   let currentProjectId = 0
//   for (let i = 0; i < projects.length; i++) {
//     const project = projects[i]
//     if (project.id === id) {
//       currentProjectId = i
//     }
//   }

//   if (currentProjectId === projects.length - 1) return projects[0]
//   return projects[currentProjectId + 1]
// }
