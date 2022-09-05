import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Activity = (props) => {


    return (
        <div className='daily-activity'>
            <div className='activity-header'>
                <h2>{props.title}</h2>
            </div>
            <BarChart
                width={835}
                height={320}
                data={props.data}
                margin={{
                    top: 80,
                    right: 50,
                    left: 45,
                    bottom: 20,
                }}
                barSize={7}
                barGap={8}
                barCategoryGap={54}
            >
                <CartesianGrid vertical={false} />

            </BarChart>

        </div>
    );
};

export default Activity;