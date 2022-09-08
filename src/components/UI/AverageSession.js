import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'

import { dataServices } from '@/_services/Datamanager';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const AverageSession = () => {
    const { userId } = useParams()

    const { isLoading, data } = useQuery('userAvSession', () => dataServices.getAverageSessions(userId))
    const userAvSession = data || {}

    console.log(userAvSession)

    if (isLoading) {
        return <div>Loading ...</div>
    }

    return (
        <div className='average-session'>
            <h2>Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="day"
                        axisLine={false}
                        tick={{ fill: '#FFFFF' }}
                        tickMargin={10}
                        tickSize={0}
                        padding={{ left: 5, right: 5 }}
                    />
                    <YAxis
                        hide
                        domain={['dataMin-10', 'dataMax+1']}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="#FFFFF"
                        activeDot={{ r: 8 }}
                        dot={{ r: 0 }}
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="linechart-custom-tooltip">
                <p className="tooltipKg">{`${payload[0].value} min`}</p>
            </div>
        );
    }
    return null;
}

export default AverageSession;