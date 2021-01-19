import { Action, TaskModel } from './task.models'
import { TaskActionTypes } from './task.types'
import { AnyAction } from 'redux'
import { tasks } from '../../Data/data'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

interface RootState {
  tasks: Array<{
    id: number | string,
    title: string,
    isCompleted: boolean
  }>
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

const TaskReducer = (state = tasks, action: AnyAction | Action) => {
  var newTasks: Array<{
    id: number | string,
    title: string,
    isCompleted: boolean
  }>
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
      newTasks = [...state]
      newTasks.push(action.payload)
      return newTasks
    case TaskActionTypes.EDIT_TASK:
      newTasks = [...state]
      newTasks.map(task => {
        if (task.id === action.payload.id) {
          task['title'] = action.payload.title
        }
      })
      return newTasks
    case TaskActionTypes.REMOVE_TASK:
      newTasks = [...state]
      newTasks = newTasks.filter(task => task.id !== action.payload)
      return newTasks
    case TaskActionTypes.COMPLETE_TASK:
      newTasks = [...state]
      newTasks.map(task => {
        if (task.id === action.payload.id) {
          task['isCompleted'] = action.payload.isCompleted
        }
      })
      return newTasks
    case TaskActionTypes.SORT_TASK:
      newTasks = [...state]
      newTasks.sort((a, b) => {
        return (a.isCompleted === b.isCompleted) ? 0 : a.isCompleted? -1 : 1

      })
      return newTasks

    default:
      return state;
  }
};
export default TaskReducer;
