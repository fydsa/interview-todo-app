import './item.models';
import { Action, TaskModel } from './task.models';
import { TaskActionTypes } from './task.types';
import { AnyAction } from 'redux';

const INITIAL_STATE: TaskModel = {
  title: '',
  id: null
};

const TaskReducer = (state = INITIAL_STATE, action: AnyAction | Action) => {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
    case TaskActionTypes.EDIT_TASK:
    case TaskActionTypes.REMOVE_TASK:
    case TaskActionTypes.COMPLETE_TASK:
      return { state };

    default:
      return state;
  }
};
export default TaskReducer;
