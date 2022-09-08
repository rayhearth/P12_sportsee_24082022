import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';

import { dataServices } from '@/_services/Datamanager';

import Activity from '@/components/UI/Activity';
import AverageSession from '@/components/UI/AverageSession';
import Performance from '@/components/UI/Performance';
import Score from '@/components/UI/Score';


const Dashboard = () => {

    /**@param {Number} userId */

    const { userId } = useParams()

    const { isLoading, data } = useQuery('users', () => dataServices.getUser(userId))
    const users = data || {}


    if (isLoading) {
        return <div>Loading ...</div>
    }

    return (
        <div className='dashboard'>
            <h1>Bonjour {''}<span>{users.data.userInfos.firstName}</span>
            </h1>

            <div className="activity">
                <Activity />



            </div>

            <AverageSession />
            <Performance/>
            <Score/>

        </div>
    );
};

export default Dashboard;