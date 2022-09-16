import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'

import { dataServices } from '@/_services/Datamanager';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";


/**
 * Its a function that returns a div with a container with a RadarChart and all of his properties 
 * @return {React.ReactElement} a RadarChart
 */
const Performance = () => {

    /**@param {Number} userId */
    const { userId } = useParams()

    /**
     * getPerformance
     * @param   {string}  userPerformance
     * @param   {Number} userId  
     * @return  {object} data
     */
    const { isLoading, data, error } = useQuery('userPerformance', () => dataServices.getPerformance(userId))
    const userPerformance = data || {}

    if (isLoading) {
        return <div>Loading ...</div>
    }

    if (error) {
        return <div className='network-error'>{error.message}</div>
    }

/**
 * [kind description]
 *
 * @var {[type]}
 */
    const kindFormated = (id) => userPerformance.data.kind[id]

    return (
        <div className='performance'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="75"
                    startAngle={210}
                    endAngle={210 + 360}
                    data={userPerformance.data.data}
                    padding={{ left: 5, right: 5 }}
                >
                    <PolarGrid
                        radialLines={false}
                    />
                    <PolarAngleAxis dataKey="kind"
                        tickFormatter={kindFormated}
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