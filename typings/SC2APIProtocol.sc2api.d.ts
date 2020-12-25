declare namespace SC2APIProtocol {

	export enum Status {
		launched = 1,
		init_game = 2,
		in_game = 3,
		in_replay = 4,
		ended = 5,
		quit = 6,
		unknown = 99,
	}
	export enum Difficulty {
		VeryEasy = 1,
		Easy = 2,
		Medium = 3,
		MediumHard = 4,
		Hard = 5,
		Harder = 6,
		VeryHard = 7,
		CheatVision = 8,
		CheatMoney = 9,
		CheatInsane = 10,
	}
	export enum PlayerType {
		Participant = 1,
		Computer = 2,
		Observer = 3,
	}
	export enum Alert {
		NuclearLaunchDetected = 1,
		NydusWormDetected = 2,
		AlertError = 3,
		AddOnComplete = 4,
		BuildingComplete = 5,
		BuildingUnderAttack = 6,
		LarvaHatched = 7,
		MergeComplete = 8,
		MineralsExhausted = 9,
		MorphComplete = 10,
		MothershipComplete = 11,
		MULEExpired = 12,
		NukeComplete = 13,
		ResearchComplete = 14,
		TrainError = 15,
		TrainUnitComplete = 16,
		TrainWorkerComplete = 17,
		TransformationComplete = 18,
		UnitUnderAttack = 19,
		UpgradeComplete = 20,
		VespeneExhausted = 21,
		WarpInComplete = 22,
	}
	export enum Result {
		Victory = 1,
		Defeat = 2,
		Tie = 3,
		Undecided = 4,
	}
	export interface Request {
		createGame?: RequestCreateGame;
		joinGame?: RequestJoinGame;
		restartGame?: RequestRestartGame;
		startReplay?: RequestStartReplay;
		leaveGame?: RequestLeaveGame;
		quickSave?: RequestQuickSave;
		quickLoad?: RequestQuickLoad;
		quit?: RequestQuit;
		gameInfo?: RequestGameInfo;
		observation?: RequestObservation;
		action?: RequestAction;
		obsAction?: RequestObserverAction;
		step?: RequestStep;
		data?: RequestData;
		query?: RequestQuery;
		saveReplay?: RequestSaveReplay;
		mapCommand?: RequestMapCommand;
		replayInfo?: RequestReplayInfo;
		availableMaps?: RequestAvailableMaps;
		saveMap?: RequestSaveMap;
		ping?: RequestPing;
		debug?: RequestDebug;
	}

	export interface Response {
		createGame?: ResponseCreateGame;
		joinGame?: ResponseJoinGame;
		restartGame?: ResponseRestartGame;
		startReplay?: ResponseStartReplay;
		leaveGame?: ResponseLeaveGame;
		quickSave?: ResponseQuickSave;
		quickLoad?: ResponseQuickLoad;
		quit?: ResponseQuit;
		gameInfo?: ResponseGameInfo;
		observation?: ResponseObservation;
		action?: ResponseAction;
		obsAction?: ResponseObserverAction;
		step?: ResponseStep;
		data?: ResponseData;
		query?: ResponseQuery;
		saveReplay?: ResponseSaveReplay;
		replayInfo?: ResponseReplayInfo;
		availableMaps?: ResponseAvailableMaps;
		saveMap?: ResponseSaveMap;
		mapCommand?: ResponseMapCommand;
		ping?: ResponsePing;
		debug?: ResponseDebug;
		error?: Array<string>;
		status?: Status;
	}

	export interface RequestCreateGame {
		localMap?: LocalMap;
		battlenetMapName?: string;
		playerSetup?: Array<PlayerSetup>;
		disableFog?: boolean;
		randomSeed?: number;
		realtime?: boolean;
	}

	export interface LocalMap {
		mapPath?: string;
		mapData?: Uint8Array;
	}

	export enum ResponseCreateGame_Error {
		MissingMap = 1,
		InvalidMapPath = 2,
		InvalidMapData = 3,
		InvalidMapName = 4,
		InvalidMapHandle = 5,
		MissingPlayerSetup = 6,
		InvalidPlayerSetup = 7,
		MultiplayerUnsupported = 8,
	}
	export interface ResponseCreateGame {
		error?: ResponseCreateGame_Error;
		errorDetails?: string;
	}

	export interface RequestJoinGame {
		race?: Race;
		observedPlayerId?: number;
		options?: InterfaceOptions;
		serverPorts?: PortSet;
		clientPorts?: Array<PortSet>;
		sharedPort?: number;
		playerName?: string;
	}

	export interface PortSet {
		gamePort?: number;
		basePort?: number;
	}

	export enum ResponseJoinGame_Error {
		MissingParticipation = 1,
		InvalidObservedPlayerId = 2,
		MissingOptions = 3,
		MissingPorts = 4,
		GameFull = 5,
		LaunchError = 6,
		FeatureUnsupported = 7,
		NoSpaceForUser = 8,
		MapDoesNotExist = 9,
		CannotOpenMap = 10,
		ChecksumError = 11,
		NetworkError = 12,
		OtherError = 13,
	}
	export interface ResponseJoinGame {
		playerId?: number;
		error?: ResponseJoinGame_Error;
		errorDetails?: string;
	}

	export interface RequestRestartGame {
	}

	export enum ResponseRestartGame_Error {
		LaunchError = 1,
	}
	export interface ResponseRestartGame {
		error?: ResponseRestartGame_Error;
		errorDetails?: string;
	}

	export interface RequestStartReplay {
		replayPath?: string;
		replayData?: Uint8Array;
		mapData?: Uint8Array;
		observedPlayerId?: number;
		options?: InterfaceOptions;
		disableFog?: boolean;
		realtime?: boolean;
	}

	export enum ResponseStartReplay_Error {
		MissingReplay = 1,
		InvalidReplayPath = 2,
		InvalidReplayData = 3,
		InvalidMapData = 4,
		InvalidObservedPlayerId = 5,
		MissingOptions = 6,
		LaunchError = 7,
	}
	export interface ResponseStartReplay {
		error?: ResponseStartReplay_Error;
		errorDetails?: string;
	}

	export interface RequestMapCommand {
		triggerCmd?: string;
	}

	export enum ResponseMapCommand_Error {
		NoTriggerError = 1,
	}
	export interface ResponseMapCommand {
		error?: ResponseMapCommand_Error;
		errorDetails?: string;
	}

	export interface RequestLeaveGame {
	}

	export interface ResponseLeaveGame {
	}

	export interface RequestQuickSave {
	}

	export interface ResponseQuickSave {
	}

	export interface RequestQuickLoad {
	}

	export interface ResponseQuickLoad {
	}

	export interface RequestQuit {
	}

	export interface ResponseQuit {
	}

	export interface RequestGameInfo {
	}

	export interface ResponseGameInfo {
		mapName?: string;
		modNames?: Array<string>;
		localMapPath?: string;
		playerInfo?: Array<PlayerInfo>;
		startRaw?: StartRaw;
		options?: InterfaceOptions;
	}

	export interface RequestObservation {
		disableFog?: boolean;
	}

	export interface ResponseObservation {
		actions?: Array<Action>;
		actionErrors?: Array<ActionError>;
		observation?: Observation;
		playerResult?: Array<PlayerResult>;
		chat?: Array<ChatReceived>;
	}

	export interface ChatReceived {
		playerId?: number;
		message?: string;
	}

	export interface RequestAction {
		actions?: Array<Action>;
	}

	export interface ResponseAction {
		result?: Array<ActionResult>;
	}

	export interface RequestObserverAction {
		actions?: Array<ObserverAction>;
	}

	export interface ResponseObserverAction {
	}

	export interface RequestStep {
		count?: number;
	}

	export interface ResponseStep {
	}

	export interface RequestData {
		abilityId?: boolean;
		unitTypeId?: boolean;
		upgradeId?: boolean;
		buffId?: boolean;
		effectId?: boolean;
	}

	export interface ResponseData {
		abilities?: Array<AbilityData>;
		units?: Array<UnitTypeData>;
		upgrades?: Array<UpgradeData>;
		buffs?: Array<BuffData>;
		effects?: Array<EffectData>;
	}

	export interface RequestSaveReplay {
	}

	export interface ResponseSaveReplay {
		data?: Uint8Array;
	}

	export interface RequestReplayInfo {
		replayPath?: string;
		replayData?: Uint8Array;
		downloadData?: boolean;
	}

	export interface PlayerInfoExtra {
		playerInfo?: PlayerInfo;
		playerResult?: PlayerResult;
		playerMmr?: number;
		playerApm?: number;
	}

	export enum ResponseReplayInfo_Error {
		MissingReplay = 1,
		InvalidReplayPath = 2,
		InvalidReplayData = 3,
		ParsingError = 4,
		DownloadError = 5,
	}
	export interface ResponseReplayInfo {
		mapName?: string;
		localMapPath?: string;
		playerInfo?: Array<PlayerInfoExtra>;
		gameDurationLoops?: number;
		gameDurationSeconds?: number;
		gameVersion?: string;
		dataVersion?: string;
		dataBuild?: number;
		baseBuild?: number;
		error?: ResponseReplayInfo_Error;
		errorDetails?: string;
	}

	export interface RequestAvailableMaps {
	}

	export interface ResponseAvailableMaps {
		localMapPaths?: Array<string>;
		battlenetMapNames?: Array<string>;
	}

	export interface RequestSaveMap {
		mapPath?: string;
		mapData?: Uint8Array;
	}

	export enum ResponseSaveMap_Error {
		InvalidMapData = 1,
	}
	export interface ResponseSaveMap {
		error?: ResponseSaveMap_Error;
	}

	export interface RequestPing {
	}

	export interface ResponsePing {
		gameVersion?: string;
		dataVersion?: string;
		dataBuild?: number;
		baseBuild?: number;
	}

	export interface RequestDebug {
		debug?: Array<DebugCommand>;
	}

	export interface ResponseDebug {
	}

	export enum AIBuild {
		RandomBuild = 1,
		Rush = 2,
		Timing = 3,
		Power = 4,
		Macro = 5,
		Air = 6
	}

	export interface PlayerSetup {
		type?: PlayerType;
		race?: Race;
		difficulty?: Difficulty;
		playerName?: string;
		aiBuild?: AIBuild;
	}

	export interface SpatialCameraSetup {
		width?: number;
		resolution?: Size2DI;
		minimapResolution?: Size2DI;
		cropToPlayableArea?: boolean;
		allowCheatingLayers?: boolean;
		rawCropToPlayableArea?: boolean;
	}

	export interface InterfaceOptions {
		raw?: boolean;
		score?: boolean;
		rawCropToPlayableArea?: Boolean
		featureLayer?: SpatialCameraSetup;
		render?: SpatialCameraSetup;
		showCloaked?: boolean;
		showBurrowedShadows?: boolean;
		showPlaceholders?: boolean;
	}

	export interface PlayerInfo {
		playerId?: number;
		type?: PlayerType;
		raceRequested?: Race;
		raceActual?: Race;
		difficulty?: Difficulty;
		playerName?: string;
	}

	export interface PlayerCommon {
		playerId?: number;
		minerals?: number;
		vespene?: number;
		foodCap?: number;
		foodUsed?: number;
		foodArmy?: number;
		foodWorkers?: number;
		idleWorkerCount?: number;
		armyCount?: number;
		warpGateCount?: number;
		larvaCount?: number;
	}

	export interface Observation {
		gameLoop?: number;
		playerCommon?: PlayerCommon;
		alerts?: Array<Alert>;
		abilities?: Array<AvailableAbility>;
		score?: Score;
		rawData?: ObservationRaw;
		featureLayerData?: ObservationFeatureLayer;
		renderData?: ObservationRender;
		uiData?: ObservationUI;
	}

	export interface Action {
		actionRaw?: ActionRaw;
		actionFeatureLayer?: ActionSpatial;
		actionRender?: ActionSpatial;
		actionUi?: ActionUI;
		actionChat?: ActionChat;
	}

	export enum ActionChat_Channel {
		Broadcast = 1,
		Team = 2,
	}

	export interface ActionChat {
		channel?: ActionChat_Channel;
		message?: string;
	}

	export interface ActionError {
		unitTag?: string;
		abilityId?: string;
		result?: ActionResult;
	}

	export interface ObserverAction {
		playerPerspective?: ActionObserverPlayerPerspective;
		cameraMove?: ActionObserverCameraMove;
		cameraFollowPlayer?: ActionObserverCameraFollowPlayer;
		cameraFollowUnits?: ActionObserverCameraFollowUnits;
	}

	export interface ActionObserverPlayerPerspective {
		playerId?: number;
	}

	export interface ActionObserverCameraMove {
		worldPos?: Point2D;
		distance?: number;
	}

	export interface ActionObserverCameraFollowPlayer {
		playerId?: number;
	}

	export interface ActionObserverCameraFollowUnits {
		unitTags?: Array<string>;
	}

	export interface PlayerResult {
		playerId?: number;
		result?: Result;
	}

}

