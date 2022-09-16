import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'

import { dataServices } from '@/_services/Datamanager';

import { LineChart, Line, XAxis, YAxis, Tooltip,Rectangle, ResponsiveContainer } from 'recharts';

/**
 * Its a function that returns a div with a title, a responsive container, a line chart, a line, a y axis, an x axis and a tooltip
 * @return {React.ReactElement} a graph line chart
 */

const AverageSession = () => {

    /**@param {Number} userId */
    const { userId } = useParams()

    /**
     * getAverageSessions
     * @param   {string}  userAvSession
     * @param   {Number} userId  
     * @return  {object} data
     */
    const { isLoading, data, error } = useQuery('userAvSession', () => dataServices.getAverageSessions(userId))
    const userAvSession = data || {}

    if (isLoading) {
        return <div>Loading ...</div>
    }

    if (error) {
        return <div className='network-error'>{error.message}</div>
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

    const CustomCursor = ({ points }) => {
		return (
			<Rectangle
				fill="#000000"
				opacity={0.2}
				x={points[0].x}
				width={500}
				height={300}
			/>
		);
	};

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
                    <Tooltip 
                    content={<CustomTooltip />}
                    cursor= {<CustomCursor/>} />
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