import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'

import { dataServices } from '@/_services/Datamanager';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const AverageSession = () => {

    /**@param {Number} userId */
    const { userId } = useParams()

    /**
     * getAverageSessions
     * @param   {string}  userAvSession
     * @param   {Number} userId  
     * @return  {object} data
     */
    const { isLoading, data } = useQuery('userAvSession', () => dataServices.getAverageSessions(userId))
    const userAvSession = data || {}

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

    if (isLoading) {
        return <div>Loading ...</div>
    }

    return (
        <div className='average-session'>
            <h2>Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userAvSession.data.sessions}>
                    <XAxis dataKey="day"
                        axisLine={false}
                        tick={{ fill: '#FFFF' }}
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
                        stroke="#FFFF"
                        activeDot={{ r: 8 }}
                        dot={{ r: 0 }}
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}



export default AverageSession;