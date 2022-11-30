import React from 'react'

const CardSkeleton = () => {

    const skeleton = [];

    for (let i = 0; i < 4; i++) {
        skeleton.push(
            <>
                <li className="tarjet loading" >
                    <div className="plate" ></div>
                    <div className="content">
                        <h4></h4>
                        <div className="description">
                        </div>
                    </div>
                </li>
            </>
        )

    }

    return (
        <>
            {skeleton}

        </>
    )
}

export default CardSkeleton