export interface IMove {
    Id: number,
    CharacterId: number,
    Name: string,
    Damage: number | null,
    StartupFrames: number | null,
    ActiveFrames: number | null,
    TotalFrames: number | null,
    CancelWindowStart: number | null,
    CancelWindowEnd: number | null,
    LateCancelWindowStart: number | null,
    LateCancelWindowEnd: number | null,
    WeaponClashStart: number | null,
    WeaponClashEnd: number | null,
    LateWeaponClashStart: number | null,
    LateWeaponClashEnd: number | null
    OnHit: number | null,
    OnBackhit: number | null,
    OnBlock : number | null,
    CausesKnockdown: boolean,
    GuardStanceLevel: number,
    Notes: string
}