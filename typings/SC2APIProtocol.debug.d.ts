declare namespace SC2APIProtocol {

    export enum DebugGameState {
        show_map = 1,
        control_enemy = 2,
        food = 3,
        free = 4,
        all_resources = 5,
        god = 6,
        minerals = 7,
        gas = 8,
        cooldown = 9,
        tech_tree = 10,
        upgrade = 11,
        fast_build = 12,
    }
    export interface DebugCommand {
        draw?: DebugDraw;
        gameState?: DebugGameState;
        createUnit?: DebugCreateUnit;
        killUnit?: DebugKillUnit;
        testProcess?: DebugTestProcess;
        score?: DebugSetScore;
        endGame?: DebugEndGame;
        unitValue?: DebugSetUnitValue;
    }

    export interface DebugDraw {
        text?: Array<DebugText>;
        lines?: Array<DebugLine>;
        boxes?: Array<DebugBox>;
        spheres?: Array<DebugSphere>;
    }

    export interface Line {
        p0?: Point;
        p1?: Point;
    }

    export interface Color {
        r?: number;
        g?: number;
        b?: number;
    }

    export interface DebugText {
        color?: Color;
        text?: string;
        virtualPos?: Point;
        worldPos?: Point;
        size?: number;
    }

    export interface DebugLine {
        color?: Color;
        line?: Line;
    }

    export interface DebugBox {
        color?: Color;
        min?: Point;
        max?: Point;
    }

    export interface DebugSphere {
        color?: Color;
        p?: Point;
        r?: number;
    }

    export interface DebugCreateUnit {
        unitType?: number;
        owner?: number;
        pos?: Point2D;
        quantity?: number;
    }

    export interface DebugKillUnit {
        tag?: Array<number>;
    }

    export enum DebugTestProcess_Test {
        hang = 1,
        crash = 2,
        exit = 3,
    }
    export interface DebugTestProcess {
        test?: DebugTestProcess_Test;
        delayMs?: number;
    }

    export interface DebugSetScore {
        score?: number;
    }

    export enum DebugEndGame_EndResult {
        Surrender = 1,
        DeclareVictory = 2,
    }
    export interface DebugEndGame {
        endResult?: DebugEndGame_EndResult;
    }

    export enum DebugSetUnitValue_UnitValue {
        Energy = 1,
        Life = 2,
        Shields = 3,
    }
    export interface DebugSetUnitValue {
        unitValue?: DebugSetUnitValue_UnitValue;
        value?: number;
        unitTag?: number;
    }

}

