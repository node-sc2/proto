declare namespace SC2APIProtocol {

    export interface RequestQuery {
        pathing?: Array<RequestQueryPathing>;
        abilities?: Array<RequestQueryAvailableAbilities>;
        placements?: Array<RequestQueryBuildingPlacement>;
        ignoreResourceRequirements?: boolean;
    }

    export interface ResponseQuery {
        pathing?: Array<ResponseQueryPathing>;
        abilities?: Array<ResponseQueryAvailableAbilities>;
        placements?: Array<ResponseQueryBuildingPlacement>;
    }

    export interface RequestQueryPathing {
        startPos?: Point2D;
        unitTag?: number;
        endPos?: Point2D;
    }

    export interface ResponseQueryPathing {
        distance?: number;
    }

    export interface RequestQueryAvailableAbilities {
        unitTag?: number;
    }

    export interface ResponseQueryAvailableAbilities {
        abilities?: Array<AvailableAbility>;
        unitTag?: number;
        unitTypeId?: number;
    }

    export interface RequestQueryBuildingPlacement {
        abilityId?: number;
        targetPos?: Point2D;
        placingUnitTag?: number;
    }

    export interface ResponseQueryBuildingPlacement {
        result?: ActionResult;
    }

}

