import { FC } from 'react'
import { Modal } from '../Modal'
import { RadiologyWasteConfig } from '../../utils/radiologyWaste'

export const RadiologyWasteResultModal: FC<{ onClose: () => void; config: RadiologyWasteConfig }> = ({
  onClose,
  config,
}) => {
  return (
    <Modal onClose={onClose}>
      <div className="flex items-center justify-between">
        <h1 className="text-xl leading-none text-blue-900 whitespace-no-wrap">Patient Report</h1>

        <button onClick={onClose} className="px-1 py-1 bg-blue-200 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5 text-blue-900 fill-current">
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z" />
          </svg>
        </button>
      </div>

      <hr className="mt-2 mb-4" />

      <div className="flex items-center justify-between mt-4 mb-4">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-3 h-3 text-blue-900 fill-current">
            <path d="M17 10.27V4.99a1 1 0 0 0-2 0V15a5 5 0 0 1-10 0v-1.08A6 6 0 0 1 0 8V2C0 .9.9 0 2 0h1a1 1 0 0 1 1 1 1 1 0 0 1-1 1H2v6a4 4 0 1 0 8 0V2H9a1 1 0 0 1-1-1 1 1 0 0 1 1-1h1a2 2 0 0 1 2 2v6a6 6 0 0 1-5 5.92V15a3 3 0 0 0 6 0V5a3 3 0 0 1 6 0v5.27a2 2 0 1 1-2 0z" />
          </svg>

          <div className="flex items-center justify-between leading-none text-blue-900">Vial Config</div>
        </div>

        <div className="flex space-x-4 text-blue-900">
          <div>
            Price: <strong>${config.totalPrice}</strong>
          </div>
          <span>|</span>
          <div>
            Wasted:{' '}
            <strong>
              {config.wastedUnits}
              {config.vial.unit}
            </strong>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        {config.config
          .filter(({ coefficient }) => coefficient !== 0)
          .map(({ size, coefficient }, index) => {
            return (
              <div className="flex items-end" key={index}>
                <span className="p-2 font-bold leading-none bg-blue-50 rounded">
                  <span className="text-sm text-blue-700">{coefficient}x</span>
                  <span className="text-blue-900">
                    {size.size}
                    {config.vial.unit}
                  </span>
                </span>
              </div>
            )
          })}
      </div>
    </Modal>
  )
}
