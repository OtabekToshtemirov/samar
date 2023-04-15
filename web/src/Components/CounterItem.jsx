import React, {useEffect, useState} from 'react';

const CounterItem = ({counterGenerate}) => {
    const [item, setItem ] =useState([]);

    useEffect(() =>{
        const newItem = counterGenerate
        setItem(newItem);
        console.log('render')
    },[counterGenerate])
    return (
        <div>
            <ol>
            {item.map(item => <li>item</li>)}
            </ol>
        </div>
    );
};

export default CounterItem;