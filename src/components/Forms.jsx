import { useState, useContext } from 'react';
import { TaskForm } from '../styled-components/forms/index';
import { TaskInput } from './Inputs';
import { TasksContext } from '../helpers/context';


export const CreateTask = () => {
    const { tasks, setTasks } = useContext(TasksContext);

    const [input, setInput] = useState('');

    const captureInput = e => setInput(e.target.value);

    const submit = e => {
        e.preventDefault();
        setTasks([...tasks, input]);
        setInput('');
    }

    return (
        <TaskForm onSubmit={submit}>

            <TaskInput
                type='text'
                value={input}
                onChange={captureInput}
                placeholder='Create New Task'
            />

        </TaskForm>
    )
}