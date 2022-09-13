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

    /**
     * getUser
     * @param   {String}  users
     * @param   {Number}  userId
     * @return  {Object}
     */
    const { isLoading, data, error } = useQuery('users', () => dataServices.getUser(userId))
    const users = data || {}

    if (isLoading) {
        return <div>Loading ...</div>
    }

    if (error) {
        return <div>404</div>
    }

    return (
        <section className='dashboard'>

            <div className='user-header'>
                <h1>Bonjour {''}<span>{users.data.userInfos.firstName}</span>
                </h1>
                <p className="section-secondary">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>

            <div className='dashboard-container'>

                <div className="graphic-container">
                    <div className="activity">
                        <Activity />
                    </div>
                    <div className="graphic">
                        <AverageSession />
                        <Performance />
                        <Score score={users.data}/>
                    </div>
                </div>

                <div className="statistiques">
                    {/* It takes an object as a parameter, then it map on our users.keyData object for each 'key' return a div depending on the type */}
                    {Object.keys(users.data.keyData).map((key) => (
                        <Stats type={key} value={users.data.keyData[key]} key={key} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;