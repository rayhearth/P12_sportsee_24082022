import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Activity = ({ activity }) => {
    
    const formatDay = (item) => (new Date(item)).getDate()


    return (
        <div className='daily-activity'>

            <h2 className='charts-title'>Activité quotidienne</h2>
            <ul className='charts-legend'>
                <li>Poids (kg)</li>
                <li>Calories brûlées (Kcal)</li>
            </ul>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activity}>
                    <CartesianGrid strokeDasharray="2" vertical={false} />
                    <XAxis
                        dataKey="day"
                        tickMargin={16}
                        tickFormatter={formatDay}
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
                    <Tooltip content={<CustomTooltip />} />
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
                        fill="transparent"
                        barSize={3}
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

const CustomTooltip = ({ active, payload }) => active ? (
    <div className="chart-tooltip">
        <div>{payload[0].value}kg</div>
        <div>{payload[1].value}kCal</div>
    </div>
) : null

export default Activity;