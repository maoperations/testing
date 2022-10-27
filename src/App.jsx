import DashboardContent from './Content'
import { Icon } from '@iconify/react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { createTodo } from './store/counterSlice'

function App() {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  const onClick = event => {
    event.preventDefault()
    dispatch(
      createTodo({
        email: 'ayumichan837@gmail.com',
        title: 'New Activity'
      })
    )
  }
  return (
    <div className="App">
      <div className="header">
        <div data-cy="header-background" className="container">
          <h4 data-cy="header-title" className="font-weight-bold">
            TO DO LIST APP
          </h4>
        </div>
      </div>
      <div className="container">
        <div className="todo-activity d-flex justify-content-between">
          <h1 data-cy="activity-title">Activity</h1>
          <button
            type="submit"
            data-cy="activity-add-button"
            className="btn btn-primary border-0 rounded-pill"
            onClick={onClick}
          >
            <Icon icon="akar-icons:plus" className="mr-3" />
            Tambah
          </button>
        </div>
        <DashboardContent />
      </div>
    </div>
  )
}

export default App
