import { useState } from 'react';
import { TasksContext } from '../../helpers/context';
import { TasksSection } from '../../styled-components/routes/tasks/index';
import { Grid, HeadingRow, HeadingRowWrapper, TasksRow, TasksRowWrapper } from '../../styled-components/layouts/index';
import TasksList from '../../components/Tasks/List';
import { CreateTask } from '../../components/Forms';
import { H1 } from '../../styled-components/components/typography';


const Tasks = props => {
    const [ tasks, setTasks ] = useState([]);

    return (
        <TasksSection>
            <TasksContext.Provider value={{tasks, setTasks}}>
                <Grid>
                    <HeadingRow>
                        <HeadingRowWrapper>
                            <H1> Tasks </H1>
                            <CreateTask />
                        </HeadingRowWrapper>
                    </HeadingRow>
                    <TasksRow>
                        <TasksRowWrapper>
                            <TasksList />
                        </TasksRowWrapper>
                    </TasksRow>
                </Grid>
            </TasksContext.Provider>
        </TasksSection>
    );
}

export default Tasks;