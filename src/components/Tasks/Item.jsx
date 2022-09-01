import { useContext } from 'react';
import { TasksContext } from '../../helpers/context';
import { Taskitem, TaskAction } from '../../styled-components/routes/tasks/index';
import { Checkbox } from '../../styled-components/forms/index';
import { FaTrash } from 'react-icons/fa';


export default function Item(props) {
    const { setTasks } = useContext(TasksContext);
    const deleteTask = e => setTasks(prev => prev.filter(task => task !== props.title));


    return (
        <Taskitem>
            <TaskAction> <Checkbox type='checkbox' /> </TaskAction>
            <TaskAction> {props.title} </TaskAction>
            <TaskAction> <FaTrash onClick={deleteTask} /> </TaskAction>
        </Taskitem>
    );
}