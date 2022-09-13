import React from 'react';

import PropTypes from 'prop-types';

import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';

const Score = ({ score }) => {

    /**
     *
     * @const {number} data
     */
    const data = score.score || score.todayScore

    const CustomLegend = ({ payload }) => (
        <div className="chart-legend">
            <div className="chart-legend-1">{payload[0].payload.value * 100}%</div>
            <div className="chart-legend-2">de votre objectif</div>
        </div>
    )

    return (
        <div className='score'>
            <h2 className="chart-title">Score</h2>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        cx={'50%'} cy={'50%'}
                        startAngle={90} endAngle={450}
                        innerRadius={'85%'} outerRadius={'100%'}
                        cornerRadius={'50%'}
                        dataKey="value"
                        data={[{ name: 'score', value: data }, { name: 'total', value: 1 - data }]}
                    >
                        <Cell fill="#E60000" stroke="#E60000" />
                        <Cell fill="transparent" stroke="transparent" />
                    </Pie>
                    <Pie
                        cx={'50%'} cy={'50%'}
                        outerRadius={'85%'}
                        fill="#FFFF"
                        data={[{ name: 'ring', value: 100 }]}
                        dataKey="value"
                    />
                    <Legend
                        verticalAlign="middle"
                        align="center"
                        content={CustomLegend}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

Score.propTypes = {
    score: PropTypes.number.isRequired
}

export default Score;