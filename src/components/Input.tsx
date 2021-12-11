import * as React from 'react'

export const NumberInput = React.forwardRef<HTMLInputElement, JSX.IntrinsicElements['input']>((props, ref) => (
  <input
    ref={ref}
    className="px-3 py-4 leading-none text-blue-900 bg-blue-50 border border-gray-500 rounded appearance-none "
    type="number"
    pattern="\d*"
    {...props}
  />
))

export const Input = React.forwardRef<HTMLInputElement, JSX.IntrinsicElements['input']>((props, ref) => (
  <input
    ref={ref}
    className="px-3 py-4 leading-none text-blue-900 bg-blue-50 border border-gray-300 rounded appearance-none w-full"
    type="text"
    {...props}
  />
))

export const InputLabel: React.FC = ({ children }) => (
  <label className="mt-8 mb-2 text-sm leading-none text-blue-900">{children}</label>
)
