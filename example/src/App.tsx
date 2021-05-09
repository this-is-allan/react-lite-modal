import React from 'react'

import { Modal } from 'modal'
import 'modal/dist/index.css'

const App = () => {
  const [open, setOpen] = React.useState(true)
  
  const handleOpen = () => setOpen(!open)
  
  return (
    <>
      <h1>teste</h1>
      <h2>teste asdadads</h2>
      <p>asdias dj oajsd iadsj asdadads</p>
      <span>abrir modal</span>
      <button onClick={handleOpen}>open modal</button>
      <Modal title="title modal" open={open} onClose={handleOpen}>
        {/* <Modal.Header>
          Modal title
        </Modal.Header> */}
        Create React Library Example
      </Modal>
    </>
  )
  // return <ExampleComponent text="Create React Library Example 😄" />
}

export default App
