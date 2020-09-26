import React from "react";
import { IMove } from "./models/move";

export const MoveDetails = ({ move }: { move: IMove }) => {

    const buildCancelWindowRange = (windowStart: number, windowEnd: number) => {
        if (windowStart == null || windowEnd == null) {
            console.log("One of the windows was null");
            
        }
    }

    return (
        <div>
            <div className="media p-5">
                <img className="mr-3" src={require("../media/portraits/thumb.png")} alt="placeholder" />
                <div className="media-body">
                    <h5 className="mt-0">{move.Name}</h5>
                    <div className="row">
                        <div className="col-3">Damage: {move.Damage}</div>
                        <div className="col-3">Startup Frames: {move.StartupFrames}</div>
                        <div className="col-3">Active Frames: {move.ActiveFrames}</div>
                        <div className="col-3">Total Frames: {move.TotalFrames}</div>
                    </div>
                    <div className="row">
                        <div className="col-3">Cancel Window Start: {move.CancelWindowStart}</div>
                        <div className="col-3">Cancel Window End: {move.CancelWindowEnd}</div>
                        <div className="col-3">Late Cancel Window Start: {move.LateCancelWindowStart}</div>
                        <div className="col-3">Late Cancel Window End: {move.LateCancelWindowEnd}</div>
                    </div>
                    <div className="row">
                        <div className="col-3">Weapon Clash Start: {move.WeaponClashStart}</div>
                        <div className="col-3">Weapon Clash End: {move.WeaponClashEnd}</div>
                        <div className="col-3">Late Weapon Clash Start: {move.LateWeaponClashStart}</div>
                        <div className="col-3">Late Weapon Clash End: {move.LateWeaponClashEnd}</div>
                    </div>
                    <div className="row">
                        <div className="col-3">On Hit: {move.OnHit}</div>
                        <div className="col-3">On Backhit: {move.OnBackhit}</div>
                        <div className="col-3">On Block: {move.OnBlock}</div>
                        <div className="col-3">Causes Knockdown: {move.CausesKnockdown}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoveDetails;