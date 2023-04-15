import React from 'react';
import './filter.css';


const btnsArr = [
    {name: 'all', label: 'All films',},
    {name: 'popular', label: 'Favourite',},
    {name: 'mostViewed', label: 'Most viewed',},

]
function Filter({filterUpdateHandler, filter}) {
    return (
        <div className="btn-group">
            {btnsArr.map((item, index) => {
                return (
                    <button
                        type="button"
                        className={`btn  ${filter=== item.name ? 'btn-dark' : 'btn-outline-dark'}`}
                        key={index}
                        onClick={() =>filterUpdateHandler(item.name)}

                    >
                        {item.label}
                    </button>
                )
            }
            )}
        </div>
    );
}

export default Filter;