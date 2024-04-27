import React from "react";

const AttemptDetails = ({ name, details }: { name: string, details: [] }) => {
    return(
        <div className="attempt">
            <div className="attempt-info correct">
                <p>{name}</p>
            </div>
            {name && details && details.map((detail: any, index: number) => (
                <div className="detail" key={index}>

                    {Object.entries(detail).map(([key, value]) => (
                        <div className="attempt-info correct" key={key}>
                            <p>{value}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default AttemptDetails;