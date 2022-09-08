import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'

import { dataServices } from '@/_services/Datamanager';

import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer
} from "recharts";

const Performance = () => {

    const { userId } = useParams()

    const { isLoading, data } = useQuery('users', () => dataServices.getActivity(userId))
    const userActivity = data || {}

    if (isLoading) {
        return <div>Loading ...</div>
    }

    return (
        <div className='performance'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx={300}
                    cy={250}
                    outerRadius={150}
                    width={500}
                    height={500}
                    data={userActivity}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar
                        name="Mike"
                        dataKey="value"
                        stroke="#8884d8"
                        fill="#FF0101"
                        fillOpacity={0.6}
                    />
                </RadarChart>

            </ResponsiveContainer>

        </div>
    );
};

export default Performance;