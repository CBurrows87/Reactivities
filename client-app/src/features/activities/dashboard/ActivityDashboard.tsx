import React, {useContext, useEffect} from 'react';
import { Grid } from 'semantic-ui-react';
import ActivityList from './ActivityList';
import { observer } from 'mobx-react-lite';
import ActivityStore from '../../../app/stores/activityStore';
import LoadingComponent from '../../../app/layout/LoadingComponent';


const ActivityDashboard: React.FC = () => {
    const activityStore = useContext(ActivityStore);

    useEffect(() => {
      activityStore.loadActivities();
    }, [activityStore]);
  
    if (activityStore.loadingInitial) return <LoadingComponent content='Loading Activities...' />
  

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList />
                <h2>Activity Filters</h2>
            </Grid.Column>
        </Grid>
    )
}
export default observer(ActivityDashboard);
