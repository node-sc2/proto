'use strict';

const protobuf = require('protobufjs/light');
const sc2 = protobuf.Root.fromJSON(require('../proto-bundle.js'));

module.exports = sc2;
