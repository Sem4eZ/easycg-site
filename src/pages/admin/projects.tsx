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
  updateDoc,
} from 'firebase/firestore'
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import moment from 'moment'
// projects.tsx
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import { NavLink } from 'react-router-dom'

import { db } from '../../shared/firebase'

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

  const [isUpdating, setIsUpdating] = useState(false) // Добавим новое состояние

  const fetchData = async () => {
    const snapshot = await getDocs(collection(db, 'projects'))
    const projectsData = snapshot.docs.map(
      doc =>
        ({
          id: doc.id,
          ...doc.data(),
          visible: doc.data().visible, // Добавьте это свойство
        } as { id: string; visible: boolean }),
    )

    setProjects(projectsData as any)
  }

  useEffect(() => {
    fetchData()
  }, [])

  // React.useEffect(() => {
  //   if (quill) {
  //     quill.on('text-change', (delta: any, oldDelta: any, source: any) => {
  //       setContent(quill.root.innerHTML)
  //     })
  //   }
  // }, [quill])

  // React.useEffect(() => {
  //   if (newQuill) {
  //     newQuill.on('text-change', (delta: any, oldDelta: any, source: any) => {
  //       setNewContent(newQuill.root.innerHTML)
  //     })
  //   }
  // }, [newQuill])

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
      servicesType: newServicesType || selectedProject?.servicesType,
      about: newAbout || selectedProject?.about, // Добавлено поле about для обновления
      titleDescription:
        newTitleDescription || selectedProject?.titleDescription, // Новое поле для обновления
      titleAbout: newTitleAbout || selectedProject?.titleAbout, // Новое поле для обновления
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
            Заголовок для введения проекта
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

          <Form.Label htmlFor="about">Текст для введения проекта</Form.Label>
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
            Заголовок для описания проекта
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

          <Form.Label htmlFor="description">Описание проекта</Form.Label>
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

          <Form.Label htmlFor="img">Картинка для обложки</Form.Label>
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
              <Button variant="primary" onClick={handleImageUploadProject}>
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

          <Form.Label htmlFor="detail preview image">
            Видео внутри Проекта (только .webm)
          </Form.Label>
          <Form.Control
            className="my-2"
            type="file"
            id="detail preview image"
            aria-describedby="detail preview image"
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
                variant="primary"
                onClick={handleImageUploadProjectDetail}>
                Загрузить видео
              </Button>
              <br />
            </>
          )}

          <Form.Label htmlFor="servicesType">Сервисный тип проекта</Form.Label>
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
            {selectedProject ? selectedProject.title : ''}
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
            New Заголовок для введения проекта
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

          <Form.Label htmlFor="about">
            New Текст для введения проекта
          </Form.Label>
          <Form.Control
            className="my-2"
            type="text"
            id="about"
            aria-describedby="about"
            value={about}
            onInput={event => {
              setNewAbout((event.target as any).value!)
            }}
            required
          />

          <Form.Label htmlFor="newTitleDescription">
            New Заголовок для описания проекта
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

          <Form.Label htmlFor="desc">New Описание проекта</Form.Label>
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

          <Form.Label htmlFor="newimg">New Картинка для обложки</Form.Label>
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
            New Видео внутри проекта
          </Form.Label>
          <Form.Control
            className="my-3"
            type="text"
            id="newdetailpreviewimage"
            aria-describedby="newdetailpreviewimage"
            value={newDetailPreview}
            onInput={event => {
              setNewDetailPreview((event.target as any).value!)
            }}
          />

          {/* <Form.Label htmlFor="newremark">Remark</Form.Label>
          <Form.Control
            className="my-3"
            type="text"
            id="newremark"
            aria-describedby="newremark"
            value={newRemark}
            onInput={event => {
              setNewRemark((event.target as any).value!)
            }}
          /> */}

          <Form.Label htmlFor="newServicesType">
            New Сервисный тип проекта
          </Form.Label>
          <Form.Control
            className="my-3"
            type="text"
            id="newServicesType"
            aria-describedby="newServicesType"
            value={newServicesType}
            onInput={event => {
              setNewServicesType((event.target as any).value!)
            }}
          />

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
                // content: newContent || selectedProject?.content,
                name: newName || selectedProject?.name,
                description: newDescription || selectedProject?.description,
                image: newImage || selectedProject?.image,
                type: newType || selectedProject?.type,
                detailPreview:
                  newDetailPreview || selectedProject?.newDetailPreview,
                // remark: newRemark || selectedProject?.remark,
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
            <th># Проекта</th>
            <th>Name</th>
            <th>type</th>
            <th>Превью картинка проекта</th>
            <th>Картинка</th>
            <th>Date</th>

            <th>Edit</th>
            <th>Delete</th>
            <th>Скрыть показать</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project: any, index: number) => (
            <tr key={project.id}>
              <td>{index + 1}</td>
              <td>{project.name}</td>
              <td>{project.type}</td>
              <td>
                {project.detailPreview &&
                  truncateString(project.detailPreview, 30)}
              </td>
              <td>{project.image && truncateString(project.image, 30)}</td>
              <td>{moment(project.date).format('YYYY-MM-DD')}</td>

              <td>
                <Button
                  variant="primary"
                  onClick={() => {
                    setNewName(project.name)
                    // setNewContent(project.content)
                    setNewDescription(project.description)
                    setNewImage(project.image)
                    setNewType(project.type)
                    // setNewRemark(project.remark)

                    setSelectedProject(project)
                    // newQuill.setContent(project.content)
                  }}>
                  Edit
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
              <td>
                <Button
                  variant="primary"
                  onClick={() => {
                    updateProjectVisibility(project.id, !project.visible) // Изменено на инверсию текущего состояния видимости
                  }}>
                  {isUpdating
                    ? 'Updating...'
                    : project.visible
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

export default Projects
