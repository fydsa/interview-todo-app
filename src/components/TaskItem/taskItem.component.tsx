import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeTask, editTask, completeTask } from '../../redux/Task/task.actions'
import {
    StyledList,
    StyledRemoveButton,
    StyledEditButton,
    StyledItem,
    FormInput,
    Buttons
} from '../../utils/styledElements'

interface IProps {
    task: {
        id: number | string,
        title: string,
        isCompleted: boolean
    }
}


const TaskItem: React.FC<IProps> = ({task}) => {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [title, setTitle] = useState<string|number>(task.title)
    const [isCompleted, setIsCompleted] = useState<boolean>(task.isCompleted)
    const dispatch = useDispatch()

    return (
        <>
            <StyledList>
               <StyledItem>
                   <input 
                        type = 'checkbox'
                        checked = {isCompleted}
                        onChange = {(e) => {
                            setIsCompleted(e.target.checked)
                            dispatch(completeTask({
                                id: task.id,
                                title: title,
                                isCompleted: e.target.checked
                            }))
                        }}
                   />
                   {isEditing ? 
                    <FormInput 
                        type = 'text'
                        value = {title}
                        onChange = {e => {
                            setTitle(e.target.value)
                            dispatch(editTask({
                                id: task.id,
                                title: title,
                                isCompleted: task.isCompleted
                            }))
                        }}
                    />
                    :
                    task.title
                    }
                </StyledItem>
                <Buttons>
                    <StyledEditButton
                        onClick = {() => {
                            dispatch(editTask({
                                id: task.id,
                                title: title
                            }))
                            if (isEditing) {
                                setTitle(task.title)
                            }
                            setIsEditing(!isEditing)
                        }}
                    >
                        {isEditing ? 'Save' : 'Edit'}
                    </StyledEditButton>
                    <StyledRemoveButton
                        onClick = {() => dispatch(removeTask(task.id))}
                    >
                        Delete
                    </StyledRemoveButton>
                </Buttons>
            </StyledList>
        </>
    )
}

export default TaskItem