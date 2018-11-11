import * as WebSocket from 'ws';
import { EventEmitter } from 'events';
import { Message } from 'protobufjs';

type ProtoOptions = {
    host?: string;
    port?: number;
}

declare global {
	export namespace NodeSC2Proto {
		type ApiFunctions = {
			debug: (debugRequest: SC2APIProtocol.RequestDebug)  => Promise<SC2APIProtocol.ResponseDebug>;
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

		interface ProtoClient extends ApiFunctions {
			_ws: WebSocket;
			_promiseQueue?: any;
			_protoApiQueue: EventEmitter;
			_request(requestBuffer: Buffer): void;
			status: SC2APIProtocol.Status;
		}
	}
}
