// App.js
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
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
import { title } from 'process'
// projects.tsx
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import { NavLink } from 'react-router-dom'

import { db } from '../../shared/firebase'
import { services } from './../../entities/services/data'

export function truncateString(inputString: string, maxLength: number) {
  if (inputString.length > maxLength) {
    return inputString.substring(0, maxLength) + '...'
  }
  return inputString
}

interface Project {
  id: string
  name: string
  description: string
  image: string
  type: string
  detailPreview: string
  date: string
  visible: boolean
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [name, setName] = useState('')
  // const [content, setContent] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [type, setType] = useState('')
  // const [remark, setRemark] = useState('')
  const [newName, setNewName] = useState('')
  // const [newContent, setNewContent] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newImage, setNewImage] = useState('')
  const [newType, setNewType] = useState('')
  // const [newRemark, setNewRemark] = useState('')
  const [createProjectModalOpen, setCreateProjectModalOpen] = useState(false)
  // const { quill, quillRef } = useQuill()
  // const { quill: newQuill, quillRef: newContentQuillRef } = useQuill()
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const [newDetailPreview, setNewDetailPreview] = useState('')
  const [detailPreview, setDetailPreview] = useState('')

  const [servicesType, setServicesType] = useState('')
  const [newServicesType, setNewServicesType] = useState('')

  const [about, setAbout] = useState('')
  const [newAbout, setNewAbout] = useState('')

  const [titleDescription, setTitleDescription] = useState('')
  const [newTitleDescription, setNewTitleDescription] = useState('')

  const [titleAbout, setTitleAbout] = useState('')
  const [newTitleAbout, setNewTitleAbout] = useState('')

  const [selectedProjectFile, setSelectedProjectFile] = useState<File | null>(
    null,
  )
  const [
    selectedProjectDetailPreviewFile,
    setSelectedProjectDetailPreviewFile,
  ] = useState<File | null>(null)

  const [newselectedProjectFile, setNewSelectedProjectFile] =
    useState<File | null>(null)
  const [
    newSelectedProjectDetailPreviewFile,
    setNewSelectedProjectDetailPreviewFile,
  ] = useState<File | null>(null)

  const [isUpdating, setIsUpdating] = useState(false) // Добавим новое состояние

  const [buttonVariants, setButtonVariants] = useState<{
    [key: string]: string
  }>({})

  const fetchData = async () => {
    try {
      const snapshot = await getDocs(
        query(collection(db, 'projects'), orderBy('date', 'desc')),
      )
      const projectsData = snapshot.docs.map(
        doc =>
          ({
            id: doc.id,
            ...doc.data(),
            visible: doc.data().visible, // Добавьте это свойство
          } as { id: string; visible: boolean }),
      )

      setProjects(projectsData as any)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleImageUploadProject = async () => {
    try {
      if (!selectedProjectFile) {
        alert('Выберите изображение для загрузки')
        return
      }

      console.log('Selected File:', selectedProjectFile)

      const storage = getStorage()
      const storageRef = ref(
        storage,
        'images/projectImg/' + selectedProjectFile.name,
      )
      console.log('Storage Reference:', storageRef)

      const uploadTask = uploadBytesResumable(storageRef, selectedProjectFile)

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

  const handleImageUploadProjectDetail = async () => {
    try {
      if (!selectedProjectDetailPreviewFile) {
        alert('Выберите изображение для загрузки')
        return
      }

      console.log('Selected File:', selectedProjectDetailPreviewFile)

      const storage = getStorage()
      const storageRef = ref(
        storage,
        'images/projectDetail/' + selectedProjectDetailPreviewFile.name,
      )
      console.log('Storage Reference:', storageRef)

      const uploadTask = uploadBytesResumable(
        storageRef,
        selectedProjectDetailPreviewFile,
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

          setDetailPreview(downloadURL) // Обновляем состояние detailPreview
          setButtonVariants(prevVariants => ({
            ...prevVariants,
            detailpreviewimage: 'success',
          }))
        },
      )
    } catch (error) {
      console.error('Ошибка при загрузке изображения:', error)
    }
  }

  const handleNewImageUploadProject = async () => {
    try {
      if (!newselectedProjectFile) {
        alert('Выберите изображение для загрузки')
        return
      }

      console.log('Selected File:', newselectedProjectFile)

      const storage = getStorage()
      const storageRef = ref(
        storage,
        'images/projectImg/' + newselectedProjectFile.name,
      )
      console.log('Storage Reference:', storageRef)

      const uploadTask = uploadBytesResumable(
        storageRef,
        newselectedProjectFile,
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

          setNewImage(downloadURL)
          setButtonVariants(prevVariants => ({
            ...prevVariants,
            newimg: 'success',
          }))
        },
      )
    } catch (error) {
      console.error('Ошибка при загрузке изображения:', error)
    }
  }

  const handleNewImageUploadProjectDetail = async () => {
    try {
      if (!newSelectedProjectDetailPreviewFile) {
        alert('Выберите изображение для загрузки')
        return
      }

      console.log('Selected File:', newSelectedProjectDetailPreviewFile)

      const storage = getStorage()
      const storageRef = ref(
        storage,
        'images/projectDetail/' + newSelectedProjectDetailPreviewFile.name,
      )
      console.log('Storage Reference:', storageRef)

      const uploadTask = uploadBytesResumable(
        storageRef,
        newSelectedProjectDetailPreviewFile,
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

          setNewDetailPreview(downloadURL) // Обновляем состояние detailPreview
          setButtonVariants(prevVariants => ({
            ...prevVariants,
            newdetailpreviewimage: 'success',
          }))
        },
      )
    } catch (error) {
      console.error('Ошибка при загрузке изображения:', error)
    }
  }

  const handleClose = () => {
    setCreateProjectModalOpen(false)
  }

  const handleCreateProject = async (newProject: any) => {
    if (
      !newProject.name ||
      !newProject.description ||
      // !newProject.image ||
      !newProject.type ||
      // !newProject.detailPreview ||
      !newProject.servicesType ||
      !newProject.about ||
      !newProject.titleDescription || // Новое поле для создания проекта
      !newProject.titleAbout // Новое поле для создания проекта
    ) {
      alert('Все поля должны быть заполнены')
      return
    }

    // const sanitizedContent = DOMPurify.sanitize(newProject.content)

    await addDoc(collection(db, 'projects'), {
      ...newProject,
      // content: sanitizedContent,
      date: new Date().toISOString(),
      visible: true,
    })

    await fetchData()

    // setContent('')
    setName('')
    setDescription('')
    setImage('')
    setType('')
    setDetailPreview('')
    // setRemark('')
    setServicesType('')
    setAbout('')
    setTitleDescription('') // Сброс нового поля
    setTitleAbout('') // Сброс нового поля

    handleClose()
  }

  const onNewProject = async () => {
    await handleCreateProject({
      // content: content,
      name: name,
      image,
      // remark,
      description,
      type,
      detailPreview,
      servicesType,
      about,
      titleAbout,
      titleDescription,
    })
    handleClose()
  }

  const deleteProject = async (id: string) => {
    await deleteDoc(doc(db, 'projects', id))
    await fetchData()
  }

  const updateProject = async (id: string, newProjectData: any) => {
    await updateDoc(doc(db, 'projects', id), {
      ...newProjectData,
    })
    await fetchData()
  }

  const updateProjectVisibility = async (id: string, isVisible: boolean) => {
    try {
      setIsUpdating(true)
      await updateDoc(doc(db, 'projects', id), {
        visible: isVisible,
      })

      // Update local state
      setProjects(prevProject => {
        return prevProject.map(project =>
          project.id === id ? { ...project, visible: isVisible } : project,
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
        onClick={() => setCreateProjectModalOpen(true)}>
        Создать проект
      </Button>

      <Modal show={createProjectModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Новый проект</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="name">Название проекта</Form.Label>
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
          <Form.Label htmlFor="titleAbout">
            Подзаголовок introduction
          </Form.Label>
          <Form.Control
            className="my-2"
            type="text"
            id="titleAbout"
            aria-describedby="titleAbout"
            value={titleAbout}
            onInput={event => {
              setTitleAbout((event.target as any).value!)
            }}
            required
          />

          <Form.Label htmlFor="about">Текст introduction</Form.Label>
          <Form.Control
            className="my-2"
            type="text"
            id="about"
            aria-describedby="about"
            value={about}
            onInput={event => {
              setAbout((event.target as any).value!)
            }}
            required
          />

          <Form.Label htmlFor="titleDescription">
            Подзаголовок description
          </Form.Label>
          <Form.Control
            className="my-2"
            type="text"
            id="titleDescription"
            aria-describedby="titleDescription"
            value={titleDescription}
            onInput={event => {
              setTitleDescription((event.target as any).value!)
            }}
            required
          />

          <Form.Label htmlFor="description">Текст description</Form.Label>
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

          <Form.Label htmlFor="img">Обложка проекта в каталоге</Form.Label>
          <Form.Control
            className="my-2"
            type="file"
            id="img"
            aria-describedby="img"
            onChange={event =>
              setSelectedProjectFile(
                (event.target as HTMLInputElement).files?.[0] || null,
              )
            }
            required
            accept="image/*"
          />
          {selectedProjectFile && (
            <>
              <Button
                variant={buttonVariants['img'] || 'primary'}
                onClick={handleImageUploadProject}>
                Загрузить изображение
              </Button>
              <br />
            </>
          )}

          <Form.Label htmlFor="type">Тип проекта</Form.Label>
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

          <Form.Label htmlFor="detailpreviewimage">
            Видео в карточке проекта (только .webm)
          </Form.Label>
          <Form.Control
            className="my-2"
            type="file"
            id="detailpreviewimage"
            aria-describedby="detailpreviewimage"
            onChange={event =>
              setSelectedProjectDetailPreviewFile(
                (event.target as HTMLInputElement).files?.[0] || null,
              )
            }
            required
            accept="image/*"
          />
          {selectedProjectDetailPreviewFile && (
            <>
              <Button
                variant={buttonVariants['detailpreviewimage'] || 'primary'}
                onClick={handleImageUploadProjectDetail}>
                Загрузить видео
              </Button>
              <br />
            </>
          )}

          <Form.Label htmlFor="servicesType">Тэг проекта</Form.Label>
          <Form.Select
            className="my-2"
            id="servicesType"
            aria-describedby="servicesType"
            value={servicesType}
            onChange={event => {
              setServicesType((event.target as any).value!)
            }}>
            <option>Выбери поле</option>
            <option value="APP">APP</option>
            <option value="CGI">CGI</option>
            <option value="XR">XR</option>
            <option value="AR">AR</option>
            <option value="VR">VR</option>
          </Form.Select>

          {/* <div ref={quillRef} /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onNewProject}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={!!selectedProject} onHide={() => setSelectedProject(null)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedProject ? selectedProject.name : ''}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="title">New Название проекта</Form.Label>
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
          <Form.Label htmlFor="newTitleAbout">
            New Подзаголовок introduction
          </Form.Label>
          <Form.Control
            className="my-2"
            type="text"
            id="newTitleAbout"
            aria-describedby="newTitleAbout"
            value={newTitleAbout}
            onInput={event => {
              setNewTitleAbout((event.target as any).value!)
            }}
            required
          />

          <Form.Label htmlFor="about">New Текст introduction</Form.Label>
          <Form.Control
            className="my-2"
            type="text"
            id="about"
            aria-describedby="about"
            value={newAbout}
            onInput={event => {
              setNewAbout((event.target as any).value!)
            }}
            required
          />

          <Form.Label htmlFor="newTitleDescription">
            New Подзаголовок description
          </Form.Label>
          <Form.Control
            className="my-2"
            type="text"
            id="newTitleDescription"
            aria-describedby="newTitleDescription"
            value={newTitleDescription}
            onInput={event => {
              setNewTitleDescription((event.target as any).value!)
            }}
            required
          />

          <Form.Label htmlFor="newdescription">
            New Текст description
          </Form.Label>
          <Form.Control
            className="my-3"
            type="text"
            id="newdescription"
            aria-describedby="newdescription"
            value={newDescription}
            onInput={event => {
              setNewDescription((event.target as any).value!)
            }}
          />

          <Form.Label htmlFor="newimg">
            New Обложка проекта в каталоге
          </Form.Label>
          <Form.Control
            className="my-3"
            type="file"
            id="newimg"
            aria-describedby="newimg"
            onChange={event =>
              setNewSelectedProjectFile(
                (event.target as HTMLInputElement).files?.[0] || null,
              )
            }
            required
            accept="image/*"
          />
          {newselectedProjectFile && (
            <>
              <Button
                variant={buttonVariants['newimg'] || 'primary'}
                onClick={handleNewImageUploadProject}>
                Загрузить изображение
              </Button>
              <br />
            </>
          )}

          <Form.Label htmlFor="newtype">New Тип проекта</Form.Label>
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
            New Видео в карточке проекта (.webm)
          </Form.Label>
          <Form.Control
            className="my-3"
            type="file"
            id="newdetailpreviewimage"
            aria-describedby="newdetailpreviewimage"
            onChange={event =>
              setNewSelectedProjectDetailPreviewFile(
                (event.target as HTMLInputElement).files?.[0] || null,
              )
            }
            required
            accept="image/*"
          />
          {newSelectedProjectDetailPreviewFile && (
            <>
              <Button
                variant={buttonVariants['newdetailpreviewimage'] || 'primary'}
                onClick={handleNewImageUploadProjectDetail}>
                Загрузить видео
              </Button>
              <br />
            </>
          )}

          <Form.Label htmlFor="newServicesType">New Тэг проекта</Form.Label>
          <Form.Select
            className="my-3"
            id="newServicesType"
            aria-describedby="newServicesType"
            value={newServicesType}
            onChange={event => {
              setNewServicesType((event.target as any).value!)
            }}>
            <option>Выбери поле</option>
            <option value="APP">APP</option>
            <option value="CGI">CGI</option>
            <option value="XR">XR</option>
            <option value="AR">AR</option>
            <option value="VR">VR</option>
          </Form.Select>

          {/* <Form.Label htmlFor="servicesType">Сервисный тип проекта</Form.Label>
          <Form.Select
            className="my-2"
            id="servicesType"
            aria-describedby="servicesType"
            value={servicesType}
            onChange={event => {
              setServicesType((event.target as any).value!)
            }}>
            <option>Выбери поле</option>
            <option value="APP">APP</option>
            <option value="CGI">CGI</option>
            <option value="XR">XR</option>
          </Form.Select> */}

          {/* <div ref={newContentQuillRef} /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={async () => {
              await updateProject(selectedProject?.id, {
                name: newName || selectedProject?.name,
                titleDescription:
                  newTitleDescription || selectedProject?.titleDescription,
                description: newDescription || selectedProject?.description,
                image: newImage || selectedProject?.image,
                type: newType || selectedProject?.type,
                servicesType: newServicesType || selectedProject?.servicesType,
                detailPreview:
                  newDetailPreview || selectedProject?.detailPreview,
                about: newAbout || selectedProject?.about,
                titleAbout: newTitleAbout || selectedProject?.titleAbout,
              })
              setSelectedProject(null)
              await fetchData()
            }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th># Project</th>
            <th>Name</th>
            <th>Type</th>
            <th>Тэг</th>
            <th>Введение</th>
            <th>Описание</th>
            <th>Обложка</th>
            <th>Видео</th>
            <th>Date</th>

            <th>Edit</th>
            <th>Display status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project: any, index: number) => (
            <tr key={project.id}>
              <td>{index + 1}</td>
              <td>{project.name}</td>
              <td>{project.type}</td>
              <td>{project.servicesType}</td>
              <td>{project.about && truncateString(project.about, 40)}</td>
              <td>
                {project.description && truncateString(project.description, 40)}
              </td>
              <td>
                {project.detailPreview &&
                  truncateString(project.detailPreview, 10)}
              </td>
              <td>{project.image && truncateString(project.image, 10)}</td>
              <td>{moment(project.date).format('YYYY-MM-DD')}</td>

              <td>
                <Button
                  variant="primary"
                  onClick={() => {
                    setNewName(project.name)
                    setNewDescription(project.description)
                    setNewTitleAbout(project.titleAbout)
                    setNewImage(project.image)
                    setNewType(project.type)
                    setNewAbout(project.about)
                    setNewTitleDescription(project.titleDescription)
                    setNewServicesType(project.servicesType)
                    setSelectedProject(project)
                    // setNewContent(project.content)
                    // setNewRemark(project.remark)
                    // newQuill.setContent(project.content)
                  }}>
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => {
                    updateProjectVisibility(project.id, !project.visible) // Изменено на инверсию текущего состояния видимости
                  }}>
                  {isUpdating
                    ? 'Updating...'
                    : project.visible
                    ? 'Hide'
                    : 'Show'}
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={async () => {
                    await deleteProject(project.id)
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

export default Projects
