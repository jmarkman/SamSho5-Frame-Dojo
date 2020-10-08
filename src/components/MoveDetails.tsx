import React, { useState } from "react";
import { CancelClashWindows, DamageAndFrames, MoveEffectsOnHit } from "./FrameData";
import { IMove } from "./models/move";

export const MoveDetails = ({ move, characterName }: { move: IMove, characterName: string }) => {

    const [detail, setDetail] = useState(0);

    const formatMoveNameToImageName = (moveName: string) => {
        let formattedFileName: string = moveName;
        
        if (moveName.includes('/')) {
            formattedFileName = moveName.replace('/', '-' );
        }

        return formattedFileName.toLowerCase();
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
                    <img className="mr-3" src={require(`../media/moves/${characterName.toLowerCase()}/${formatMoveNameToImageName(move.Name)}.png`)} alt="placeholder"/>
                    <div className="media-body">
                        <h3 className="mt-0">{move.DisplayName}</h3>

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