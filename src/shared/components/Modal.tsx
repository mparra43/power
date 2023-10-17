import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'

const sizes = {
  xs: 'max-w-md',
  sm: 'max-w-xl',
  md: 'max-w-2xl',
  lg: 'max-w-4xl ',
  xl: 'max-w-6xl',
  '2xl': 'max-w-8xl'
}

export interface ModalProps {
  show: boolean
  onClose?: () => void
  children?: React.ReactNode
  size?: keyof typeof sizes
}

export const Modal: React.FC<ModalProps> = ({ children, onClose, show,  size }) => {
  return (
    <Transition appear show={show}>
      <Dialog
        as='div'
        className='position-relative z-10'
        onClose={onClose || (() => null)}
      >
        <Transition.Child
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel
                className={clsx(
                  'transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl',
                  size ? sizes[size] : ''
                )}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

