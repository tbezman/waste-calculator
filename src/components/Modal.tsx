import * as React from 'react'
import { FC, MouseEventHandler, useCallback, useEffect } from 'react'

export const Modal: FC<{ onClose: () => void }> = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Enter') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  useEffect(() => {
    const handleWindowClick = () => {
      onClose()
    }

    window.addEventListener('click', handleWindowClick)

    return () => window.removeEventListener('click', handleWindowClick)
  }, [onClose])

  const handleModalClick = useCallback<MouseEventHandler>((event) => {
    event.stopPropagation()
  }, [])

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center pt-16">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25" />

      <div
        tabIndex={0}
        onClick={handleModalClick}
        className="z-10 flex flex-col w-full h-full px-8 py-12 bg-white rounded shadow-xl slide-up md:h-auto max-w-2xl max-h-[95vh] overflow-y-auto"
      >
        {children}
      </div>
    </div>
  )
}
