import React, { useEffect } from "react";
import '../../../styles/dle.css';
import { Attempt } from "@/app/Interfaces/AttemptInfos";
import { checkPrimeSync } from "crypto";
import AttemptDetails from "./attemptDetails";

const Attempts = ({ attempts, itemToFind }: { attempts: any, itemToFind: {} }) => {

    const lastAttempt = attempts[attempts.length - 1];

    // Reverse the array to display the last attempt first
    const reverseAttemps = [...attempts].reverse();

    useEffect(() => {
        if (attempts.length === 0) return;
        const validInfos: [JSON] = [];

        lastAttempt.infos.forEach((info: JSON) => {
            // Get the same info for the item to find
            const itemToFindInfo: JSON = itemToFind.infos.find((itemInfo: any) => itemInfo.hasOwnProperty(Object.keys(info)[0]));

            if (itemToFindInfo === undefined) {
                console.error('Unable to find the matching info in the item to find', info);
                return;
            }

            // Get the values to compare
            const itemToFindValue = Object.values(itemToFindInfo)[0];
            const currentItemValue = Object.values(info)[0];

            // Checks if the info is valid
            if (itemToFindValue === currentItemValue) {
                console.log(itemToFindInfo, info);
                return validInfos.push(info);
            }
        });

        console.log('valid infos', validInfos);
    }, [attempts]);

    return (
        <div className="attempts">
            {/* Display the names of the columns */}
            <div className="attempt-header">
                <h1>Name</h1>
                {itemToFind && itemToFind.infos.map((info: any, index: number) => (
                    <div key={index}>
                        {Object.entries(info).map(([key, value]) => (
                            <div key={key}>
                                <h1>{key}</h1>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {/* Display all the attempts */}
            {reverseAttemps && reverseAttemps.map((attempt: any) => (
                <div key={attempt.id}>
                    <AttemptDetails name={attempt.name} details={attempt.infos} />
                </div>
            ))}
        </div>
    );
}

export default Attempts;