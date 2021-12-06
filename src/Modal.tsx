import * as React from 'react'
import { FC, useCallback } from 'react'

export const Modal: FC<{ onClose: () => void }> = ({ children, onClose }) => {
  const handleModalKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Enter') {
        onClose()
      }
    },
    [onClose]
  )

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center pt-16">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25" />

      <div
        tabIndex={0}
        onKeyDown={handleModalKeyDown}
        className="z-10 flex flex-col w-full h-full px-8 py-12 bg-white rounded shadow-xl slide-up md:w-6/12 md:h-auto max-w-2xl max-h-[95vh] overflow-y-scroll"
      >
        {children}
      </div>
    </div>
  )
}
