import React, { useState } from "react";
import { CancelClashWindows, DamageAndFrames, MoveEffectsOnHit } from "./FrameData";
import { IMove } from "./models/move";
import IMoveNotation from "./models/MoveNotation";
import IMoveNotationMap from "./models/MoveNotationMap";

export const MoveDetails = ({ move }: { move: IMove }) => {

    const [detail, setDetail] = useState(0);

    // TODO: review move names and inputs to come up with larger mapping for
    // move name formatting
    const formatMoveName = (moveName: string) => {
        let moveMap: IMoveNotationMap = {
            "5": { ExtendedName: "Near", Regex: "\\d" },
            "n.5": { ExtendedName: "Near Standing", Regex: "n.\\d" },
            "2": { ExtendedName: "Crouching", Regex: "\\d" },
            "n.2": { ExtendedName: "Near Crouching", Regex: "n.\\d" },
            "6": { ExtendedName: "Forward", Regex: "\\d" },
            "66": { ExtendedName: "Dash", Regex: "\\d\\d" },
            "3": { ExtendedName: "Down-Forward", Regex: "\\d" },
            "8": { ExtendedName: "Up", Regex: "\\d" },
            "j.": { ExtendedName: "Jump", Regex: "\\w\\." },
            "u.": { ExtendedName: "Unarmed", Regex: "\\w\\." },
            "ju.": { ExtendedName: "Jump Unarmed", Regex: "\\w\\w\\." }
        }

        if (moveName.includes('-')) {
            return moveName;
        } else {
            let prefix: string = moveName.split(/[ABCDS]/)[0];
            let moveNotation: IMoveNotation = moveMap[prefix];
            let formattedMove: string = `${moveNotation.ExtendedName} ${moveName.split(moveNotation.Regex)[1]}`;

            return formattedMove;
        }
    }

    const returnMoveDataSection = (section: number) => {
        switch (section) {
            case 0:
                return <DamageAndFrames move={move} />
            case 1:
                return <CancelClashWindows move={move} isCancelWindow={true} />
            case 2:
                return <CancelClashWindows move={move} isCancelWindow={false} />
            case 3:
                return <MoveEffectsOnHit move={move} />
            default:
                break;
        }
    }

    return (
        <div className="p-4">
            <div className="border border-secondary rounded p-2">
                <div className="media">
                    <img className="mr-3" src={require("../media/portraits/thumb.png")} alt="placeholder" height="170px" />
                    <div className="media-body">
                        <h3 className="mt-0">{move.Name}</h3>

                        <div className="btn-group mr-2">
                            <button type="button" className="btn btn-sm btn-outline-primary shadow-none" onClick={() => setDetail(0)}>Damage and Frame Data</button>
                            <button type="button" className="btn btn-sm btn-outline-primary shadow-none" onClick={() => setDetail(1)}>Cancel Windows</button>
                            <button type="button" className="btn btn-sm btn-outline-primary shadow-none" onClick={() => setDetail(2)}>Weapon Clash Windows</button>
                            <button type="button" className="btn btn-sm btn-outline-primary shadow-none" onClick={() => setDetail(3)}>Move Effects On Hit</button>
                        </div>


                        <div>
                            <hr className="my-2" />
                            {returnMoveDataSection(detail)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoveDetails;