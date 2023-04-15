import React from 'react';
import './info.css';

function Info(props) {
      const {length,favouritelength} = props
    return (
        <div className="info font-monospace ">
            <h1 className="fs-3 text-uppercase color-danger">All films :{length}</h1>
            <h1 className="fs-3 text-uppercase">Favourite films :{favouritelength}</h1>

        </div>
    );
}

export default Info;