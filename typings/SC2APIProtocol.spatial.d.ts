declare namespace SC2APIProtocol {

    export interface ObservationFeatureLayer {
        renders?: FeatureLayers;
        minimapRenders?: FeatureLayersMinimap;
    }

    export interface FeatureLayers {
        heightMap?: ImageData;
        visibilityMap?: ImageData;
        creep?: ImageData;
        power?: ImageData;
        playerId?: ImageData;
        unitType?: ImageData;
        selected?: ImageData;
        unitHitPoints?: ImageData;
        unitHitPointsRatio?: ImageData;
        unitEnergy?: ImageData;
        unitEnergyRatio?: ImageData;
        unitShields?: ImageData;
        unitShieldsRatio?: ImageData;
        playerRelative?: ImageData;
        unitDensityAa?: ImageData;
        unitDensity?: ImageData;
        effects?: ImageData;
    }

    export interface FeatureLayersMinimap {
        heightMap?: ImageData;
        visibilityMap?: ImageData;
        creep?: ImageData;
        camera?: ImageData;
        playerId?: ImageData;
        playerRelative?: ImageData;
        selected?: ImageData;
        unitType?: ImageData;
    }

    export interface ObservationRender {
        map?: ImageData;
        minimap?: ImageData;
    }

    export interface ActionSpatial {
        unitCommand?: ActionSpatialUnitCommand;
        cameraMove?: ActionSpatialCameraMove;
        unitSelectionPoint?: ActionSpatialUnitSelectionPoint;
        unitSelectionRect?: ActionSpatialUnitSelectionRect;
    }

    export interface ActionSpatialUnitCommand {
        abilityId?: number;
        targetScreenCoord?: PointI;
        targetMinimapCoord?: PointI;
        queueCommand?: boolean;
    }

    export interface ActionSpatialCameraMove {
        centerMinimap?: PointI;
    }

    export enum ActionSpatialUnitSelectionPoint_Type {
        Select = 1,
        Toggle = 2,
        AllType = 3,
        AddAllType = 4,
    }
    export interface ActionSpatialUnitSelectionPoint {
        selectionScreenCoord?: PointI;
        type?: ActionSpatialUnitSelectionPoint_Type;
    }

    export interface ActionSpatialUnitSelectionRect {
        selectionScreenCoord?: Array<RectangleI>;
        selectionAdd?: boolean;
    }

}

