import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { sort } from '../reducers/anecdoteReducer'
import { message } from '../reducers/notificationReducer'

const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(({ filter, anecdotes }) => {
        if ( filter === '' ) {
          return anecdotes
        }
        return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
      })

    return (
        <div>
            <button onClick={() => dispatch(sort())}>sort by likes</button>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => {
                            dispatch(vote(anecdote.id))
                            dispatch(message(`you voted '${anecdote.content}'`))
                            setTimeout(() => {
                                dispatch(message(''))
                              }, 5000)
                            
                            }}>vote</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Anecdotes