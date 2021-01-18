import { TaskActionTypes } from './task.types';

export const addTask = (note: string) => ({
  type: TaskActionTypes.ADD_TASK,
  payload: note,
})

export const editTask = (note: string) => ({
    type: TaskActionTypes.EDIT_TASK,
    payload: note
})

export const removeTask = (note: string) => ({
    type: TaskActionTypes.REMOVE_TASK,
    payload: note
})

export const completeTask = (note: string) => ({
    type: TaskActionTypes.COMPLETE_TASK,
    payload: note
})

