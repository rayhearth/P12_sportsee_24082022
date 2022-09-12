import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';

import { dataServices } from '@/_services/Datamanager';

import Activity from '@/components/UI/Activity';
import AverageSession from '@/components/UI/AverageSession';
import Performance from '@/components/UI/Performance';
import Score from '@/components/UI/Score';
import Stats from '@/components/UI/Stats';


const Dashboard = () => {

    /**@param {Number} userId */
    const { userId } = useParams()

    const { isLoading, data } = useQuery('users', () => dataServices.getUser(userId))
    const users = data || {}
    console.log(users)

    if (isLoading) {
        return <div>Loading ...</div>
    }

    return (
        <section className='dashboard'>
            <div className='user-header'>
                <h1>Bonjour {''}<span>{users.data.userInfos.firstName}</span>
                </h1>
                <p className="section-secondary">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className='dashboard-container'>
                <div className="activity">
                    <Activity />



                </div>

                <AverageSession />
                <Performance />
                <Score />
                <div className="stats">
                    {Object.keys(users.data.keyData).map((key)=>(
                        <Stats type={key} value={users.data.keyData[key]} key={key}/>
                    ))}
                </div>

            </div>


        </section>
    );
};

export default Dashboard;