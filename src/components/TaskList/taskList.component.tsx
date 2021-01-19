import React from 'react'
import TaskItem from '../TaskItem/taskItem.component'
import { useTypedSelector } from '../../redux/Task/task.reducer'
import { Task } from '../../utils/styledElements'


const TaskList: React.FC = () => {
    
    const tasks = useTypedSelector(state => state)

    return (
        <>
            {Object.values(tasks)[0].map((n: any) => {
                return (
                    <Task>
                        <TaskItem 
                            key = {n.id}
                            task = {n}
                        />
                    </Task>
                )
            })}
        </>
    )
}

export default TaskList