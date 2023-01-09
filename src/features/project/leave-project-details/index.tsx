import { Button } from '@mui/material'
import { useState } from 'react'

import { Modal } from 'shared/ui/modal/default'

export const LeaveProjectDetails = () => {
  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <>
      <Button onClick={openModal}>discuss a project</Button>

      <Modal
        title="Project details"
        hideTitle
        open={open}
        onClose={closeModal}
        hideLanguage>
        LeaveProjectDetails
      </Modal>
    </>
  )
}
