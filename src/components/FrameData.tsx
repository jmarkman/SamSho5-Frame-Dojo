import React from "react";
import { IMove } from "./models/move";
import "./FrameData.css"

export const DamageAndFrames = ({ move }: { move: IMove }) => {
    return (
        <div className="row">
            <div className="col-3">
                <p className="labelBold">Damage</p>
                <p>{move.Damage}</p>
            </div>
            <div className="col-3">
                <p className="labelBold">Startup Frames</p>
                <p>{move.StartupFrames}</p>
            </div>
            <div className="col-3">
                <p className="labelBold">Active Frames</p>
                <p>{move.ActiveFrames}</p>
            </div>
            <div className="col-3">
                <p className="labelBold">Total Frames</p>
                <p>{move.TotalFrames}</p>
            </div>
        </div>
    );
}

export const CancelClashWindows = ({ move, isCancelWindow }: { move: IMove, isCancelWindow: boolean }) => {

    const buildMoveWindowRange = (windowStart: number | null, windowEnd: number | null) => {
        if (windowStart == null && windowEnd == null) {
            // Both of the windows are null
            return "None";
        } else if (windowStart != null && windowEnd == null) {
            // The move has a single frame where it can be canceled
            return windowStart;
        } else if (windowStart == null) {
            // There is no start window, so the move can't be canceled"
            return "None"
        } else {
            return `${windowStart} - ${windowEnd}`;
        }
    }

    const generateWindowType = (cancelWindow: boolean) => {

        let element: JSX.Element;

        if (cancelWindow) {
            element =
                <div className="row">
                    <div className="col-6">
                        <p className="labelBold">Normal Cancel Window</p>
                        <p>{buildMoveWindowRange(move.CancelWindowStart, move.CancelWindowEnd)}</p>
                    </div>
                    <div className="col-6">
                        <p className="labelBold">Late Cancel Window</p>
                        <p>{buildMoveWindowRange(move.LateCancelWindowStart, move.LateCancelWindowEnd)}</p>
                    </div>
                </div>
        } else {
            element =
                <div className="row">
                    <div className="col-6">
                        <p className="labelBold">Normal Weapon Clash Window</p>
                        <p>{buildMoveWindowRange(move.WeaponClashStart, move.WeaponClashEnd)}</p>
                    </div>
                    <div className="col-6">
                        <p className="labelBold">Late Weapon Clash Window</p>
                        <p>{buildMoveWindowRange(move.LateWeaponClashStart, move.LateWeaponClashEnd)}</p>
                    </div>
                </div>
        }

        return element;
    }

    return generateWindowType(isCancelWindow);
}

export const MoveEffectsOnHit = ({ move }: { move: IMove }) => {
    return (
        <div className="row">
            <div className="col-3">
                <p className="labelBold">On Hit</p>
                <p>{move.OnHit}</p>
            </div>
            <div className="col-3">
                <p className="labelBold">On Backhit</p>
                <p>{move.OnBackhit}</p>
            </div>
            <div className="col-3">
                <p className="labelBold">On Block</p>
                <p>{move.OnBlock}</p>
            </div>
            <div className="col-3">
                <p className="labelBold">Causes Knockdown</p>
                <p>{move.CausesKnockdown ? "Yes" : "No"}</p>
            </div>
        </div>
    );
}