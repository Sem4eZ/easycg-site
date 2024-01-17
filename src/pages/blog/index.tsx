import { styled } from '@mui/material/styles'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { ArticleCard } from 'entities/article/ui/article-card'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { maxWidth, spaceArr } from 'shared/theme'
import { TextOutlined } from 'shared/ui/outlined-text'
import { Page } from 'shared/ui/page-templates'

import { db } from '../../shared/firebase'

interface Post {
  id: string
  name: string
  image: string
  date: string
  description: string
  type: string
  visible: boolean
}

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchData = async () => {
    const snapshot = await getDocs(collection(db, 'posts'))
    const postsData = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Post[] // Cast the result to Post[]

    setPosts(postsData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Page
      title="blog."
      decorationText={
        <TextOutlined viewBoxWidth={806} type="header">
          05
        </TextOutlined>
      }>
      <Content>
        {posts
          .filter(article => article.visible) // Filter based on the 'visible' property
          .map((article: any) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              name={article.name}
              image={article.image}
              date={article.date}
              description={article.description}
              type={article.type}
            />
          ))}
      </Content>
    </Page>
  )
}

export default BlogPage

const Content = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'grid',
  justifyContent: 'space-between',
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      null,
      null,
      null,
      '1fr 1fr',
      null,
      '640px 640px',
      '720px 720px',
    ],
    gridColumnGap: [0, null, null, null, null, null, 164, null, 224, 256],
    gridRowGap: [128, 104, 120, null, 187, 280, 178, null, 130],
    marginTop: [116, 92, 95, 72, 197, null, 220, 325, 347],
    marginBottom: [134, 94, 167, 134, 38, 221, 114, null, 154, 240],
  }),
}))
