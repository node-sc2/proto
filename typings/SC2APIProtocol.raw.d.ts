declare namespace SC2APIProtocol {

    export enum DisplayType {
        Visible = 1,
        Snapshot = 2,
        Hidden = 3,
    }

    export enum Alliance {
        Self = 1,
        Ally = 2,
        Neutral = 3,
        Enemy = 4,
    }

    export enum CloakState {
        Cloaked = 1,
        CloakedDetected = 2,
        NotCloaked = 3,
    }

    export interface StartRaw {
        mapSize?: Size2DI;
        pathingGrid?: ImageData;
        terrainHeight?: ImageData;
        placementGrid?: ImageData;
        playableArea?: RectangleI;
        startLocations?: Array<Point2D>;
    }

    export interface ObservationRaw {
        player?: PlayerRaw;
        units?: Array<Unit>;
        mapState?: MapState;
        event?: Event;
        effects?: Array<Effect>;
    }

    export interface PowerSource {
        pos?: Point;
        radius?: number;
        tag?: string;
    }

    export interface PlayerRaw {
        powerSources?: Array<PowerSource>;
        camera?: Point;
        upgradeIds?: Array<number>;
    }

    export interface UnitOrder {
        abilityId?: number;
        targetWorldSpacePos?: Point;
        targetUnitTag?: string;
        progress?: number;
    }

    export interface PassengerUnit {
        tag?: string;
        health?: number;
        healthMax?: number;
        shield?: number;
        shieldMax?: number;
        energy?: number;
        energyMax?: number;
        unitType?: number;
    }

    export interface Unit {
        displayType?: DisplayType;
        alliance?: Alliance;
        tag?: string;
        unitType?: number;
        owner?: number;
        pos?: Point;
        facing?: number;
        radius?: number;
        buildProgress?: number;
        cloak?: CloakState;
        detectRange?: number;
        radarRange?: number;
        isSelected?: boolean;
        isOnScreen?: boolean;
        isBlip?: boolean;
        isPowered?: boolean;
        health?: number;
        healthMax?: number;
        shield?: number;
        shieldMax?: number;
        energy?: number;
        energyMax?: number;
        mineralContents?: number;
        vespeneContents?: number;
        isFlying?: boolean;
        isBurrowed?: boolean;
        orders?: Array<UnitOrder>;
        addOnTag?: string;
        passengers?: Array<PassengerUnit>;
        cargoSpaceTaken?: number;
        cargoSpaceMax?: number;
        buffIds?: Array<number>;
        assignedHarvesters?: number;
        idealHarvesters?: number;
        weaponCooldown?: number;
        engagedTargetTag?: string;
    }

    export interface MapState {
        visibility?: ImageData;
        creep?: ImageData;
    }

    export interface Event {
        deadUnits?: Array<string>;
    }

    export interface Effect {
        effectId?: number;
        pos?: Array<Point2D>;
    }

    export interface ActionRaw {
        unitCommand?: ActionRawUnitCommand;
        cameraMove?: ActionRawCameraMove;
        toggleAutocast?: ActionRawToggleAutocast;
    }

    export interface ActionRawUnitCommand {
        abilityId?: number;
        targetWorldSpacePos?: Point2D;
        targetUnitTag?: string;
        unitTags?: Array<string>;
        queueCommand?: boolean;
    }

    export interface ActionRawCameraMove {
        centerWorldSpace?: Point;
    }

    export interface ActionRawToggleAutocast {
        abilityId?: number;
        unitTags?: Array<string>;
    }

}

