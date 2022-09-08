import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'

import { dataServices } from '@/_services/Datamanager';

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Activity = () => {
    
    const { userId } = useParams()

    const { isLoading, data } = useQuery('userActivity', () => dataServices.getActivity(userId))
    const userActivity = data || {}

    console.log(userActivity)

    if (isLoading) {
        return <div>Loading ...</div>
    }

    return (
        <div className='daily-activity'>

            <h2 className='charts-title'>Activité quotidienne</h2>
            <ul className='charts-legend'>
                <li>Poids (kg)</li>
                <li>Calories brûlées (Kcal)</li>
            </ul>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={userActivity.sessions}>
                    <CartesianGrid strokeDasharray="2" vertical={false} />
                    <XAxis
                        dataKey="day"
                        tickMargin={16}
                        tickSize={0}
                        minTickGap={30}
                    />
                    <YAxis
                        yAxisId="kilogram"
                        orientation='right'
                        tickMargin={40}
                        tickSize={0}
                        axisLine={false}
                        domain={['dataMin-5', 'dataMax+0']}
                        interval={'preserveEnd'}
                        tickCount={3}
                    />
                    <YAxis
                        yAxisId="calories"
                        hide
                        orientation='right'
                        domain={['dataMin-100', 'dataMax+0']}
                    />
                    <Tooltip />
                    <Bar
                        yAxisId="kilogram"
                        dataKey="kilogram"
                        fill="#282D30"
                        barSize={10}
                        radius={[5, 5, 0, 0]}
                    />
                    <Bar
                        yAxisId="calories"
                        dataKey="calories"
                        fill="#E60000"
                        barSize={10}
                        radius={[5, 5, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}


export default Activity;