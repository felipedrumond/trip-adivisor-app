import React from 'react';
import Activity from './Activity';
import './Common.scss';

const Popular = ({activities}) => {

    console.log(activities);
    return (
        <div>
            <h1>
                Popular around you
            </h1>

            { activities.length > 0 ?
                <div className="items-carousel">
                    {
                        activities.map((activity, i) =>
                            <Activity 
                                activity={activity}
                                style="rectangle"
                                >
                            </Activity>
                        )
                    }
                </div>

                : <div>no popular activities found</div>
            }
        </div>
    )

};

export default Popular;