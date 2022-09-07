import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const AverageSession = ({ data }) => {



    const daysWeek = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' }

    const formatDay = (item) => daysWeek[item]

    return (
        <div className='average-session'>
            <h2>Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="day"
                        axisLine={false}
                        tickFormatter={formatDay}
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