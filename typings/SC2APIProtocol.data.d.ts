declare namespace SC2APIProtocol {

    export enum Attribute {
        Light = 1,
        Armored = 2,
        Biological = 3,
        Mechanical = 4,
        Robotic = 5,
        Psionic = 6,
        Massive = 7,
        Structure = 8,
        Hover = 9,
        Heroic = 10,
        Summoned = 11,
    }
    export enum AbilityData_Target {
        None = 1,
        Point = 2,
        Unit = 3,
        PointOrUnit = 4,
        PointOrNone = 5,
    }
    export interface AbilityData {
        abilityId?: number;
        linkName?: string;
        linkIndex?: number;
        buttonName?: string;
        friendlyName?: string;
        hotkey?: string;
        remapsToAbilityId?: number;
        available?: boolean;
        target?: AbilityData_Target;
        allowMinimap?: boolean;
        allowAutocast?: boolean;
        isBuilding?: boolean;
        footprintRadius?: number;
        isInstantPlacement?: boolean;
        castRange?: number;
    }

    export interface DamageBonus {
        attribute?: Attribute;
        bonus?: number;
    }

    export enum Weapon_TargetType {
        Ground = 1,
        Air = 2,
        Any = 3,
    }
    export interface Weapon {
        type?: Weapon_TargetType;
        damage?: number;
        damageBonus?: Array<DamageBonus>;
        attacks?: number;
        range?: number;
        speed?: number;
    }

    export interface UnitTypeData {
        unitId?: number;
        name?: string;
        available?: boolean;
        cargoSize?: number;
        mineralCost?: number;
        vespeneCost?: number;
        foodRequired?: number;
        foodProvided?: number;
        abilityId?: number;
        race?: Race;
        buildTime?: number;
        hasVespene?: boolean;
        hasMinerals?: boolean;
        sightRange?: number;
        techAlias?: Array<number>;
        unitAlias?: number;
        techRequirement?: number;
        requireAttached?: boolean;
        attributes?: Array<Attribute>;
        movementSpeed?: number;
        armor?: number;
        weapons?: Array<Weapon>;
    }

    export interface UpgradeData {
        upgradeId?: number;
        name?: string;
        mineralCost?: number;
        vespeneCost?: number;
        researchTime?: number;
        abilityId?: number;
    }

    export interface BuffData {
        buffId?: number;
        name?: string;
    }

    export interface EffectData {
        effectId?: number;
        name?: string;
        friendlyName?: string;
        radius?: number;
    }

}

