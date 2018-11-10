declare namespace SC2APIProtocol {

    export enum Score_ScoreType {
        Curriculum = 1,
        Melee = 2,
    }
    export interface Score {
        scoreType?: Score_ScoreType;
        score?: number;
        scoreDetails?: ScoreDetails;
    }

    export interface CategoryScoreDetails {
        none?: number;
        army?: number;
        economy?: number;
        technology?: number;
        upgrade?: number;
    }

    export interface VitalScoreDetails {
        life?: number;
        shields?: number;
        energy?: number;
    }

    export interface ScoreDetails {
        idleProductionTime?: number;
        idleWorkerTime?: number;
        totalValueUnits?: number;
        totalValueStructures?: number;
        killedValueUnits?: number;
        killedValueStructures?: number;
        collectedMinerals?: number;
        collectedVespene?: number;
        collectionRateMinerals?: number;
        collectionRateVespene?: number;
        spentMinerals?: number;
        spentVespene?: number;
        foodUsed?: CategoryScoreDetails;
        killedMinerals?: CategoryScoreDetails;
        killedVespene?: CategoryScoreDetails;
        lostMinerals?: CategoryScoreDetails;
        lostVespene?: CategoryScoreDetails;
        friendlyFireMinerals?: CategoryScoreDetails;
        friendlyFireVespene?: CategoryScoreDetails;
        usedMinerals?: CategoryScoreDetails;
        usedVespene?: CategoryScoreDetails;
        totalUsedMinerals?: CategoryScoreDetails;
        totalUsedVespene?: CategoryScoreDetails;
        totalDamageDealt?: VitalScoreDetails;
        totalDamageTaken?: VitalScoreDetails;
        totalHealed?: VitalScoreDetails;
    }

}

