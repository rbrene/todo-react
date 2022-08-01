import { useState } from 'react';
import { TasksContext } from '../../helpers/context';
import { TasksSection, Grid, SubGrid, SubGridColumn, Column,  } from '../../styled-components/routes/tasks/index';
import TasksList from '../../components/Tasks/List';
import { CreateTask } from '../../components/Forms';
import { H1 } from '../../styled-components/components/typography';


const Tasks = props => {
    const [ tasks, setTasks ] = useState([]);

    return (
        <TasksSection>
            <TasksContext.Provider value={{tasks, setTasks}}>
                <Grid>
                    <Column>
                        <SubGrid>
                            <SubGridColumn>
                                <H1> Tasks </H1>
                            </SubGridColumn>
                            <SubGridColumn>
                                <CreateTask />
                            </SubGridColumn>
                        </SubGrid>
                    </Column>
                    <Column>
                        <TasksList />
                    </Column>
                </Grid>
            </TasksContext.Provider>
        </TasksSection>
    );
}

export default Tasks;