declare namespace SC2APIProtocol {

    export enum Race {
        NoRace = 0,
        Terran = 1,
        Zerg = 2,
        Protoss = 3,
        Random = 4,
    }
    export interface AvailableAbility {
        abilityId?: number;
        requiresPoint?: boolean;
    }

    export interface ImageData {
        bitsPerPixel?: number;
        size?: Size2DI;
        data?: Uint8Array;
    }

    export interface PointI {
        x?: number;
        y?: number;
    }

    export interface RectangleI {
        p0?: PointI;
        p1?: PointI;
    }

    export interface Point2D {
        x?: number;
        y?: number;
    }

    export interface Point {
        x?: number;
        y?: number;
        z?: number;
    }

    export interface Size2DI {
        x?: number;
        y?: number;
    }

}

