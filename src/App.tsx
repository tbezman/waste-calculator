import * as React from 'react'
import { WasteForm } from './WasteForm'

function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="py-6 px-6 bg-blue-900 text-blue-100">
        <h1 className="text-2xl">Waste Calculator</h1>
      </div>

      <div className="flex-grow flex justify-center pt-12">
        <WasteForm />
      </div>
    </div>
  )
}

export default App
