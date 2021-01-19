import { stringify } from 'querystring'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask, sortTask } from '../../redux/Task/task.actions'
import { v1 as uuid } from 'uuid'
import {
    FormInputMain,
    StyledAddButton,
    FormStyled,
    SortButton
} from '../../utils/styledElements'


const TaskForm: React.FC = () => {

    const [title, setTitle] = useState<string | number>('')
    const [sort, setSort] = useState<boolean>(false)
    const dispatch = useDispatch()
    
    return (
        <>
            <FormStyled>
                <FormInputMain
                    type = 'text'
                    value = {title}
                    placeholder = 'Enter your task here'
                    onChange = {e => setTitle(e.target.value)}
                />
                <StyledAddButton
                    onClick = {() => {
                        dispatch(addTask({
                            id: uuid(),
                            title: title,
                            isCompleted: false
                        }))
                        setTitle('')
                    }}
                >
                    Add
                </StyledAddButton>
                <SortButton
                    onClick = {() => {
                        dispatch(sortTask(sort))
                        setSort(!sort)
                    }}
                >
                    Sort the tasks
                </SortButton>
            </FormStyled>
        </>
    )
}

export default TaskForm