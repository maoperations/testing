import { getTodosAsync } from './store/counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
const Content = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.counter)
  let options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }

  useEffect(() => {
    dispatch(getTodosAsync())
  }, [])
  return (
    <div>
      <div className="row">
        {todos.length >= 1
          ? todos?.map(activity => (
              <div className="col-md-3" key={activity.id}>
                <div className="card activity-item">
                  <div className="card-body">
                    <h5 className="card-title">{activity.title}</h5>
                  </div>
                  <div className="card-footer">
                    <div className="d-flex justify-content-between">
                      <span>
                        {new Intl.DateTimeFormat('id', options).format(
                          new Date(activity.created_at)
                        )}
                      </span>
                      <img
                        src="https://ivan-todo-devrank.netlify.app/static/media/icon-delete.1e080ddb.svg"
                        alt="Delete"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          : 'ayu'}
      </div>
    </div>

    // : ``
    // <div className="dashboard-content">
    //   <div className="row">
    //     <div className="empty-item" data-cy="activity-empty-state"></div>
    //     <img
    //       className="activity-empty-state"
    //       src="../public/activity-empty-state.png"
    //       alt="Create Activity"
    //     />
    //   </div>
    // </div>
  )
}
export default Content
