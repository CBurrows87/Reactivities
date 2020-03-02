import React from 'react';
import { Grid } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails'
import ActivityForm from '../form/ActivityForm'

interface IProps {
    activities: IActivity[];
    selectActivity: (id: string) => void;
    selectedActivity: IActivity | null;
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void; 
    deleteActivity: (id: string) => void;
}

const ActivityDashboard: React.FC<IProps> = ({ activities, selectActivity, selectedActivity, editMode, setEditMode, createActivity, editActivity, deleteActivity }) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList 
                activities={activities} 
                selectActivity={selectActivity}
                deleteActivity={deleteActivity}  />
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode && (
                <ActivityDetails 
                activity={selectedActivity} 
                setEditMode={setEditMode} />)}
                {editMode && <ActivityForm 
                key={selectedActivity && selectedActivity.id || 0} activity={selectedActivity!} 
                setEditMode={setEditMode} 
                createActivity={createActivity} 
                editActivity={editActivity}
             />}
            </Grid.Column>
        </Grid>
    )
}

export default ActivityDashboard;
