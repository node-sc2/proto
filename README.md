![](https://img.shields.io/badge/version-0.5.0-brightgreen.svg)

# @node-sc2/proto
This package allows you to easily create a client to interface with the Starcraft II API at the ground level, via its protobuf-defined interface - with Promises used to represent individual `Request -> Response` cycles.

**NOTICE**: this package **only** provides an interface to the direct `Request -> Response` protocol. If you're wanting to build an agent (a bot) for SC2 using node.js, you probably want the `@node-sc2/api` package, which relies on this one and offers much higher levels of abstraction.

The API for this library should not be considered stable until the `v1.0.0` release (which should correspond with the initial release of `@node-sc2/api`). Until then, please be aware that the API may change unexpectedly.

## Design Principles
Since frames sent over websockets have no unique identifier, and since the `s2client-proto` definition provides no such identifier, this client takes an alternative approach to allow for message queuing. Each request *type* has its own queue, consisting of a list of promise objects with a concurrency restriction of 1. This means that you are able to concurrently make 1 request of any *type*, but as many as 22 total concurrent requests (one for each unique type). The client also seemlessly queues transportation for you - allowing you make as many requests of the *same type* as you would like, and always receiving the correct associated response resolved from the promise. The goal of this design is to be able to rival the speed of systems-level clients - not by faster transport, but rather by taking advantage of event-driven i/o.

The protobuf definitions themselves are compiled into json for inclusion with the library. This is a compromise between the full proto defs (which are parsing-heavy) and the static compilation, allowing for the "light" version of `protobufjs` to be used with minimal overhead.

This library is written in javascript, although typings are included and jsdoc annotations for `checkJs` usage.

## Installation
`npm install --save @node-sc2/proto`

## Usage
Except the exported constructor, all documented functions return a promise:
```js
const createProtoClient = require('@node-sc2/proto')

/** creates a single instance of the client, useful to
 *  make a coordinator to run two or more participants */
const client = createProtoClient();

// options are optional, these are the default ones:
const options = {
    port: 5000,
    host: '127.0.0.1',
};

client.connect(options).then(() => {
    return client.ping();
}).then((response) => {
    console.log(response);

    // ResponsePing {
    //     gameVersion: '4.6.2.69232',
    //     dataVersion: 'B3E14058F1083913B80C20993AC965DB',
    //     dataBuild: 69232,
    //     baseBuild: 69232
    // }
});

```
and of course, you could use async/await as well:

```js
async connect(options) {
    await client.connect(options);
    const res = await client.ping();
    console.log(res);
}

connect(options);

```

## Protobuf Integration
The protocol buffer definitions *in typescript* current to this version of `@node-sc2/proto` are included in the `typings/` directory of this repo. If you'd like to see their protobuf counterpart (along with the api developer's comments), you can do so by visiting the [`sc2client-proto`](https://github.com/Blizzard/s2client-proto/tree/master/s2clientprotocol) repo.

One advantage to the typescript definitions is code completion - which can be useful when dealing with a foreign data-rich API. Here is an example in vscode:

![vscode editor completion example](https://i.imgur.com/5Ytm1DB.gif)

One thing to note, when `pbjs` compiles `.proto` to `.js`, `snake_case` properties get "js-fitted" into `camelCase` - simply for convention. Normally, `pbjs` would also default to using the `Long` type (`long.js`) for 64bit ints, but because all of the 64bit numbers in this schema are for identification (and therefore no transforms or math need to be done to them), I've simply opted to have them be strings. That means just that any time you see a 64bit int in the protocol defs, expect a string (and send a string) in its place. This is almost exclusively used for unit tag identifiers.

The general purpose of some main functionality is documented below, but *these are just partial explainations*. You will have to reference the original protobuf definitions to understand and utilize them fully.

Along with the protocol definitions, there is also [this documentation](https://github.com/Blizzard/s2client-proto/blob/master/docs/protocol.md) as well.

## API

### *`createProtoClient() => ProtoClient`*
This function is the only export of the module and acts as a factory, returning a unique client. Example usage is shown above in the "Usage" section.

Besides the `connect` method and the `status` property, all documented instance methods of a ProtoClient are 1-to-1 with the `SC2APIProtocol.Request` protobuf definition (and in fact, are generated from it). All `Request` and `Response` types below are assumed to be from the `SC2APIProtocol` namespace.

### *`.status`*
The status will always have the most current status of the client according to the last received response. The proto definition of `status` is as follows:
```
Status {
    launched = 1,
    init_game = 2,
    in_game = 3,
    in_replay = 4,
    ended = 5,
    quit = 6,
    unknown = 99,
}
```

More information about using this state to make request decisions can be found in the proto api documentation [here](https://github.com/Blizzard/s2client-proto/blob/master/docs/protocol.md).

### *`.connect(options: { host?: string, port?: number }) => Promise<ResponsePing>`*
Initializes the client with the given options. A ping is made to verify the connection is functioning, and then the ping response is returned. Options are optional and default to:
```
{
    host: '127.0.0.1',
    port: 5000,
}
```
Example usage is shown above in the "Usage" section.

### *.createGame(game: RequestCreateGame) => Promise\<ResponseCreateGame\>*
Creates a new game with the given participants.

Example:
```js
const PlayerType = {
    PARTICIPANT: 1,
    COMPUTER: 2,
    OBSERVER: 3
};

const Race = {
    TERRAN: 1,
    ZERG: 2,
    PROTOSS: 3,
    RANDOM: 4
};

client.createGame({
    realtime: 'false',
    battlenetMapName: 'Para Site LE',
    playerSetup:[
        {
            type: PlayerType.PARTICIPANT,
            race: Race.PROTOSS,
        },
        {
            type: PlayerType.COMPUTER,
            race: Race.TERRAN,
            difficulty: 1,
        },
    ];
});
```

### *.joinGame(joinGame: RequestJoinGame) => Promise\<ResponseJoinGame\>*
Joins the game as a participant. This is possible whether or not this instance is the one that created the game. A success response will include your agent's `playerId`.

Example:
```js
client.joinGame({
    race: Race.ZERG,
    options: { raw: true },
}).then((res) => {
    console.log(res.playerId); // 1
});
```

### *.gameInfo() => Promise\<ResponseGameInfo\>*
Requests game information including player details and applicable `uInt8Array` `ImageData`'s such as the `pathingGrid`, `terrainHeight`, and `startLocations`.

Example:
```js
client.gameInfo()
    .then((res) => {
        console.log(res);
        // {
        //     modNames: [ ... ],
        //     playerInfo: [ [PlayerInfo], [PlayerInfo] ],
        //     mapName: 'Para Site LE',
        //     localMapPath: '...',
        //     startRaw: StartRaw,
        //     options: InterfaceOptions,
        // }
    });
```

### *.observation() => Promise\<ResponseObservation\>*
Observation data includes everything from the chat, to the `gameLoop` #, minerals/gas, supply, `mapState` (creep, visibility), and units. Basically everything.

Example:
```js
client.observation()
    .then((res) => {
        console.log(res);
        // {
        //     actions: [],
        //     actionErrors: [],
        //     playerResult: [],
        //     chat: [],
        //     observation: Observation,
        // }
    });
```

### *.step(step: RequestStep) => Promise\<ResponseStep\>*
Advances the game when in step mode.

Example:
```js
client.step({ count: 4 }); // leaving blank is the same as { count: 1 }
```

### *.action(action: RequestAction) => Promise\<ResponseAction\>*
Give an action command to a unit or units.

Example:
```js
client.action({
    actions: [{
        actionRaw: {
            unitCommand: {
                abilityId: 881, // Abilities.BUILD_PYLON
                unitTags: [ "4351590401" ],
                queueCommand: true,
                targetWorldSpacePos: {
                    y: 26,
                    x: 137
                },
            },
        },
    }],
});
```

### *.data(data: RequestData) => Promise\<ResponseData\>*
"Data" includes applicable data to the current game type, such as `abilities`, `units` (that's unit type data, not the units themselves), `upgrades`, `buffs`, and `effects`.

Example:
```js
client.data({
    abilityId: true,
    unitTypeId: true,
    upgradeId: true,
    buffId: true,
    effectId: true,
}).then((res) => {
    console.log(res);
    // {
    //     abilities: [...AbilityData],
    //     units: [...UnitTypeData],
    //     upgrades: [...UpgradeData],
    //     buffs: [...BuffData],
    //     effects: [...EffectData],
    // }
});
```

### *.query(query: RequestQuery) => Promise\<ResponseQuery\>*
Make a query against the current game state, such as `pathing` (can this unit get there?) or `placements` (can i put this thing there?).

Example:
```js
client.data({
    placements: [
        { targetPos: { y: 30, x: 142 }, abilityId: 881 }, // Abilities.BUILD_PYLON
        { targetPos: { y: 29, x: 138 }, abilityId: 881 },
        { targetPos: { y: 30, x: 141 }, abilityId: 881 },
        { targetPos: { y: 28, x: 141 }, abilityId: 881 },
        { targetPos: { y: 23, x: 137 }, abilityId: 881 },
        { targetPos: { y: 29, x: 141 }, abilityId: 881 },
        { targetPos: { y: 25, x: 139 }, abilityId: 881 },
        { targetPos: { y: 28, x: 142 }, abilityId: 881 },
        { targetPos: { y: 30, x: 138 }, abilityId: 881 },
        { targetPos: { y: 30, x: 140 }, abilityId: 881 }
    ],
}).then((res) => {
    console.log(res);
    // {
    //     pathing: [],
    //     abilities: [],
    //     placements: [
    //         ResponseQueryBuildingPlacement { result: 1 }, // ActionResult.SUCCESS
    //         ResponseQueryBuildingPlacement { result: 1 },
    //         ResponseQueryBuildingPlacement { result: 1 },
    //         ResponseQueryBuildingPlacement { result: 44 }, // ActionResult.CANT_BUILD_LOCATION_INVALID
    //         ResponseQueryBuildingPlacement { result: 1 },
    //         ResponseQueryBuildingPlacement { result: 1 },
    //         ResponseQueryBuildingPlacement { result: 1 },
    //         ResponseQueryBuildingPlacement { result: 44 },
    //         ResponseQueryBuildingPlacement { result: 1 },
    //         ResponseQueryBuildingPlacement { result: 1 }
    //     ]
    // }
});
```

### *.debug(debugRequest: RequestDebug) => Promise\<ResponseDebug\>*
Various game interactions, including creating/killing units, adjusting the game or map state, and drawing shapes or text to the game world, or text to the game screen.

Example:
```js
client.debug({
    debug: [{
        draw: {
            boxes: [{
                color: { r: 0, g: 255, b: 255 },
                min: { x: 134, y: 25, z: 5.99609375 },
                max: { x: 134.5, y: 25.5, z: 6.09609375 },
            }, {
                color: { r: 0, g: 255, b: 255 },
                min: { x: 133, y: 25, z: 5.99609375 },
                max: { x: 133.5, y: 25.5, z: 6.09609375 },
            }],
        },
    }],
});
```

### *.ping() => Promise\<ResponsePing\>*
Pings the SC2 client the proto client is currently connected to to verify connection. An example is shown above in the "Usage" section.

## Additional Notes
Many additional request types exist such as `.quickSave()`, `.quickLoad()`, `.startReplay()`, and `.saveMap()`. I've not tested these, but they should work. Again, I encourage you to reference the `sc2client-proto` documentation [here](https://github.com/Blizzard/s2client-proto/blob/master/docs/protocol.md) and definitions [here](https://github.com/Blizzard/s2client-proto/blob/master/s2clientprotocol/sc2api.proto) for more detailed usage.

All references to substantial portions of the `sc2api-proto` protocol buffer definitions are Copyright (c) 2017 Blizzard Entertainment as released under the MIT license. See the header comment of `./proto-bundle.js` in this repository for more information.

## Future Enhancements
I would like to create a simple npm script to generate the `proto-bundle.js` definition instead of manually updating on release.
