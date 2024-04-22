import React from "react";
import '../../../styles/dle.css';

const Attempt = ({item}: {item: any}) => {
    return (
        <div className="attempt">
            {item.infos && item.infos.map((info: any) => (
                Object.entries(info).map(([key, value]) => (
                    <div className="attempt-info">
                        <h1>{key}</h1>
                        <p>{value}</p>
                    </div>
            ))))}
        </div>
    );
}

export default Attempt;