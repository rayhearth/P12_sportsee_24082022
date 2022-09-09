import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'

import { dataServices } from '@/_services/Datamanager';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

const Performance = () => {

    const { userId } = useParams()

    const { isLoading, data } = useQuery('userPerformance', () => dataServices.getPerformance(userId))
    const userPerformance = data || {}

    console.log(userPerformance)

    if (isLoading) {
        return <div>Loading ...</div>
    }

    return (
        <div className='performance'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    data={userPerformance.data.data}
                >
                    <PolarGrid
                        radialLines={false}
                    />
                    <PolarAngleAxis dataKey="kind"
                        tickLine={false}
                        axisLine={false}
                        dy={5}
                        stroke="#FFFF"
                        fill="#FFFF"
                    />
                    <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
                    <Radar
                        dataKey="value"
                        fill="#FF0000"
                        fillOpacity={0.6}
                    />
                </RadarChart>

            </ResponsiveContainer>

        </div>
    );
};

export default Performance;