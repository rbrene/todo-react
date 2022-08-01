import { useContext } from 'react';
import { TasksArticle, Taskslist, NoTasks } from '../../styled-components/routes/tasks/index';
import { TasksContext } from '../../helpers/context';
import Item from './Item';


export default function TasksList(props) {
    const { tasks } = useContext(TasksContext);

    return (
        <TasksArticle>
            <Taskslist>
                {tasks.length <= 0 ?
                    <NoTasks children='You have no tasks' />
                    :
                    tasks.map((task, i) => <Item title={task} />)
                }
            </Taskslist>
        </TasksArticle>
    )
}