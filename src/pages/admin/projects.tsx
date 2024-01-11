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
import moment from 'moment'
// projects.tsx
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

function Projects() {
  const [projects, setProjects] = useState([])
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
  const [createProjectModalOpen, setCreateProjectModalOpen] = useState(false)
  const { quill, quillRef } = useQuill()
  const { quill: newQuill, quillRef: newContentQuillRef } = useQuill()
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const fetchData = async () => {
    const snapshot = await getDocs(collection(db, 'projects'))
    const projectsData = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
    setProjects(projectsData as any)
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

  const handleClose = () => {
    setCreateProjectModalOpen(false)
  }

  const handleCreateProject = async (newProject: any) => {
    if (
      !newProject.name ||
      !newProject.description ||
      !newProject.image ||
      !newProject.type ||
      !newProject.detailPreviewImage ||
      !newProject.remark
    ) {
      alert('Все поля должны быть заполнены')
      return
    }

    const sanitizedContent = DOMPurify.sanitize(newProject.content)

    await addDoc(collection(db, 'projects'), {
      ...newProject,
      content: sanitizedContent,
      date: new Date().toISOString(),
    })
    await fetchData()

    setContent('')
    setName('')
    setDescription('')
    setImage('')
    setType('')
    setDetailPreviewImage('')
    setRemark('')

    handleClose()
  }

  const onNewProject = async () => {
    await handleCreateProject({
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

  const deleteProject = async (id: string) => {
    await deleteDoc(doc(db, 'projects', id))
    await fetchData()
  }

  const updateProject = async (id: string, newProjectData: any) => {
    await updateDoc(doc(db, 'projects', id), newProjectData)
    await fetchData()
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
          <Form.Label htmlFor="name">Name</Form.Label>
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

          <Form.Label htmlFor="description">Description</Form.Label>
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

          <Form.Label htmlFor="img">Image</Form.Label>
          <Form.Control
            className="my-2"
            type="text"
            id="img"
            aria-describedby="img"
            value={image}
            onInput={event => {
              setImage((event.target as any).value!)
            }}
            required
          />

          <Form.Label htmlFor="type">Type</Form.Label>
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
            Detail Preview Image
          </Form.Label>
          <Form.Control
            className="my-2"
            type="text"
            id="detail preview image"
            aria-describedby="detail preview image"
            value={detailPreviewImage}
            onInput={event => {
              setDetailPreviewImage((event.target as any).value!)
            }}
            required
          />

          <Form.Label htmlFor="remark">Remark</Form.Label>
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
          <Form.Label htmlFor="title">Name</Form.Label>
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

          <Form.Label htmlFor="desc">Description</Form.Label>
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

          <Form.Label htmlFor="newimg">Image</Form.Label>
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

          <Form.Label htmlFor="newtype">Type</Form.Label>
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
            Detail preview image
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

          <Form.Label htmlFor="newremark">Remark</Form.Label>
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
              await updateProject(selectedProject?.id, {
                content: newContent || selectedProject?.content,
                name: newName || selectedProject?.name,
                description: newDescription || selectedProject?.description,
                image: newImage || selectedProject?.image,
                type: newType || selectedProject?.type,
                detailPreviewImage:
                  newDetailPreviewImage ||
                  selectedProject?.newDetailPreviewImage,
                remark: newRemark || selectedProject?.remark,
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
          </tr>
        </thead>
        <tbody>
          {projects.map((project: any, index: number) => (
            <tr key={project.id}>
              <td>{index + 1}</td>
              <td>{project.name}</td>
              <td>{project.type}</td>
              <td>
                {project.detailPreviewImage &&
                  truncateString(project.detailPreviewImage, 30)}
              </td>
              <td>{project.image && truncateString(project.image, 30)}</td>
              <td>{moment(project.date).format('YYYY-MM-DD')}</td>

              <td>
                <Button
                  variant="primary"
                  onClick={() => {
                    setNewName(project.name)
                    setNewContent(project.content)
                    setNewDescription(project.description)
                    setNewImage(project.image)
                    setNewType(project.type)
                    setNewRemark(project.remark)

                    setSelectedProject(project)
                    newQuill.setContent(project.content)
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
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default Projects
