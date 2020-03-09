import React, { useContext, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router-dom';
import ActivityDetailedHeader from './ActivityDetailedHeader';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedSidebar from './ActivityDetailedSidebar';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityStore from '../../../app/stores/activityStore';

import LoadingComponent from '../../../app/layout/LoadingComponent';

interface DetailParams {
    id: string
}

const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({ match, history }) => {
    const activityStore = useContext(ActivityStore);
    const { activity, loadActivity, loadingInitial } = activityStore;

    useEffect(() => {
        loadActivity(match.params.id)
    }, [loadActivity, match.params.id, history]);

    if (loadingInitial || !activity) return <LoadingComponent content="Loading Activity..." />

    if (!activity)
        return <h2>Activity not found</h2>

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailedHeader activity={activity} />
                <ActivityDetailedInfo activity={activity} />
                <ActivityDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailedSidebar />
            </Grid.Column>
        </Grid>
    );
};

export default observer(ActivityDetails)
