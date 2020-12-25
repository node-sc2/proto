declare namespace SC2APIProtocol {

	export interface ObservationUI {
		groups?: Array<ControlGroup>;
		single?: SinglePanel;
		multi?: MultiPanel;
		cargo?: CargoPanel;
		production?: ProductionPanel;
	}

	export interface ControlGroup {
		controlGroupIndex?: number;
		leaderUnitType?: number;
		count?: number;
	}

	export interface UnitInfo {
		unitType?: number;
		playerRelative?: number;
		health?: number;
		shields?: number;
		energy?: number;
		transportSlotsTaken?: number;
		buildProgress?: number;
		addOn?: UnitInfo;
	}

	export interface SinglePanel {
		unit?: UnitInfo;
		attackUpgradLevel?: number;
		armorUpgradeLevel?: number;
		shieldUpgradeLevel?: number;
		buffs?: Array<number>;
	}

	export interface MultiPanel {
		units?: Array<UnitInfo>;
	}

	export interface CargoPanel {
		unit?: UnitInfo;
		passengers?: Array<UnitInfo>;
		slotsAvailable?: number;
	}

	export interface ProductionPanel {
		unit?: UnitInfo;
		buildQueue?: Array<UnitInfo>;
	}

	export interface ActionUI {
		controlGroup?: ActionControlGroup;
		selectArmy?: ActionSelectArmy;
		selectWarpGates?: ActionSelectWarpGates;
		selectLarva?: ActionSelectLarva;
		selectIdleWorker?: ActionSelectIdleWorker;
		multiPanel?: ActionMultiPanel;
		cargoPanel?: ActionCargoPanelUnload;
		productionPanel?: ActionProductionPanelRemoveFromQueue;
		toggleAutocast?: ActionToggleAutocast;
	}

	export enum ActionControlGroup_ControlGroupAction {
		Recall = 1,
		Set = 2,
		Append = 3,
		SetAndSteal = 4,
		AppendAndSteal = 5,
	}
	export interface ActionControlGroup {
		action?: ActionControlGroup_ControlGroupAction;
		controlGroupIndex?: number;
	}

	export interface ActionSelectArmy {
		selectionAdd?: boolean;
	}

	export interface ActionSelectWarpGates {
		selectionAdd?: boolean;
	}

	export interface ActionSelectLarva {
	}

	export enum ActionSelectIdleWorker_Type {
		Set = 1,
		Add = 2,
		All = 3,
		AddAll = 4,
	}
	export interface ActionSelectIdleWorker {
		type?: ActionSelectIdleWorker_Type;
	}

	export enum ActionMultiPanel_Type {
		SingleSelect = 1,
		DeselectUnit = 2,
		SelectAllOfType = 3,
		DeselectAllOfType = 4,
	}
	export interface ActionMultiPanel {
		type?: ActionMultiPanel_Type;
		unitIndex?: number;
	}

	export interface ActionCargoPanelUnload {
		unitIndex?: number;
	}

	export interface ActionProductionPanelRemoveFromQueue {
		unitIndex?: number;
	}

	export interface ActionToggleAutocast {
		abilityId?: number;
	}

}

