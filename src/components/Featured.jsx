import React from 'react';
import Activity from './Activity';
import './Common.scss';

const Featured = ({activities}) => {

    return (
        <div>
            <h1>
                Featured
            </h1>

            { activities.length > 0 ?
                <div className="items">
                    {
                        activities.map(activity =>
                            <Activity 
                                activity={activity}
                                style="square">
                            </Activity>
                        )
                    }
                </div>

                : <div>no featured activities found</div>
            }
        </div>
    )
};

export default Featured;