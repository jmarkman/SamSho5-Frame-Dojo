/**
 * Represents a move that a given character can perform
 */
export interface IMove {
    /**
     * The numeric ID of the move in the database
     */
    Id: number,
    /**
     * The numeric ID of the character this move is associated with
     */
    CharacterId: number,
    /**
     * The numpad notation for this move
     */
    Name: string,
    /**
     * The extended human-readable name of this move
     */
    DisplayName: string,
    /**
     * The damage this move deals when it makes contact with an opponent who isn't blocking
     */
    Damage: number | null,
    /**
     * The number of frames of animation this move takes to go from the character being idle
     * to being "active"
     */
    StartupFrames: number | null,
    /**
     * The number of frames of animation where this move can deal damage to an opponent before
     * winding down
     */
    ActiveFrames: number | null,
    /**
     * The total number of frames of animation this move has: startup, active, and wind-down
     */
    TotalFrames: number | null,
    /**
     * The first frame this move can be canceled into another move or special move
     */
    CancelWindowStart: number | null,
    /**
     * The last frame this move can be canceled into another move or special move
     */
    CancelWindowEnd: number | null,
    /**
     * If the move can be canceled into another in a later part of the animation,
     * this is the first frame this move can be canceled in the subsequent cancel window
     */
    LateCancelWindowStart: number | null,
    /**
     * If the move can be canceled into another in a later part of the animation,
     * this is the last frame this move can be canceled in the subsequent cancel window
     */
    LateCancelWindowEnd: number | null,
    /**
     * The first frame this move can trigger a weapon clash if its active frames hit
     * the opponent's move during its active frames
     */
    WeaponClashStart: number | null,
    /**
     * The last frame this move can trigger a weapon clash if its active frames hit
     * the opponent's move during its active frames
     */
    WeaponClashEnd: number | null,
    /**
     * If the move can trigger a weapon clash in a later part of the animation, this
     * is the first frame that the move can clash on in the subsequent part
     */
    LateWeaponClashStart: number | null,
    /**
     * If the move can trigger a weapon clash in a later part of the animation, this
     * is the last frame that the move can clash on in the subsequent part
     */
    LateWeaponClashEnd: number | null
    /**
     * When the move hits the opponent and deals damage, this is the number of frames 
     * of advantage this move gives the user, i.e. +4 on hit means that the user can
     * input a subsequent move 4 frames earlier than usual
     */
    OnHit: number | null,
    /**
     * When the move hits the opponent's back, i.e. when a player jumps over their
     * opponent and uses a move with a hithox that extends behind them, this is the
     * number of frames of advantage this gives the user
     */
    OnBackhit: number | null,
    /**
     * When this move hits the opponent and the opponent successfully blocks it,
     * this is the number of frames that the user is in disadvantage for, i.e.
     * the user being -4 on block means that their opponent can retaliate with a
     * move that has 3 startup frames before the user can block
     */
    OnBlock : number | null,
    /**
     * Some moves can knock the opponent down on their back, conveying a different
     * type of advantage for the user. If the move can knock the opponent down,
     * this will be True
     */
    CausesKnockdown: boolean,
    /**
     * The numbers associated with this property denote what height level the move
     * will strike at.
     * 
     * 0 = Low. The move will strike at the opponent's feet, hitting if the opponent doesn't block low.
     * 1 = Mid. The move will strike at the opponent's torso, hitting if the opponent doesn't block.
     * 2 = High. The move will strike above an opponent, hitting if the opponent blocks low but not if the opponent blocks mid.
     */
    GuardStanceLevel: number,
    /**
     * Extraneous notes about the move that aren't covered by frame data
     */
    Notes: string
}