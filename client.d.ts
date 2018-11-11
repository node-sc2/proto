/// <reference path="./typings/SC2APIProtocol.sc2api.d.ts" />
/// <reference path="./typings/SC2APIProtocol.query.d.ts" />
/// <reference path="./typings/SC2APIProtocol.common.d.ts" />
/// <reference path="./typings/SC2APIProtocol.data.d.ts" />
/// <reference path="./typings/SC2APIProtocol.debug.d.ts" />
/// <reference path="./typings/SC2APIProtocol.error.d.ts" />
/// <reference path="./typings/SC2APIProtocol.raw.d.ts" />
/// <reference path="./typings/SC2APIProtocol.score.d.ts" />
/// <reference path="./typings/SC2APIProtocol.spatial.d.ts" />
/// <reference path="./typings/SC2APIProtocol.ui.d.ts" />

import WebSocket from 'ws';
import { EventEmitter } from 'events';

type ProtoOptions = {
    host?: string;
    port?: number;
}

declare function NodeSC2Proto(): NodeSC2Proto.ProtoClient;

declare namespace NodeSC2Proto {
	export type ApiFunctions = {
		debug: (debugRequest: SC2APIProtocol.RequestDebug) => Promise<SC2APIProtocol.ResponseDebug>;
		action: (action: SC2APIProtocol.RequestAction) => Promise<SC2APIProtocol.ResponseAction>;
		createGame: (game: SC2APIProtocol.RequestCreateGame) => Promise<SC2APIProtocol.ResponseCreateGame>;
		data: (data: SC2APIProtocol.RequestData) => Promise<SC2APIProtocol.ResponseData>;
		joinGame: (joinGame: SC2APIProtocol.RequestJoinGame) => Promise<SC2APIProtocol.ResponseJoinGame>;
		connect: (opts: ProtoOptions) => Promise<SC2APIProtocol.ResponsePing>;
		ping: () => Promise<SC2APIProtocol.ResponsePing>;
		gameInfo: () => Promise<SC2APIProtocol.ResponseGameInfo>;
		observation: () => Promise<SC2APIProtocol.ResponseObservation>;
		query: (query: SC2APIProtocol.RequestQuery) => Promise<SC2APIProtocol.ResponseQuery>;
		step: (step: SC2APIProtocol.RequestStep) => Promise<SC2APIProtocol.ResponseStep>;
	}

	export interface ProtoClient extends ApiFunctions {
		_ws: WebSocket;
		_promiseQueue?: any;
		_protoApiQueue: EventEmitter;
		_request(requestBuffer: Buffer): void;
		status: SC2APIProtocol.Status;
	}
}

export = NodeSC2Proto;
