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

  const fetchData = async () => {
    const snapshot = await getDocs(collection(db, 'posts'))
    const postsData = snapshot.docs.map(
      doc =>
        ({
          id: doc.id,
          ...doc.data(),
          visible: doc.data().visible, // Добавьте это свойство
        } as { id: string; visible: boolean }),
    )

    setPosts(postsData as any)
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

      const storage = getStorage()
      const storageRef = ref(storage, 'images/articles/' + selectedFile.name)

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

          setImage(downloadURL)
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

      const uploadTask = uploadBytesResumable(
        storageRef,
        selectedDetailPreviewFile,
      )

      uploadTask.on(
        'state_changed',
        snapshot => {
          console.log(
            'Detail Preview Image Upload Progress:',
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100 + '%',
          )
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)

          setDetailPreviewImage(downloadURL)
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
      !newPost.detailPreviewImage ||
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
      console.log(
        `Updating visibility for post with ID ${id} to ${
          isVisible ? 'visible' : 'hidden'
        }`,
      )

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
          Посты
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
        Создать пост
      </Button>

      <Modal show={createPostModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Новый пост</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="name">Название поста</Form.Label>
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
            Подзаголовок поста карточки
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

          <Form.Label htmlFor="img">Картинка поста карточки</Form.Label>
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
            <Button variant="primary" onClick={handleImageUpload}>
              Загрузить изображение
            </Button>
          )}

          <Form.Label htmlFor="type">Тип поста</Form.Label>
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
            Картинка внутри поста
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
            <Button variant="primary" onClick={handleDetailPreviewImageUpload}>
              Загрузить изображение
            </Button>
          )}

          <Form.Label htmlFor="remark">
            Заголовок поста внутри карточки
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
          <Modal.Title>Редактирование поста</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="title">New Название поста</Form.Label>
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

          <Form.Label htmlFor="desc">New Описание поста карточки</Form.Label>
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

          <Form.Label htmlFor="newimg">New Картинка поста карточки</Form.Label>
          <Form.Control
            className="my-3"
            type="text"
            id="newimg"
            aria-describedby="newimg"
            value={newImage}
            onInput={event => {
              setNewImage((event.target as any).value!)
            }}
          />

          <Form.Label htmlFor="newtype">New Тип поста</Form.Label>
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
            New Картинка внутри поста
          </Form.Label>
          <Form.Control
            className="my-3"
            type="text"
            id="newdetailpreviewimage"
            aria-describedby="newdetailpreviewimage"
            value={newDetailPreviewImage}
            onInput={event => {
              setNewDetailPreviewImage((event.target as any).value!)
            }}
          />

          <Form.Label htmlFor="newremark">New Подзаголовок</Form.Label>
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
                  newDetailPreviewImage || selectedPost?.newDetailPreviewImage,
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
            <th># Поста</th>
            <th>Name</th>
            <th>type</th>
            <th>Превью картинка поста</th>
            <th>Картинка</th>
            <th>Дата</th>

            <th>Edit</th>
            <th>Delete</th>
            <th>Статус отображения</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post: any, index: number) => (
            <tr key={post.id}>
              <td>{index + 1}</td>
              <td>{post.name}</td>
              <td>{post.type}</td>
              <td>{truncateString(post.detailPreviewImage, 30)}</td>
              <td>{truncateString(post.image, 30)}</td>
              <td>{moment(post.date).format('YYYY-MM-DD')}</td>

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
                  variant="danger"
                  onClick={async () => {
                    await deletePost(post.id)
                    await fetchData()
                  }}>
                  Delete
                </Button>
              </td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => {
                    updatePostVisibility(post.id, !post.visible) // Изменено на инверсию текущего состояния видимости
                  }}>
                  {isUpdating
                    ? 'Updating...'
                    : post.visible
                    ? 'Скрыть'
                    : 'Показать'}
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
