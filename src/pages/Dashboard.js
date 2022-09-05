import React, { useEffect, useState } from 'react';

import { dataServices } from '@/_services/Datamanager';
import Activity from '../components/Activity';
import AverageSesssion from '../components/AverageSesssion';


const Dashboard = () => {

    // const {id} = useParams()

    const [user, setUser] = useState([])
    const [activity, setActivity] = useState([])
    const [averageSessions, setAverageSessions] = useState()
    const [performance, setPerformance] = useState()
    const [performanceKind, setPerformanceKind] = useState()

    useEffect(() => {
        dataServices.get()
            .then(res => setUser(res.data))
            .catch(error => error)
    }, [])

    useEffect(() => {
        dataServices.getActivity()
            .then(res => setActivity(res.data))
            .catch(error => error)
    }, [])

    useEffect(() => {
        dataServices.getAverageSessions()
            .then(res => setAverageSessions(res.data))
            .catch(error => error)
    }, [])

    useEffect(() => {
        dataServices.getPerformance()
            .then(res => setPerformance(res.data.data))
            .then(res => setPerformanceKind(res.data.Kind))
            .catch(error => error)
    }, [])


    return (
        <div className='dashboard'>
            <h1>Bonjour Thomas</h1>
            <Activity />
            <AverageSesssion />
        </div>
    );
};

export default Dashboard;