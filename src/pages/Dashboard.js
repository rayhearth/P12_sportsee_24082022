import React, { useEffect, useState } from 'react';

import { dataServices } from '@/_services/Datamanager';
import Activity from '../components/Activity';
import AverageSession from '../components/AverageSession';


const Dashboard = () => {

    // const { userId } = useParams()

    // const [datas, setDatas] = useState({
    //     user: [],
    //     activity: [],
    //     averageSessions: [],
    //     performance: []
    // }
    // )

    const [user, setUser] = useState([])
    const [activity, setActivity] = useState([])
    const [averageSessions, setAverageSessions] = useState([])
    const [performance, setPerformance] = useState([])

    // const flag = useRef(false)

    useEffect(() => {
        dataServices.getUser()
            .then(res => setUser(res.data.data))
            .catch(error => error)

        dataServices.getActivity()
            .then(res => setActivity(res.data.data))
            .catch(error => error)

        dataServices.getAverageSessions()
            .then(res => setAverageSessions(res.data.data))
            .catch(error => error)

        dataServices.getPerformance()
            .then(res => setPerformance(res.data.data))
            .catch(error => error)
    }, [])



    return (
        <div className='dashboard'>
            <h1>Bonjour {''}<span></span>
            </h1>

            <div className="activity">
                <Activity data={activity.userActivity} />



            </div>

            <AverageSession />

        </div>
    );
};

export default Dashboard;