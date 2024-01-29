// App.js
import { Container } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css'
import DOMPurify from 'dompurify'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore'
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import moment from 'moment'
import 'quill/dist/quill.snow.css'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import { useQuill } from 'react-quilljs'
import { NavLink } from 'react-router-dom'

import { db } from '../../shared/firebase'

export function truncateString(inputString: string, maxLength: number) {
  if (inputString.length > maxLength) {
    return inputString.substring(0, maxLength) + '...'
  }
  return inputString
}

interface Post {
  id: string
  name: string
  content: string
  description: string
  image: string
  type: string
  detailPreviewImage: string
  remark: string
  date: string
  visible: boolean
}

function Posts() {
  const [posts, setPosts] = useState<Post[]>([])
  // create post
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [type, setType] = useState('')
  const [detailPreviewImage, setDetailPreviewImage] = useState('')
  const [remark, setRemark] = useState('')

  const [newName, setNewName] = useState('')
  const [newContent, setNewContent] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newImage, setNewImage] = useState('')
  const [newType, setNewType] = useState('')
  const [newDetailPreviewImage, setNewDetailPreviewImage] = useState('')
  const [newRemark, setNewRemark] = useState('')
  const [createPostModalOpen, setCreatePostModalOpen] = useState(false)
  const { quill, quillRef } = useQuill()
  const { quill: newQuill, quillRef: newContentQuillRef } = useQuill()
  const [isUpdating, setIsUpdating] = useState(false) // Добавим новое состояние

  const [selectedPost, setSelectedPost] = useState<any>(null)

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedDetailPreviewFile, setSelectedDetailPreviewFile] =
    useState<File | null>(null)
  const [newSelectedFile, setNewSelectedFile] = useState<File | null>(null)
  const [newSelectedDetailPreviewFile, setNewSelectedDetailPreviewFile] =
    useState<File | null>(null)

  const [buttonVariants, setButtonVariants] = useState<{
    [key: string]: string
  }>({})

  const fetchData = async () => {
    try {
      const snapshot = await getDocs(
        query(collection(db, 'posts'), orderBy('date', 'desc')),
      )

      const postsData = snapshot.docs.map(
        doc =>
          ({
            id: doc.id,
            ...doc.data(),
            visible: doc.data().visible,
          } as { id: string; visible: boolean }),
      )

      setPosts(postsData as any)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  React.useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta: any, oldDelta: any, source: any) => {
        setContent(quill.root.innerHTML)
      })
    }
  }, [quill])

  React.useEffect(() => {
    if (newQuill) {
      newQuill.on('text-change', (delta: any, oldDelta: any, source: any) => {
        setNewContent(newQuill.root.innerHTML)
      })
    }
  }, [newQuill])

  const handleImageUpload = async () => {
    try {
      if (!selectedFile) {
        alert('Выберите изображение для загрузки')
        return
      }

      console.log('Selected File:', selectedFile)

      const storage = getStorage()
      const storageRef = ref(storage, 'images/articles/' + selectedFile.name)
      console.log('Storage Reference:', storageRef)

      const uploadTask = uploadBytesResumable(storageRef, selectedFile)

      uploadTask.on(
        'state_changed',
        snapshot => {
          console.log(
            'Upload Progress:',
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100 + '%',
          )
        },
        (error: any) => {
          console.error('Ошибка при загрузке изображения:', error)
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
          console.log('Download URL:', downloadURL)

          setImage(downloadURL)
          setButtonVariants(prevVariants => ({
            ...prevVariants,
            img: 'success',
          }))
        },
      )
    } catch (error) {
      console.error('Ошибка при загрузке изображения:', error)
    }
  }
  const handleDetailPreviewImageUpload = async () => {
    try {
      if (!selectedDetailPreviewFile) {
        alert('Выберите изображение для загрузки')
        return
      }

      const storage = getStorage()
      const storageRef = ref(
        storage,
        'images/detailPreviews/' + selectedDetailPreviewFile.name,
      )
      console.log('Storage Reference:', storageRef)

      const uploadTask = uploadBytesResumable(
        storageRef,
        selectedDetailPreviewFile,
      )

      uploadTask.on(
        'state_changed',
        snapshot => {
          console.log(
            'Upload Progress:',
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100 + '%',
          )
        },
        (error: any) => {
          console.error('Ошибка при загрузке изображения:', error)
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
          console.log('Download URL:', downloadURL)

          setDetailPreviewImage(downloadURL)
          setButtonVariants(prevVariants => ({
            ...prevVariants,
            detailPreviewImage: 'success',
          }))
        },
      )
    } catch (error) {
      console.error('Ошибка при загрузке изображения:', error)
    }
  }

  const handleNewImageUpload = async () => {
    try {
      if (!newSelectedFile) {
        alert('Выберите изображение для загрузки')
        return
      }

      const storage = getStorage()
      const storageRef = ref(storage, 'images/articles/' + newSelectedFile.name)

      const uploadTask = uploadBytesResumable(storageRef, newSelectedFile)

      uploadTask.on(
        'state_changed',
        snapshot => {
          console.log(
            'Detail Preview Image Upload Progress:',
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100 + '%',
          )
        },
        (error: any) => {
          console.error('Ошибка при загрузке изображения внутри поста:', error)
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)

          setNewImage(downloadURL)
          setButtonVariants(prevVariants => ({
            ...prevVariants,
            newimg: 'success',
          }))
        },
      )
    } catch (error) {
      console.error('Ошибка при загрузке изображения внутри поста:', error)
    }
  }

  const handleNewDetailPreviewImageUpload = async () => {
    try {
      if (!newSelectedDetailPreviewFile) {
        alert('Выберите изображение для загрузки')
        return
      }

      const storage = getStorage()
      const storageRef = ref(
        storage,
        'images/detailPreviews/' + newSelectedDetailPreviewFile.name,
      )

      const uploadTask = uploadBytesResumable(
        storageRef,
        newSelectedDetailPreviewFile,
      )

      uploadTask.on(
        'state_changed',
        snapshot => {
          console.log(
            'Detail Preview Image Upload Progress:',
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100 + '%',
          )
        },
        (error: any) => {
          console.error('Ошибка при загрузке изображения внутри поста:', error)
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)

          setNewDetailPreviewImage(downloadURL)
          setButtonVariants(prevVariants => ({
            ...prevVariants,
            newdetailpreviewimage: 'success',
          }))
        },
      )
    } catch (error) {
      console.error('Ошибка при загрузке изображения внутри поста:', error)
    }
  }

  const handleClose = () => {
    setCreatePostModalOpen(false)
  }

  const handleCreatePost = async (newPost: any) => {
    if (
      !newPost.name ||
      !newPost.description ||
      // !newPost.image ||
      !newPost.type ||
      // !newPost.detailPreviewImage ||
      !newPost.remark ||
      !newPost.content
    ) {
      alert('Все поля должны быть заполнены')
      return
    }

    const sanitizedContent = DOMPurify.sanitize(newPost.content)

    await addDoc(collection(db, 'posts'), {
      ...newPost,
      content: sanitizedContent,
      date: new Date().toISOString(),
      visible: true, // Добавьте поле visible с значением true
    })
    await fetchData()

    // Сброс значений полей формы
    setContent('')
    setName('')
    setDescription('')
    setImage('')
    setType('')
    setDetailPreviewImage('')
    setRemark('')

    // Закрытие модального окна
    handleClose()
  }

  const onNewPost = async () => {
    await handleCreatePost({
      content: content,
      name: name,
      image,
      remark,
      description,
      type,
      detailPreviewImage,
    })
    handleClose()
  }

  const deletePost = async (id: string) => {
    await deleteDoc(doc(db, 'posts', id))
    await fetchData()
  }

  const updatePost = async (id: string, newPostData: any) => {
    await updateDoc(doc(db, 'posts', id), newPostData)
    await fetchData()
  }

  const updatePostVisibility = async (id: string, isVisible: boolean) => {
    try {
      setIsUpdating(true)
      // console.log(
      //   `Updating visibility for post with ID ${id} to ${
      //     isVisible ? 'visible' : 'hidden'
      //   }`,
      // )

      await updateDoc(doc(db, 'posts', id), {
        visible: isVisible,
      })

      // Update local state
      setPosts(prevPosts => {
        return prevPosts.map(post =>
          post.id === id ? { ...post, visible: isVisible } : post,
        )
      })
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <Container maxWidth={'md' as any} style={{ marginTop: 20 }}>
      <NavLink to="/admin/posts">
        <Button variant="primary" style={{ marginRight: 20 }}>
          Статьи
        </Button>
      </NavLink>
      <NavLink to="/admin/projects">
        <Button variant="primary">Проекты</Button>
      </NavLink>
      <br></br>
      <Button
        variant="primary"
        style={{ margin: 20 }}
        onClick={() => setCreatePostModalOpen(true)}>
        Создать статью
      </Button>

      <Modal show={createPostModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Новая статья</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="name">Заголовок статьи</Form.Label>
          <Form.Control
            className="mb-3"
            type="text"
            id="name"
            aria-describedby="name"
            value={name}
            onInput={event => {
              setName((event.target as any).value!)
            }}
            required
          />

          <Form.Label htmlFor="description">
            Подзаголовок статьи в каталоге
          </Form.Label>
          <Form.Control
            className="my-2"
            type="text"
            id="description"
            aria-describedby="description"
            value={description}
            onInput={event => {
              setDescription((event.target as any).value!)
            }}
            required
          />

          <Form.Label htmlFor="img">Обложка статьи в катологе</Form.Label>
          <Form.Control
            className="my-2"
            type="file"
            id="img"
            aria-describedby="img"
            onChange={event =>
              setSelectedFile(
                (event.target as HTMLInputElement).files?.[0] || null,
              )
            }
            accept="image/*"
          />
          {selectedFile && (
            <>
              <Button
                variant={buttonVariants['img'] || 'primary'}
                onClick={handleImageUpload}>
                Загрузить изображение
              </Button>
              <br />
            </>
          )}

          <Form.Label htmlFor="type">Тип статьи</Form.Label>
          <Form.Control
            className="my-2"
            type="text"
            id="type"
            aria-describedby="type"
            value={type}
            onInput={event => {
              setType((event.target as any).value!)
            }}
            required
          />

          <Form.Label htmlFor="detailPreviewImage">
            Изображение в карточке статьи
          </Form.Label>
          <Form.Control
            className="my-2"
            type="file"
            id="detailPreviewImage"
            aria-describedby="detailPreviewImage"
            onChange={event =>
              setSelectedDetailPreviewFile(
                (event.target as HTMLInputElement).files?.[0] || null,
              )
            }
            accept="image/*"
            required
          />
          {selectedDetailPreviewFile && (
            <>
              <Button
                variant={buttonVariants['detailPreviewImage'] || 'primary'}
                onClick={handleDetailPreviewImageUpload}>
                Загрузить изображение
              </Button>
              <br />
            </>
          )}

          <Form.Label htmlFor="remark">
            Подзаголовок в карточке статьи
          </Form.Label>
          <Form.Control
            className="my-2"
            type="text"
            id="remark"
            aria-describedby="remark"
            value={remark}
            onInput={event => {
              setRemark((event.target as any).value!)
            }}
            required
          />

          <div ref={quillRef} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onNewPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={!!selectedPost} onHide={() => setSelectedPost(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Редактирование статьи</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="title">New Название статьи</Form.Label>
          <Form.Control
            className="mb-3"
            type="text"
            id="title"
            aria-describedby="title"
            value={newName}
            onInput={event => {
              setNewName((event.target as any).value!)
            }}
          />

          <Form.Label htmlFor="desc">
            New Подзаголовок статьи в каталоге
          </Form.Label>
          <Form.Control
            className="my-3"
            type="text"
            id="desc"
            aria-describedby="desc"
            value={newDescription}
            onInput={event => {
              setNewDescription((event.target as any).value!)
            }}
          />

          <Form.Label htmlFor="newimg">
            New Обложка статьи в каталоге
          </Form.Label>
          <Form.Control
            className="my-3"
            type="file"
            id="newimg"
            aria-describedby="newimg"
            onChange={event =>
              setNewSelectedFile(
                (event.target as HTMLInputElement).files?.[0] || null,
              )
            }
            accept="image/*"
          />
          {newSelectedFile && (
            <>
              <Button
                variant={buttonVariants['newimg'] || 'primary'}
                onClick={handleNewImageUpload}>
                Загрузить изображение
              </Button>
              <br />
            </>
          )}

          <Form.Label htmlFor="newtype">New Тип статьи</Form.Label>
          <Form.Control
            className="my-3"
            type="text"
            id="newtype"
            aria-describedby="newtype"
            value={newType}
            onInput={event => {
              setNewType((event.target as any).value!)
            }}
          />

          <Form.Label htmlFor="newdetailpreviewimage">
            New Изображение в карточке статьи
          </Form.Label>
          <Form.Control
            className="my-3"
            type="file"
            id="newdetailpreviewimage"
            aria-describedby="newdetailpreviewimage"
            onChange={event =>
              setNewSelectedDetailPreviewFile(
                (event.target as HTMLInputElement).files?.[0] || null,
              )
            }
            accept="image/*"
          />
          {newSelectedDetailPreviewFile && (
            <>
              <Button
                variant={buttonVariants['newdetailpreviewimage'] || 'primary'}
                onClick={handleNewDetailPreviewImageUpload}>
                Загрузить изображение
              </Button>
              <br />
            </>
          )}

          <Form.Label htmlFor="newremark">
            New Подзаголовок в карточке статьи
          </Form.Label>
          <Form.Control
            className="my-3"
            type="text"
            id="newremark"
            aria-describedby="newremark"
            value={newRemark}
            onInput={event => {
              setNewRemark((event.target as any).value!)
            }}
          />

          <div ref={newContentQuillRef} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={async () => {
              await updatePost(selectedPost?.id, {
                content: newContent || selectedPost?.content,
                name: newName || selectedPost?.name,
                description: newDescription || selectedPost?.description,
                image: newImage || selectedPost?.image,
                type: newType || selectedPost?.type,
                detailPreviewImage:
                  newDetailPreviewImage || selectedPost?.detailPreviewImage,
                remark: newRemark || selectedPost?.remark,
              })
              setSelectedPost(null)
              await fetchData()
            }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th># Article</th>
            <th>Name</th>
            <th>Type</th>
            <th>Cover of article</th>
            <th>Image</th>
            <th>Date</th>

            <th>Edit</th>
            <th>Display status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post: any, index: number) => (
            <tr key={post.id}>
              <td>{index + 1}</td>
              <td>{post.name}</td>
              <td>{post.type}</td>
              <td>{truncateString(post.detailPreviewImage, 5)}</td>
              <td>{truncateString(post.image, 5)}</td>
              <td>{moment(post.date).format('YYYY-MM')}</td>

              <td>
                <Button
                  variant="primary"
                  onClick={() => {
                    setNewName(post.name)
                    setNewContent(post.content)
                    setNewDescription(post.description)
                    setNewImage(post.image)
                    setNewType(post.type)
                    setNewRemark(post.remark)

                    setSelectedPost(post)
                    if (newQuill) {
                      newQuill.setContents(
                        newQuill.clipboard.convert(post.content),
                      )
                    }
                  }}>
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => {
                    updatePostVisibility(post.id, !post.visible) // Изменено на инверсию текущего состояния видимости
                  }}>
                  {isUpdating ? 'Updating...' : post.visible ? 'Hide' : 'Show'}
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={async () => {
                    await deletePost(post.id)
                    await fetchData()
                  }}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default Posts
