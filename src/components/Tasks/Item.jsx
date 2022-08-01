import React from 'react';
import { Taskitem, TaskAction } from '../../styled-components/routes/tasks/index';
import { Checkbox } from '../../styled-components/forms/index';
import { FaTrash } from 'react-icons/fa';


export default function Item(props) {
    return (
        <Taskitem>
            <TaskAction> <Checkbox type='checkbox' /> </TaskAction>
            <TaskAction> {props.title} </TaskAction>
            <TaskAction> <FaTrash /> </TaskAction>
        </Taskitem>
    );
}