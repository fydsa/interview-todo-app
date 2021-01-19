import React from 'react'
import TaskForm from '../../components/TaskForm/taskForm.component'
import TaskList from '../../components/TaskList/taskList.component'
import styled from 'styled-components'

const StyledHome = styled.div`
    margin-left: 1vw;
    margin-top: 5vh
`

const Home: React.FC = () => {
    return (
        <>
            <StyledHome>
                <TaskForm />
                <TaskList />
            </StyledHome>
        </>
    )
}

export default Home