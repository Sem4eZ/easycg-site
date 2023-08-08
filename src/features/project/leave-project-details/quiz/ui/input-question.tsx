import { ModalTitle } from 'shared/ui/typography'

interface Props {
  title?: React.ReactNode
  content: React.ReactNode
}

export const InputQuestion = ({ title, content }: Props) => {
  return (
    <div>
      {title && <ModalTitle>{title}</ModalTitle>}
      {content}
    </div>
  )
}
