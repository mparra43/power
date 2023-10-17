import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineClose } from 'react-icons/ai';


export interface ModalProps {
  show: boolean
  onClose?: () => void
  children?: React.ReactNode
  title?: string
}

export const Modal: React.FC<ModalProps> = ({ children, onClose, show, title }) => {
  return (
    <div className="modal" tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <AiOutlineClose onClick={onClose} />
          </div>
          <div className="modal-body p-5">
            {children}
          </div>

        </div>
      </div>
    </div>
  )
}

