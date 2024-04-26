import React, { useEffect } from "react";
import '../../../styles/dle.css';
import { Attempt } from "@/app/Interfaces/AttemptInfos";
import { checkPrimeSync } from "crypto";

const Attempts = ({ attempts, itemToFind }: { attempts: any, itemToFind: {} }) => {

    const lastAttempt = attempts[attempts.length - 1];

    // Reverse the array to display the last attempt first
    const reverseAttemps = [...attempts].reverse();

    useEffect(() => {
        if (attempts.length === 0) return;
        const validInfos: [] = [];
        
        console.log('last attempt', lastAttempt);
        console.log('last attempt infos', lastAttempt.infos);

        lastAttempt.infos.forEach(info => {
            // Get the same info for the item to find
            const itemToFindInfo = itemToFind.infos.find((itemInfo: any) => itemInfo.label === info.label);

            // Checks if the info is valid
            if (itemToFindInfo.value === info.value) {
                console.log(itemToFindInfo.value, info.value);
                return validInfos.push(info);
            }
        });

        console.log('valid infos', validInfos);
    }, [attempts]);

    return (
        <div className="attempts">
            {reverseAttemps && reverseAttemps.map((attempt: any) => (
                <div className="attempt" key={attempt.id}>
                    {attempt.infos.map((info: any, index: number) => (
                        <div className="attempt-info" key={index}>
                            {Object.entries(info).map(([key, value]) => (
                                <div className="info" key={key}>
                                    <h1>{key}</h1>
                                    <p>{value}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Attempts;