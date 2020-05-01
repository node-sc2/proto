/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
	.addJSON({
		SC2APIProtocol: {
			nested: {
				AvailableAbility: {
					fields: {
						abilityId: {
							type: "int32",
							id: 1
						},
						requiresPoint: {
							type: "bool",
							id: 2
						}
					}
				},
				ImageData: {
					fields: {
						bitsPerPixel: {
							type: "int32",
							id: 1
						},
						size: {
							type: "Size2DI",
							id: 2
						},
						data: {
							type: "bytes",
							id: 3
						}
					}
				},
				PointI: {
					fields: {
						x: {
							type: "int32",
							id: 1
						},
						y: {
							type: "int32",
							id: 2
						}
					}
				},
				RectangleI: {
					fields: {
						p0: {
							type: "PointI",
							id: 1
						},
						p1: {
							type: "PointI",
							id: 2
						}
					}
				},
				Point2D: {
					fields: {
						x: {
							type: "float",
							id: 1
						},
						y: {
							type: "float",
							id: 2
						}
					}
				},
				Point: {
					fields: {
						x: {
							type: "float",
							id: 1
						},
						y: {
							type: "float",
							id: 2
						},
						z: {
							type: "float",
							id: 3
						}
					}
				},
				Size2DI: {
					fields: {
						x: {
							type: "int32",
							id: 1
						},
						y: {
							type: "int32",
							id: 2
						}
					}
				},
				Race: {
					values: {
						NoRace: 0,
						Terran: 1,
						Zerg: 2,
						Protoss: 3,
						Random: 4
					}
				},
				AbilityData: {
					fields: {
						abilityId: {
							type: "uint32",
							id: 1
						},
						linkName: {
							type: "string",
							id: 2
						},
						linkIndex: {
							type: "uint32",
							id: 3
						},
						buttonName: {
							type: "string",
							id: 4
						},
						friendlyName: {
							type: "string",
							id: 5
						},
						hotkey: {
							type: "string",
							id: 6
						},
						remapsToAbilityId: {
							type: "uint32",
							id: 7
						},
						available: {
							type: "bool",
							id: 8
						},
						target: {
							type: "Target",
							id: 9
						},
						allowMinimap: {
							type: "bool",
							id: 10
						},
						allowAutocast: {
							type: "bool",
							id: 11
						},
						isBuilding: {
							type: "bool",
							id: 12
						},
						footprintRadius: {
							type: "float",
							id: 13
						},
						isInstantPlacement: {
							type: "bool",
							id: 14
						},
						castRange: {
							type: "float",
							id: 15
						}
					},
					nested: {
						Target: {
							values: {
								None: 1,
								Point: 2,
								Unit: 3,
								PointOrUnit: 4,
								PointOrNone: 5
							}
						}
					}
				},
				Attribute: {
					values: {
						Light: 1,
						Armored: 2,
						Biological: 3,
						Mechanical: 4,
						Robotic: 5,
						Psionic: 6,
						Massive: 7,
						Structure: 8,
						Hover: 9,
						Heroic: 10,
						Summoned: 11
					}
				},
				DamageBonus: {
					fields: {
						attribute: {
							type: "Attribute",
							id: 1
						},
						bonus: {
							type: "float",
							id: 2
						}
					}
				},
				Weapon: {
					fields: {
						type: {
							type: "TargetType",
							id: 1
						},
						damage: {
							type: "float",
							id: 2
						},
						damageBonus: {
							rule: "repeated",
							type: "DamageBonus",
							id: 3
						},
						attacks: {
							type: "uint32",
							id: 4
						},
						range: {
							type: "float",
							id: 5
						},
						speed: {
							type: "float",
							id: 6
						}
					},
					nested: {
						TargetType: {
							values: {
								Ground: 1,
								Air: 2,
								Any: 3
							}
						}
					}
				},
				UnitTypeData: {
					fields: {
						unitId: {
							type: "uint32",
							id: 1
						},
						name: {
							type: "string",
							id: 2
						},
						available: {
							type: "bool",
							id: 3
						},
						cargoSize: {
							type: "uint32",
							id: 4
						},
						mineralCost: {
							type: "uint32",
							id: 12
						},
						vespeneCost: {
							type: "uint32",
							id: 13
						},
						foodRequired: {
							type: "float",
							id: 14
						},
						foodProvided: {
							type: "float",
							id: 18
						},
						abilityId: {
							type: "uint32",
							id: 15
						},
						race: {
							type: "Race",
							id: 16
						},
						buildTime: {
							type: "float",
							id: 17
						},
						hasVespene: {
							type: "bool",
							id: 19
						},
						hasMinerals: {
							type: "bool",
							id: 20
						},
						sightRange: {
							type: "float",
							id: 25
						},
						techAlias: {
							rule: "repeated",
							type: "uint32",
							id: 21,
							options: {
								packed: false
							}
						},
						unitAlias: {
							type: "uint32",
							id: 22
						},
						techRequirement: {
							type: "uint32",
							id: 23
						},
						requireAttached: {
							type: "bool",
							id: 24
						},
						attributes: {
							rule: "repeated",
							type: "Attribute",
							id: 8,
							options: {
								packed: false
							}
						},
						movementSpeed: {
							type: "float",
							id: 9
						},
						armor: {
							type: "float",
							id: 10
						},
						weapons: {
							rule: "repeated",
							type: "Weapon",
							id: 11
						}
					}
				},
				UpgradeData: {
					fields: {
						upgradeId: {
							type: "uint32",
							id: 1
						},
						name: {
							type: "string",
							id: 2
						},
						mineralCost: {
							type: "uint32",
							id: 3
						},
						vespeneCost: {
							type: "uint32",
							id: 4
						},
						researchTime: {
							type: "float",
							id: 5
						},
						abilityId: {
							type: "uint32",
							id: 6
						}
					}
				},
				BuffData: {
					fields: {
						buffId: {
							type: "uint32",
							id: 1
						},
						name: {
							type: "string",
							id: 2
						}
					}
				},
				EffectData: {
					fields: {
						effectId: {
							type: "uint32",
							id: 1
						},
						name: {
							type: "string",
							id: 2
						},
						friendlyName: {
							type: "string",
							id: 3
						},
						radius: {
							type: "float",
							id: 4
						}
					}
				},
				DebugCommand: {
					oneofs: {
						command: {
							oneof: [
								"draw",
								"gameState",
								"createUnit",
								"killUnit",
								"testProcess",
								"score",
								"endGame",
								"unitValue"
							]
						}
					},
					fields: {
						draw: {
							type: "DebugDraw",
							id: 1
						},
						gameState: {
							type: "DebugGameState",
							id: 2
						},
						createUnit: {
							type: "DebugCreateUnit",
							id: 3
						},
						killUnit: {
							type: "DebugKillUnit",
							id: 4
						},
						testProcess: {
							type: "DebugTestProcess",
							id: 5
						},
						score: {
							type: "DebugSetScore",
							id: 6
						},
						endGame: {
							type: "DebugEndGame",
							id: 7
						},
						unitValue: {
							type: "DebugSetUnitValue",
							id: 8
						}
					}
				},
				DebugDraw: {
					fields: {
						text: {
							rule: "repeated",
							type: "DebugText",
							id: 1
						},
						lines: {
							rule: "repeated",
							type: "DebugLine",
							id: 2
						},
						boxes: {
							rule: "repeated",
							type: "DebugBox",
							id: 3
						},
						spheres: {
							rule: "repeated",
							type: "DebugSphere",
							id: 4
						}
					}
				},
				Line: {
					fields: {
						p0: {
							type: "Point",
							id: 1
						},
						p1: {
							type: "Point",
							id: 2
						}
					}
				},
				Color: {
					fields: {
						r: {
							type: "uint32",
							id: 1
						},
						g: {
							type: "uint32",
							id: 2
						},
						b: {
							type: "uint32",
							id: 3
						}
					}
				},
				DebugText: {
					fields: {
						color: {
							type: "Color",
							id: 1
						},
						text: {
							type: "string",
							id: 2
						},
						virtualPos: {
							type: "Point",
							id: 3
						},
						worldPos: {
							type: "Point",
							id: 4
						},
						size: {
							type: "uint32",
							id: 5
						}
					}
				},
				DebugLine: {
					fields: {
						color: {
							type: "Color",
							id: 1
						},
						line: {
							type: "Line",
							id: 2
						}
					}
				},
				DebugBox: {
					fields: {
						color: {
							type: "Color",
							id: 1
						},
						min: {
							type: "Point",
							id: 2
						},
						max: {
							type: "Point",
							id: 3
						}
					}
				},
				DebugSphere: {
					fields: {
						color: {
							type: "Color",
							id: 1
						},
						p: {
							type: "Point",
							id: 2
						},
						r: {
							type: "float",
							id: 3
						}
					}
				},
				DebugGameState: {
					values: {
						show_map: 1,
						control_enemy: 2,
						food: 3,
						free: 4,
						all_resources: 5,
						god: 6,
						minerals: 7,
						gas: 8,
						cooldown: 9,
						tech_tree: 10,
						upgrade: 11,
						fast_build: 12
					}
				},
				DebugCreateUnit: {
					fields: {
						unitType: {
							type: "uint32",
							id: 1
						},
						owner: {
							type: "int32",
							id: 2
						},
						pos: {
							type: "Point2D",
							id: 3
						},
						quantity: {
							type: "uint32",
							id: 4
						}
					}
				},
				DebugKillUnit: {
					fields: {
						tag: {
							rule: "repeated",
							type: "uint64",
							id: 1,
							options: {
								packed: false
							}
						}
					}
				},
				DebugTestProcess: {
					fields: {
						test: {
							type: "Test",
							id: 1
						},
						delayMs: {
							type: "int32",
							id: 2
						}
					},
					nested: {
						Test: {
							values: {
								hang: 1,
								crash: 2,
								exit: 3
							}
						}
					}
				},
				DebugSetScore: {
					fields: {
						score: {
							type: "float",
							id: 1
						}
					}
				},
				DebugEndGame: {
					fields: {
						endResult: {
							type: "EndResult",
							id: 1
						}
					},
					nested: {
						EndResult: {
							values: {
								Surrender: 1,
								DeclareVictory: 2
							}
						}
					}
				},
				DebugSetUnitValue: {
					fields: {
						unitValue: {
							type: "UnitValue",
							id: 1
						},
						value: {
							type: "float",
							id: 2
						},
						unitTag: {
							type: "uint64",
							id: 3
						}
					},
					nested: {
						UnitValue: {
							values: {
								Energy: 1,
								Life: 2,
								Shields: 3
							}
						}
					}
				},
				ActionResult: {
					values: {
						Success: 1,
						NotSupported: 2,
						Error: 3,
						CantQueueThatOrder: 4,
						Retry: 5,
						Cooldown: 6,
						QueueIsFull: 7,
						RallyQueueIsFull: 8,
						NotEnoughMinerals: 9,
						NotEnoughVespene: 10,
						NotEnoughTerrazine: 11,
						NotEnoughCustom: 12,
						NotEnoughFood: 13,
						FoodUsageImpossible: 14,
						NotEnoughLife: 15,
						NotEnoughShields: 16,
						NotEnoughEnergy: 17,
						LifeSuppressed: 18,
						ShieldsSuppressed: 19,
						EnergySuppressed: 20,
						NotEnoughCharges: 21,
						CantAddMoreCharges: 22,
						TooMuchMinerals: 23,
						TooMuchVespene: 24,
						TooMuchTerrazine: 25,
						TooMuchCustom: 26,
						TooMuchFood: 27,
						TooMuchLife: 28,
						TooMuchShields: 29,
						TooMuchEnergy: 30,
						MustTargetUnitWithLife: 31,
						MustTargetUnitWithShields: 32,
						MustTargetUnitWithEnergy: 33,
						CantTrade: 34,
						CantSpend: 35,
						CantTargetThatUnit: 36,
						CouldntAllocateUnit: 37,
						UnitCantMove: 38,
						TransportIsHoldingPosition: 39,
						BuildTechRequirementsNotMet: 40,
						CantFindPlacementLocation: 41,
						CantBuildOnThat: 42,
						CantBuildTooCloseToDropOff: 43,
						CantBuildLocationInvalid: 44,
						CantSeeBuildLocation: 45,
						CantBuildTooCloseToCreepSource: 46,
						CantBuildTooCloseToResources: 47,
						CantBuildTooFarFromWater: 48,
						CantBuildTooFarFromCreepSource: 49,
						CantBuildTooFarFromBuildPowerSource: 50,
						CantBuildOnDenseTerrain: 51,
						CantTrainTooFarFromTrainPowerSource: 52,
						CantLandLocationInvalid: 53,
						CantSeeLandLocation: 54,
						CantLandTooCloseToCreepSource: 55,
						CantLandTooCloseToResources: 56,
						CantLandTooFarFromWater: 57,
						CantLandTooFarFromCreepSource: 58,
						CantLandTooFarFromBuildPowerSource: 59,
						CantLandTooFarFromTrainPowerSource: 60,
						CantLandOnDenseTerrain: 61,
						AddOnTooFarFromBuilding: 62,
						MustBuildRefineryFirst: 63,
						BuildingIsUnderConstruction: 64,
						CantFindDropOff: 65,
						CantLoadOtherPlayersUnits: 66,
						NotEnoughRoomToLoadUnit: 67,
						CantUnloadUnitsThere: 68,
						CantWarpInUnitsThere: 69,
						CantLoadImmobileUnits: 70,
						CantRechargeImmobileUnits: 71,
						CantRechargeUnderConstructionUnits: 72,
						CantLoadThatUnit: 73,
						NoCargoToUnload: 74,
						LoadAllNoTargetsFound: 75,
						NotWhileOccupied: 76,
						CantAttackWithoutAmmo: 77,
						CantHoldAnyMoreAmmo: 78,
						TechRequirementsNotMet: 79,
						MustLockdownUnitFirst: 80,
						MustTargetUnit: 81,
						MustTargetInventory: 82,
						MustTargetVisibleUnit: 83,
						MustTargetVisibleLocation: 84,
						MustTargetWalkableLocation: 85,
						MustTargetPawnableUnit: 86,
						YouCantControlThatUnit: 87,
						YouCantIssueCommandsToThatUnit: 88,
						MustTargetResources: 89,
						RequiresHealTarget: 90,
						RequiresRepairTarget: 91,
						NoItemsToDrop: 92,
						CantHoldAnyMoreItems: 93,
						CantHoldThat: 94,
						TargetHasNoInventory: 95,
						CantDropThisItem: 96,
						CantMoveThisItem: 97,
						CantPawnThisUnit: 98,
						MustTargetCaster: 99,
						CantTargetCaster: 100,
						MustTargetOuter: 101,
						CantTargetOuter: 102,
						MustTargetYourOwnUnits: 103,
						CantTargetYourOwnUnits: 104,
						MustTargetFriendlyUnits: 105,
						CantTargetFriendlyUnits: 106,
						MustTargetNeutralUnits: 107,
						CantTargetNeutralUnits: 108,
						MustTargetEnemyUnits: 109,
						CantTargetEnemyUnits: 110,
						MustTargetAirUnits: 111,
						CantTargetAirUnits: 112,
						MustTargetGroundUnits: 113,
						CantTargetGroundUnits: 114,
						MustTargetStructures: 115,
						CantTargetStructures: 116,
						MustTargetLightUnits: 117,
						CantTargetLightUnits: 118,
						MustTargetArmoredUnits: 119,
						CantTargetArmoredUnits: 120,
						MustTargetBiologicalUnits: 121,
						CantTargetBiologicalUnits: 122,
						MustTargetHeroicUnits: 123,
						CantTargetHeroicUnits: 124,
						MustTargetRoboticUnits: 125,
						CantTargetRoboticUnits: 126,
						MustTargetMechanicalUnits: 127,
						CantTargetMechanicalUnits: 128,
						MustTargetPsionicUnits: 129,
						CantTargetPsionicUnits: 130,
						MustTargetMassiveUnits: 131,
						CantTargetMassiveUnits: 132,
						MustTargetMissile: 133,
						CantTargetMissile: 134,
						MustTargetWorkerUnits: 135,
						CantTargetWorkerUnits: 136,
						MustTargetEnergyCapableUnits: 137,
						CantTargetEnergyCapableUnits: 138,
						MustTargetShieldCapableUnits: 139,
						CantTargetShieldCapableUnits: 140,
						MustTargetFlyers: 141,
						CantTargetFlyers: 142,
						MustTargetBuriedUnits: 143,
						CantTargetBuriedUnits: 144,
						MustTargetCloakedUnits: 145,
						CantTargetCloakedUnits: 146,
						MustTargetUnitsInAStasisField: 147,
						CantTargetUnitsInAStasisField: 148,
						MustTargetUnderConstructionUnits: 149,
						CantTargetUnderConstructionUnits: 150,
						MustTargetDeadUnits: 151,
						CantTargetDeadUnits: 152,
						MustTargetRevivableUnits: 153,
						CantTargetRevivableUnits: 154,
						MustTargetHiddenUnits: 155,
						CantTargetHiddenUnits: 156,
						CantRechargeOtherPlayersUnits: 157,
						MustTargetHallucinations: 158,
						CantTargetHallucinations: 159,
						MustTargetInvulnerableUnits: 160,
						CantTargetInvulnerableUnits: 161,
						MustTargetDetectedUnits: 162,
						CantTargetDetectedUnits: 163,
						CantTargetUnitWithEnergy: 164,
						CantTargetUnitWithShields: 165,
						MustTargetUncommandableUnits: 166,
						CantTargetUncommandableUnits: 167,
						MustTargetPreventDefeatUnits: 168,
						CantTargetPreventDefeatUnits: 169,
						MustTargetPreventRevealUnits: 170,
						CantTargetPreventRevealUnits: 171,
						MustTargetPassiveUnits: 172,
						CantTargetPassiveUnits: 173,
						MustTargetStunnedUnits: 174,
						CantTargetStunnedUnits: 175,
						MustTargetSummonedUnits: 176,
						CantTargetSummonedUnits: 177,
						MustTargetUser1: 178,
						CantTargetUser1: 179,
						MustTargetUnstoppableUnits: 180,
						CantTargetUnstoppableUnits: 181,
						MustTargetResistantUnits: 182,
						CantTargetResistantUnits: 183,
						MustTargetDazedUnits: 184,
						CantTargetDazedUnits: 185,
						CantLockdown: 186,
						CantMindControl: 187,
						MustTargetDestructibles: 188,
						CantTargetDestructibles: 189,
						MustTargetItems: 190,
						CantTargetItems: 191,
						NoCalldownAvailable: 192,
						WaypointListFull: 193,
						MustTargetRace: 194,
						CantTargetRace: 195,
						MustTargetSimilarUnits: 196,
						CantTargetSimilarUnits: 197,
						CantFindEnoughTargets: 198,
						AlreadySpawningLarva: 199,
						CantTargetExhaustedResources: 200,
						CantUseMinimap: 201,
						CantUseInfoPanel: 202,
						OrderQueueIsFull: 203,
						CantHarvestThatResource: 204,
						HarvestersNotRequired: 205,
						AlreadyTargeted: 206,
						CantAttackWeaponsDisabled: 207,
						CouldntReachTarget: 208,
						TargetIsOutOfRange: 209,
						TargetIsTooClose: 210,
						TargetIsOutOfArc: 211,
						CantFindTeleportLocation: 212,
						InvalidItemClass: 213,
						CantFindCancelOrder: 214
					}
				},
				RequestQuery: {
					fields: {
						pathing: {
							rule: "repeated",
							type: "RequestQueryPathing",
							id: 1
						},
						abilities: {
							rule: "repeated",
							type: "RequestQueryAvailableAbilities",
							id: 2
						},
						placements: {
							rule: "repeated",
							type: "RequestQueryBuildingPlacement",
							id: 3
						},
						ignoreResourceRequirements: {
							type: "bool",
							id: 4
						}
					}
				},
				ResponseQuery: {
					fields: {
						pathing: {
							rule: "repeated",
							type: "ResponseQueryPathing",
							id: 1
						},
						abilities: {
							rule: "repeated",
							type: "ResponseQueryAvailableAbilities",
							id: 2
						},
						placements: {
							rule: "repeated",
							type: "ResponseQueryBuildingPlacement",
							id: 3
						}
					}
				},
				RequestQueryPathing: {
					oneofs: {
						start: {
							oneof: [
								"startPos",
								"unitTag"
							]
						}
					},
					fields: {
						startPos: {
							type: "Point2D",
							id: 1
						},
						unitTag: {
							type: "uint64",
							id: 2
						},
						endPos: {
							type: "Point2D",
							id: 3
						}
					}
				},
				ResponseQueryPathing: {
					fields: {
						distance: {
							type: "float",
							id: 1
						}
					}
				},
				RequestQueryAvailableAbilities: {
					fields: {
						unitTag: {
							type: "uint64",
							id: 1
						}
					}
				},
				ResponseQueryAvailableAbilities: {
					fields: {
						abilities: {
							rule: "repeated",
							type: "AvailableAbility",
							id: 1
						},
						unitTag: {
							type: "uint64",
							id: 2
						},
						unitTypeId: {
							type: "uint32",
							id: 3
						}
					}
				},
				RequestQueryBuildingPlacement: {
					fields: {
						abilityId: {
							type: "int32",
							id: 1
						},
						targetPos: {
							type: "Point2D",
							id: 2
						},
						placingUnitTag: {
							type: "uint64",
							id: 3
						}
					}
				},
				ResponseQueryBuildingPlacement: {
					fields: {
						result: {
							type: "ActionResult",
							id: 1
						}
					}
				},
				StartRaw: {
					fields: {
						mapSize: {
							type: "Size2DI",
							id: 1
						},
						pathingGrid: {
							type: "ImageData",
							id: 2
						},
						terrainHeight: {
							type: "ImageData",
							id: 3
						},
						placementGrid: {
							type: "ImageData",
							id: 4
						},
						playableArea: {
							type: "RectangleI",
							id: 5
						},
						startLocations: {
							rule: "repeated",
							type: "Point2D",
							id: 6
						}
					}
				},
				ObservationRaw: {
					fields: {
						player: {
							type: "PlayerRaw",
							id: 1
						},
						units: {
							rule: "repeated",
							type: "Unit",
							id: 2
						},
						mapState: {
							type: "MapState",
							id: 3
						},
						event: {
							type: "Event",
							id: 4
						},
						effects: {
							rule: "repeated",
							type: "Effect",
							id: 5
						},
						radar: {
							rule: "repeated",
							type: "RadarRing",
							id: 6
						}
					}
				},
				RadarRing: {
					fields: {
						pos: {
							type: "Point",
							id: 1
						},
						radius: {
							type: "float",
							id: 2
						}
					}
				},
				PowerSource: {
					fields: {
						pos: {
							type: "Point",
							id: 1
						},
						radius: {
							type: "float",
							id: 2
						},
						tag: {
							type: "uint64",
							id: 3
						}
					}
				},
				PlayerRaw: {
					fields: {
						powerSources: {
							rule: "repeated",
							type: "PowerSource",
							id: 1
						},
						camera: {
							type: "Point",
							id: 2
						},
						upgradeIds: {
							rule: "repeated",
							type: "uint32",
							id: 3,
							options: {
								packed: false
							}
						}
					}
				},
				UnitOrder: {
					oneofs: {
						target: {
							oneof: [
								"targetWorldSpacePos",
								"targetUnitTag"
							]
						}
					},
					fields: {
						abilityId: {
							type: "uint32",
							id: 1
						},
						targetWorldSpacePos: {
							type: "Point",
							id: 2
						},
						targetUnitTag: {
							type: "uint64",
							id: 3
						},
						progress: {
							type: "float",
							id: 4
						}
					}
				},
				DisplayType: {
					values: {
						Visible: 1,
						Snapshot: 2,
						Hidden: 3,
						Placeholder: 4
					}
				},
				Alliance: {
					values: {
						Self: 1,
						Ally: 2,
						Neutral: 3,
						Enemy: 4
					}
				},
				CloakState: {
					values: {
						CloakedUnknown: 0,
						Cloaked: 1,
						CloakedDetected: 2,
						NotCloaked: 3,
						CloakedAllied: 4
					}
				},
				PassengerUnit: {
					fields: {
						tag: {
							type: "uint64",
							id: 1
						},
						health: {
							type: "float",
							id: 2
						},
						healthMax: {
							type: "float",
							id: 3
						},
						shield: {
							type: "float",
							id: 4
						},
						shieldMax: {
							type: "float",
							id: 7
						},
						energy: {
							type: "float",
							id: 5
						},
						energyMax: {
							type: "float",
							id: 8
						},
						unitType: {
							type: "uint32",
							id: 6
						}
					}
				},
				RallyTarget: {
					fields: {
						point: {
							type: "Point",
							id: 1
						},
						tag: {
							type: "uint64",
							id: 2
						}
					}
				},
				Unit: {
					fields: {
						displayType: {
							type: "DisplayType",
							id: 1
						},
						alliance: {
							type: "Alliance",
							id: 2
						},
						tag: {
							type: "uint64",
							id: 3
						},
						unitType: {
							type: "uint32",
							id: 4
						},
						owner: {
							type: "int32",
							id: 5
						},
						pos: {
							type: "Point",
							id: 6
						},
						facing: {
							type: "float",
							id: 7
						},
						radius: {
							type: "float",
							id: 8
						},
						buildProgress: {
							type: "float",
							id: 9
						},
						cloak: {
							type: "CloakState",
							id: 10
						},
						buffIds: {
							rule: "repeated",
							type: "uint32",
							id: 27,
							options: {
								packed: false
							}
						},
						detectRange: {
							type: "float",
							id: 31
						},
						radarRange: {
							type: "float",
							id: 32
						},
						isSelected: {
							type: "bool",
							id: 11
						},
						isOnScreen: {
							type: "bool",
							id: 12
						},
						isBlip: {
							type: "bool",
							id: 13
						},
						isPowered: {
							type: "bool",
							id: 35
						},
						isActive: {
							type: "bool",
							id: 39
						},
						attackUpgradeLevel: {
							type: "int32",
							id: 40
						},
						armorUpgradeLevel: {
							type: "int32",
							id: 41
						},
						shieldUpgradeLevel: {
							type: "int32",
							id: 42
						},
						health: {
							type: "float",
							id: 14
						},
						healthMax: {
							type: "float",
							id: 15
						},
						shield: {
							type: "float",
							id: 16
						},
						shieldMax: {
							type: "float",
							id: 36
						},
						energy: {
							type: "float",
							id: 17
						},
						energyMax: {
							type: "float",
							id: 37
						},
						mineralContents: {
							type: "int32",
							id: 18
						},
						vespeneContents: {
							type: "int32",
							id: 19
						},
						isFlying: {
							type: "bool",
							id: 20
						},
						isBurrowed: {
							type: "bool",
							id: 21
						},
						isHallucination: {
							type: "bool",
							id: 38
						},
						orders: {
							rule: "repeated",
							type: "UnitOrder",
							id: 22
						},
						addOnTag: {
							type: "uint64",
							id: 23
						},
						passengers: {
							rule: "repeated",
							type: "PassengerUnit",
							id: 24
						},
						cargoSpaceTaken: {
							type: "int32",
							id: 25
						},
						cargoSpaceMax: {
							type: "int32",
							id: 26
						},
						assignedHarvesters: {
							type: "int32",
							id: 28
						},
						idealHarvesters: {
							type: "int32",
							id: 29
						},
						weaponCooldown: {
							type: "float",
							id: 30
						},
						engagedTargetTag: {
							type: "uint64",
							id: 34
						},
						buffDurationRemain: {
							type: "int32",
							id: 43
						},
						buffDurationMax: {
							type: "int32",
							id: 44
						},
						rallyTargets: {
							rule: "repeated",
							type: "RallyTarget",
							id: 45
						}
					}
				},
				MapState: {
					fields: {
						visibility: {
							type: "ImageData",
							id: 1
						},
						creep: {
							type: "ImageData",
							id: 2
						}
					}
				},
				Event: {
					fields: {
						deadUnits: {
							rule: "repeated",
							type: "uint64",
							id: 1,
							options: {
								packed: false
							}
						}
					}
				},
				Effect: {
					fields: {
						effectId: {
							type: "uint32",
							id: 1
						},
						pos: {
							rule: "repeated",
							type: "Point2D",
							id: 2
						},
						alliance: {
							type: "Alliance",
							id: 3
						},
						owner: {
							type: "int32",
							id: 4
						},
						radius: {
							type: "float",
							id: 5
						}
					}
				},
				ActionRaw: {
					oneofs: {
						action: {
							oneof: [
								"unitCommand",
								"cameraMove",
								"toggleAutocast"
							]
						}
					},
					fields: {
						unitCommand: {
							type: "ActionRawUnitCommand",
							id: 1
						},
						cameraMove: {
							type: "ActionRawCameraMove",
							id: 2
						},
						toggleAutocast: {
							type: "ActionRawToggleAutocast",
							id: 3
						}
					}
				},
				ActionRawUnitCommand: {
					oneofs: {
						target: {
							oneof: [
								"targetWorldSpacePos",
								"targetUnitTag"
							]
						}
					},
					fields: {
						abilityId: {
							type: "int32",
							id: 1
						},
						targetWorldSpacePos: {
							type: "Point2D",
							id: 2
						},
						targetUnitTag: {
							type: "uint64",
							id: 3
						},
						unitTags: {
							rule: "repeated",
							type: "uint64",
							id: 4,
							options: {
								packed: false
							}
						},
						queueCommand: {
							type: "bool",
							id: 5
						}
					}
				},
				ActionRawCameraMove: {
					fields: {
						centerWorldSpace: {
							type: "Point",
							id: 1
						}
					}
				},
				ActionRawToggleAutocast: {
					fields: {
						abilityId: {
							type: "int32",
							id: 1
						},
						unitTags: {
							rule: "repeated",
							type: "uint64",
							id: 2,
							options: {
								packed: false
							}
						}
					}
				},
				Request: {
					oneofs: {
						request: {
							oneof: [
								"createGame",
								"joinGame",
								"restartGame",
								"startReplay",
								"leaveGame",
								"quickSave",
								"quickLoad",
								"quit",
								"gameInfo",
								"observation",
								"action",
								"obsAction",
								"step",
								"data",
								"query",
								"saveReplay",
								"mapCommand",
								"replayInfo",
								"availableMaps",
								"saveMap",
								"ping",
								"debug"
							]
						}
					},
					fields: {
						createGame: {
							type: "RequestCreateGame",
							id: 1
						},
						joinGame: {
							type: "RequestJoinGame",
							id: 2
						},
						restartGame: {
							type: "RequestRestartGame",
							id: 3
						},
						startReplay: {
							type: "RequestStartReplay",
							id: 4
						},
						leaveGame: {
							type: "RequestLeaveGame",
							id: 5
						},
						quickSave: {
							type: "RequestQuickSave",
							id: 6
						},
						quickLoad: {
							type: "RequestQuickLoad",
							id: 7
						},
						quit: {
							type: "RequestQuit",
							id: 8
						},
						gameInfo: {
							type: "RequestGameInfo",
							id: 9
						},
						observation: {
							type: "RequestObservation",
							id: 10
						},
						action: {
							type: "RequestAction",
							id: 11
						},
						obsAction: {
							type: "RequestObserverAction",
							id: 21
						},
						step: {
							type: "RequestStep",
							id: 12
						},
						data: {
							type: "RequestData",
							id: 13
						},
						query: {
							type: "RequestQuery",
							id: 14
						},
						saveReplay: {
							type: "RequestSaveReplay",
							id: 15
						},
						mapCommand: {
							type: "RequestMapCommand",
							id: 22
						},
						replayInfo: {
							type: "RequestReplayInfo",
							id: 16
						},
						availableMaps: {
							type: "RequestAvailableMaps",
							id: 17
						},
						saveMap: {
							type: "RequestSaveMap",
							id: 18
						},
						ping: {
							type: "RequestPing",
							id: 19
						},
						debug: {
							type: "RequestDebug",
							id: 20
						},
						id: {
							type: "uint32",
							id: 97
						}
					}
				},
				Response: {
					oneofs: {
						response: {
							oneof: [
								"createGame",
								"joinGame",
								"restartGame",
								"startReplay",
								"leaveGame",
								"quickSave",
								"quickLoad",
								"quit",
								"gameInfo",
								"observation",
								"action",
								"obsAction",
								"step",
								"data",
								"query",
								"saveReplay",
								"replayInfo",
								"availableMaps",
								"saveMap",
								"mapCommand",
								"ping",
								"debug"
							]
						}
					},
					fields: {
						createGame: {
							type: "ResponseCreateGame",
							id: 1
						},
						joinGame: {
							type: "ResponseJoinGame",
							id: 2
						},
						restartGame: {
							type: "ResponseRestartGame",
							id: 3
						},
						startReplay: {
							type: "ResponseStartReplay",
							id: 4
						},
						leaveGame: {
							type: "ResponseLeaveGame",
							id: 5
						},
						quickSave: {
							type: "ResponseQuickSave",
							id: 6
						},
						quickLoad: {
							type: "ResponseQuickLoad",
							id: 7
						},
						quit: {
							type: "ResponseQuit",
							id: 8
						},
						gameInfo: {
							type: "ResponseGameInfo",
							id: 9
						},
						observation: {
							type: "ResponseObservation",
							id: 10
						},
						action: {
							type: "ResponseAction",
							id: 11
						},
						obsAction: {
							type: "ResponseObserverAction",
							id: 21
						},
						step: {
							type: "ResponseStep",
							id: 12
						},
						data: {
							type: "ResponseData",
							id: 13
						},
						query: {
							type: "ResponseQuery",
							id: 14
						},
						saveReplay: {
							type: "ResponseSaveReplay",
							id: 15
						},
						replayInfo: {
							type: "ResponseReplayInfo",
							id: 16
						},
						availableMaps: {
							type: "ResponseAvailableMaps",
							id: 17
						},
						saveMap: {
							type: "ResponseSaveMap",
							id: 18
						},
						mapCommand: {
							type: "ResponseMapCommand",
							id: 22
						},
						ping: {
							type: "ResponsePing",
							id: 19
						},
						debug: {
							type: "ResponseDebug",
							id: 20
						},
						id: {
							type: "uint32",
							id: 97
						},
						error: {
							rule: "repeated",
							type: "string",
							id: 98
						},
						status: {
							type: "Status",
							id: 99
						}
					}
				},
				Status: {
					values: {
						launched: 1,
						init_game: 2,
						in_game: 3,
						in_replay: 4,
						ended: 5,
						quit: 6,
						unknown: 99
					}
				},
				RequestCreateGame: {
					oneofs: {
						Map: {
							oneof: [
								"localMap",
								"battlenetMapName"
							]
						}
					},
					fields: {
						localMap: {
							type: "LocalMap",
							id: 1
						},
						battlenetMapName: {
							type: "string",
							id: 2
						},
						playerSetup: {
							rule: "repeated",
							type: "PlayerSetup",
							id: 3
						},
						disableFog: {
							type: "bool",
							id: 4
						},
						randomSeed: {
							type: "uint32",
							id: 5
						},
						realtime: {
							type: "bool",
							id: 6
						}
					}
				},
				LocalMap: {
					fields: {
						mapPath: {
							type: "string",
							id: 1
						},
						mapData: {
							type: "bytes",
							id: 7
						}
					}
				},
				ResponseCreateGame: {
					fields: {
						error: {
							type: "Error",
							id: 1
						},
						errorDetails: {
							type: "string",
							id: 2
						}
					},
					nested: {
						Error: {
							values: {
								MissingMap: 1,
								InvalidMapPath: 2,
								InvalidMapData: 3,
								InvalidMapName: 4,
								InvalidMapHandle: 5,
								MissingPlayerSetup: 6,
								InvalidPlayerSetup: 7,
								MultiplayerUnsupported: 8
							}
						}
					}
				},
				RequestJoinGame: {
					oneofs: {
						participation: {
							oneof: [
								"race",
								"observedPlayerId"
							]
						}
					},
					fields: {
						race: {
							type: "Race",
							id: 1
						},
						observedPlayerId: {
							type: "uint32",
							id: 2
						},
						options: {
							type: "InterfaceOptions",
							id: 3
						},
						serverPorts: {
							type: "PortSet",
							id: 4
						},
						clientPorts: {
							rule: "repeated",
							type: "PortSet",
							id: 5
						},
						sharedPort: {
							type: "int32",
							id: 6
						},
						playerName: {
							type: "string",
							id: 7
						},
						hostIp: {
							type: "string",
							id: 8
						}
					}
				},
				PortSet: {
					fields: {
						gamePort: {
							type: "int32",
							id: 1
						},
						basePort: {
							type: "int32",
							id: 2
						}
					}
				},
				ResponseJoinGame: {
					fields: {
						playerId: {
							type: "uint32",
							id: 1
						},
						error: {
							type: "Error",
							id: 2
						},
						errorDetails: {
							type: "string",
							id: 3
						}
					},
					nested: {
						Error: {
							values: {
								MissingParticipation: 1,
								InvalidObservedPlayerId: 2,
								MissingOptions: 3,
								MissingPorts: 4,
								GameFull: 5,
								LaunchError: 6,
								FeatureUnsupported: 7,
								NoSpaceForUser: 8,
								MapDoesNotExist: 9,
								CannotOpenMap: 10,
								ChecksumError: 11,
								NetworkError: 12,
								OtherError: 13
							}
						}
					}
				},
				RequestRestartGame: {
					fields: {}
				},
				ResponseRestartGame: {
					fields: {
						error: {
							type: "Error",
							id: 1
						},
						errorDetails: {
							type: "string",
							id: 2
						},
						needHardReset: {
							type: "bool",
							id: 3
						}
					},
					nested: {
						Error: {
							values: {
								LaunchError: 1
							}
						}
					}
				},
				RequestStartReplay: {
					oneofs: {
						replay: {
							oneof: [
								"replayPath",
								"replayData"
							]
						}
					},
					fields: {
						replayPath: {
							type: "string",
							id: 1
						},
						replayData: {
							type: "bytes",
							id: 5
						},
						mapData: {
							type: "bytes",
							id: 6
						},
						observedPlayerId: {
							type: "int32",
							id: 2
						},
						options: {
							type: "InterfaceOptions",
							id: 3
						},
						disableFog: {
							type: "bool",
							id: 4
						},
						realtime: {
							type: "bool",
							id: 7
						},
						recordReplay: {
							type: "bool",
							id: 8
						}
					}
				},
				ResponseStartReplay: {
					fields: {
						error: {
							type: "Error",
							id: 1
						},
						errorDetails: {
							type: "string",
							id: 2
						}
					},
					nested: {
						Error: {
							values: {
								MissingReplay: 1,
								InvalidReplayPath: 2,
								InvalidReplayData: 3,
								InvalidMapData: 4,
								InvalidObservedPlayerId: 5,
								MissingOptions: 6,
								LaunchError: 7
							}
						}
					}
				},
				RequestMapCommand: {
					fields: {
						triggerCmd: {
							type: "string",
							id: 1
						}
					}
				},
				ResponseMapCommand: {
					fields: {
						error: {
							type: "Error",
							id: 1
						},
						errorDetails: {
							type: "string",
							id: 2
						}
					},
					nested: {
						Error: {
							values: {
								NoTriggerError: 1
							}
						}
					}
				},
				RequestLeaveGame: {
					fields: {}
				},
				ResponseLeaveGame: {
					fields: {}
				},
				RequestQuickSave: {
					fields: {}
				},
				ResponseQuickSave: {
					fields: {}
				},
				RequestQuickLoad: {
					fields: {}
				},
				ResponseQuickLoad: {
					fields: {}
				},
				RequestQuit: {
					fields: {}
				},
				ResponseQuit: {
					fields: {}
				},
				RequestGameInfo: {
					fields: {}
				},
				ResponseGameInfo: {
					fields: {
						mapName: {
							type: "string",
							id: 1
						},
						modNames: {
							rule: "repeated",
							type: "string",
							id: 6
						},
						localMapPath: {
							type: "string",
							id: 2
						},
						playerInfo: {
							rule: "repeated",
							type: "PlayerInfo",
							id: 3
						},
						startRaw: {
							type: "StartRaw",
							id: 4
						},
						options: {
							type: "InterfaceOptions",
							id: 5
						}
					}
				},
				RequestObservation: {
					fields: {
						disableFog: {
							type: "bool",
							id: 1
						},
						gameLoop: {
							type: "uint32",
							id: 2
						}
					}
				},
				ResponseObservation: {
					fields: {
						actions: {
							rule: "repeated",
							type: "Action",
							id: 1
						},
						actionErrors: {
							rule: "repeated",
							type: "ActionError",
							id: 2
						},
						observation: {
							type: "Observation",
							id: 3
						},
						playerResult: {
							rule: "repeated",
							type: "PlayerResult",
							id: 4
						},
						chat: {
							rule: "repeated",
							type: "ChatReceived",
							id: 5
						}
					}
				},
				ChatReceived: {
					fields: {
						playerId: {
							type: "uint32",
							id: 1
						},
						message: {
							type: "string",
							id: 2
						}
					}
				},
				RequestAction: {
					fields: {
						actions: {
							rule: "repeated",
							type: "Action",
							id: 1
						}
					}
				},
				ResponseAction: {
					fields: {
						result: {
							rule: "repeated",
							type: "ActionResult",
							id: 1,
							options: {
								packed: false
							}
						}
					}
				},
				RequestObserverAction: {
					fields: {
						actions: {
							rule: "repeated",
							type: "ObserverAction",
							id: 1
						}
					}
				},
				ResponseObserverAction: {
					fields: {}
				},
				RequestStep: {
					fields: {
						count: {
							type: "uint32",
							id: 1
						}
					}
				},
				ResponseStep: {
					fields: {
						simulationLoop: {
							type: "uint32",
							id: 1
						}
					}
				},
				RequestData: {
					fields: {
						abilityId: {
							type: "bool",
							id: 1
						},
						unitTypeId: {
							type: "bool",
							id: 2
						},
						upgradeId: {
							type: "bool",
							id: 3
						},
						buffId: {
							type: "bool",
							id: 4
						},
						effectId: {
							type: "bool",
							id: 5
						}
					}
				},
				ResponseData: {
					fields: {
						abilities: {
							rule: "repeated",
							type: "AbilityData",
							id: 1
						},
						units: {
							rule: "repeated",
							type: "UnitTypeData",
							id: 2
						},
						upgrades: {
							rule: "repeated",
							type: "UpgradeData",
							id: 3
						},
						buffs: {
							rule: "repeated",
							type: "BuffData",
							id: 4
						},
						effects: {
							rule: "repeated",
							type: "EffectData",
							id: 5
						}
					}
				},
				RequestSaveReplay: {
					fields: {}
				},
				ResponseSaveReplay: {
					fields: {
						data: {
							type: "bytes",
							id: 1
						}
					}
				},
				RequestReplayInfo: {
					oneofs: {
						replay: {
							oneof: [
								"replayPath",
								"replayData"
							]
						}
					},
					fields: {
						replayPath: {
							type: "string",
							id: 1
						},
						replayData: {
							type: "bytes",
							id: 2
						},
						downloadData: {
							type: "bool",
							id: 3
						}
					}
				},
				PlayerInfoExtra: {
					fields: {
						playerInfo: {
							type: "PlayerInfo",
							id: 1
						},
						playerResult: {
							type: "PlayerResult",
							id: 2
						},
						playerMmr: {
							type: "int32",
							id: 3
						},
						playerApm: {
							type: "int32",
							id: 4
						}
					}
				},
				ResponseReplayInfo: {
					fields: {
						mapName: {
							type: "string",
							id: 1
						},
						localMapPath: {
							type: "string",
							id: 2
						},
						playerInfo: {
							rule: "repeated",
							type: "PlayerInfoExtra",
							id: 3
						},
						gameDurationLoops: {
							type: "uint32",
							id: 4
						},
						gameDurationSeconds: {
							type: "float",
							id: 5
						},
						gameVersion: {
							type: "string",
							id: 6
						},
						dataVersion: {
							type: "string",
							id: 11
						},
						dataBuild: {
							type: "uint32",
							id: 7
						},
						baseBuild: {
							type: "uint32",
							id: 8
						},
						error: {
							type: "Error",
							id: 9
						},
						errorDetails: {
							type: "string",
							id: 10
						}
					},
					nested: {
						Error: {
							values: {
								MissingReplay: 1,
								InvalidReplayPath: 2,
								InvalidReplayData: 3,
								ParsingError: 4,
								DownloadError: 5
							}
						}
					}
				},
				RequestAvailableMaps: {
					fields: {}
				},
				ResponseAvailableMaps: {
					fields: {
						localMapPaths: {
							rule: "repeated",
							type: "string",
							id: 1
						},
						battlenetMapNames: {
							rule: "repeated",
							type: "string",
							id: 2
						}
					}
				},
				RequestSaveMap: {
					fields: {
						mapPath: {
							type: "string",
							id: 1
						},
						mapData: {
							type: "bytes",
							id: 2
						}
					}
				},
				ResponseSaveMap: {
					fields: {
						error: {
							type: "Error",
							id: 1
						}
					},
					nested: {
						Error: {
							values: {
								InvalidMapData: 1
							}
						}
					}
				},
				RequestPing: {
					fields: {}
				},
				ResponsePing: {
					fields: {
						gameVersion: {
							type: "string",
							id: 1
						},
						dataVersion: {
							type: "string",
							id: 2
						},
						dataBuild: {
							type: "uint32",
							id: 3
						},
						baseBuild: {
							type: "uint32",
							id: 4
						}
					}
				},
				RequestDebug: {
					fields: {
						debug: {
							rule: "repeated",
							type: "DebugCommand",
							id: 1
						}
					}
				},
				ResponseDebug: {
					fields: {}
				},
				Difficulty: {
					values: {
						VeryEasy: 1,
						Easy: 2,
						Medium: 3,
						MediumHard: 4,
						Hard: 5,
						Harder: 6,
						VeryHard: 7,
						CheatVision: 8,
						CheatMoney: 9,
						CheatInsane: 10
					}
				},
				PlayerType: {
					values: {
						Participant: 1,
						Computer: 2,
						Observer: 3
					}
				},
				AIBuild: {
					values: {
						RandomBuild: 1,
						Rush: 2,
						Timing: 3,
						Power: 4,
						Macro: 5,
						Air: 6
					}
				},
				PlayerSetup: {
					fields: {
						type: {
							type: "PlayerType",
							id: 1
						},
						race: {
							type: "Race",
							id: 2
						},
						difficulty: {
							type: "Difficulty",
							id: 3
						},
						playerName: {
							type: "string",
							id: 4
						},
						aiBuild: {
							type: "AIBuild",
							id: 5
						}
					}
				},
				SpatialCameraSetup: {
					fields: {
						resolution: {
							type: "Size2DI",
							id: 2
						},
						minimapResolution: {
							type: "Size2DI",
							id: 3
						},
						width: {
							type: "float",
							id: 1
						},
						cropToPlayableArea: {
							type: "bool",
							id: 4
						},
						allowCheatingLayers: {
							type: "bool",
							id: 5
						}
					}
				},
				InterfaceOptions: {
					fields: {
						raw: {
							type: "bool",
							id: 1
						},
						score: {
							type: "bool",
							id: 2
						},
						featureLayer: {
							type: "SpatialCameraSetup",
							id: 3
						},
						render: {
							type: "SpatialCameraSetup",
							id: 4
						},
						showCloaked: {
							type: "bool",
							id: 5
						},
						showBurrowedShadows: {
							type: "bool",
							id: 9
						},
						showPlaceholders: {
							type: "bool",
							id: 8
						},
						rawAffectsSelection: {
							type: "bool",
							id: 6
						},
						rawCropToPlayableArea: {
							type: "bool",
							id: 7
						}
					}
				},
				PlayerInfo: {
					fields: {
						playerId: {
							type: "uint32",
							id: 1
						},
						type: {
							type: "PlayerType",
							id: 2
						},
						raceRequested: {
							type: "Race",
							id: 3
						},
						raceActual: {
							type: "Race",
							id: 4
						},
						difficulty: {
							type: "Difficulty",
							id: 5
						},
						aiBuild: {
							type: "AIBuild",
							id: 7
						},
						playerName: {
							type: "string",
							id: 6
						}
					}
				},
				PlayerCommon: {
					fields: {
						playerId: {
							type: "uint32",
							id: 1
						},
						minerals: {
							type: "uint32",
							id: 2
						},
						vespene: {
							type: "uint32",
							id: 3
						},
						foodCap: {
							type: "uint32",
							id: 4
						},
						foodUsed: {
							type: "uint32",
							id: 5
						},
						foodArmy: {
							type: "uint32",
							id: 6
						},
						foodWorkers: {
							type: "uint32",
							id: 7
						},
						idleWorkerCount: {
							type: "uint32",
							id: 8
						},
						armyCount: {
							type: "uint32",
							id: 9
						},
						warpGateCount: {
							type: "uint32",
							id: 10
						},
						larvaCount: {
							type: "uint32",
							id: 11
						}
					}
				},
				Observation: {
					fields: {
						gameLoop: {
							type: "uint32",
							id: 9
						},
						playerCommon: {
							type: "PlayerCommon",
							id: 1
						},
						alerts: {
							rule: "repeated",
							type: "Alert",
							id: 10,
							options: {
								packed: false
							}
						},
						abilities: {
							rule: "repeated",
							type: "AvailableAbility",
							id: 3
						},
						score: {
							type: "Score",
							id: 4
						},
						rawData: {
							type: "ObservationRaw",
							id: 5
						},
						featureLayerData: {
							type: "ObservationFeatureLayer",
							id: 6
						},
						renderData: {
							type: "ObservationRender",
							id: 7
						},
						uiData: {
							type: "ObservationUI",
							id: 8
						}
					}
				},
				Action: {
					fields: {
						actionRaw: {
							type: "ActionRaw",
							id: 1
						},
						actionFeatureLayer: {
							type: "ActionSpatial",
							id: 2
						},
						actionRender: {
							type: "ActionSpatial",
							id: 3
						},
						actionUi: {
							type: "ActionUI",
							id: 4
						},
						actionChat: {
							type: "ActionChat",
							id: 6
						},
						gameLoop: {
							type: "uint32",
							id: 7
						}
					}
				},
				ActionChat: {
					fields: {
						channel: {
							type: "Channel",
							id: 1
						},
						message: {
							type: "string",
							id: 2
						}
					},
					nested: {
						Channel: {
							values: {
								Broadcast: 1,
								Team: 2
							}
						}
					}
				},
				ActionError: {
					fields: {
						unitTag: {
							type: "uint64",
							id: 1
						},
						abilityId: {
							type: "uint64",
							id: 2
						},
						result: {
							type: "ActionResult",
							id: 3
						}
					}
				},
				ObserverAction: {
					oneofs: {
						action: {
							oneof: [
								"playerPerspective",
								"cameraMove",
								"cameraFollowPlayer",
								"cameraFollowUnits"
							]
						}
					},
					fields: {
						playerPerspective: {
							type: "ActionObserverPlayerPerspective",
							id: 1
						},
						cameraMove: {
							type: "ActionObserverCameraMove",
							id: 2
						},
						cameraFollowPlayer: {
							type: "ActionObserverCameraFollowPlayer",
							id: 3
						},
						cameraFollowUnits: {
							type: "ActionObserverCameraFollowUnits",
							id: 4
						}
					}
				},
				ActionObserverPlayerPerspective: {
					fields: {
						playerId: {
							type: "uint32",
							id: 1
						}
					}
				},
				ActionObserverCameraMove: {
					fields: {
						worldPos: {
							type: "Point2D",
							id: 1
						},
						distance: {
							type: "float",
							id: 2
						}
					}
				},
				ActionObserverCameraFollowPlayer: {
					fields: {
						playerId: {
							type: "uint32",
							id: 1
						}
					}
				},
				ActionObserverCameraFollowUnits: {
					fields: {
						unitTags: {
							rule: "repeated",
							type: "uint64",
							id: 1,
							options: {
								packed: false
							}
						}
					}
				},
				Alert: {
					values: {
						AlertError: 3,
						AddOnComplete: 4,
						BuildingComplete: 5,
						BuildingUnderAttack: 6,
						LarvaHatched: 7,
						MergeComplete: 8,
						MineralsExhausted: 9,
						MorphComplete: 10,
						MothershipComplete: 11,
						MULEExpired: 12,
						NuclearLaunchDetected: 1,
						NukeComplete: 13,
						NydusWormDetected: 2,
						ResearchComplete: 14,
						TrainError: 15,
						TrainUnitComplete: 16,
						TrainWorkerComplete: 17,
						TransformationComplete: 18,
						UnitUnderAttack: 19,
						UpgradeComplete: 20,
						VespeneExhausted: 21,
						WarpInComplete: 22
					}
				},
				Result: {
					values: {
						Victory: 1,
						Defeat: 2,
						Tie: 3,
						Undecided: 4
					}
				},
				PlayerResult: {
					fields: {
						playerId: {
							type: "uint32",
							id: 1
						},
						result: {
							type: "Result",
							id: 2
						}
					}
				},
				Score: {
					fields: {
						scoreType: {
							type: "ScoreType",
							id: 6
						},
						score: {
							type: "int32",
							id: 7
						},
						scoreDetails: {
							type: "ScoreDetails",
							id: 8
						}
					},
					nested: {
						ScoreType: {
							values: {
								Curriculum: 1,
								Melee: 2
							}
						}
					}
				},
				CategoryScoreDetails: {
					fields: {
						none: {
							type: "float",
							id: 1
						},
						army: {
							type: "float",
							id: 2
						},
						economy: {
							type: "float",
							id: 3
						},
						technology: {
							type: "float",
							id: 4
						},
						upgrade: {
							type: "float",
							id: 5
						}
					}
				},
				VitalScoreDetails: {
					fields: {
						life: {
							type: "float",
							id: 1
						},
						shields: {
							type: "float",
							id: 2
						},
						energy: {
							type: "float",
							id: 3
						}
					}
				},
				ScoreDetails: {
					fields: {
						idleProductionTime: {
							type: "float",
							id: 1
						},
						idleWorkerTime: {
							type: "float",
							id: 2
						},
						totalValueUnits: {
							type: "float",
							id: 3
						},
						totalValueStructures: {
							type: "float",
							id: 4
						},
						killedValueUnits: {
							type: "float",
							id: 5
						},
						killedValueStructures: {
							type: "float",
							id: 6
						},
						collectedMinerals: {
							type: "float",
							id: 7
						},
						collectedVespene: {
							type: "float",
							id: 8
						},
						collectionRateMinerals: {
							type: "float",
							id: 9
						},
						collectionRateVespene: {
							type: "float",
							id: 10
						},
						spentMinerals: {
							type: "float",
							id: 11
						},
						spentVespene: {
							type: "float",
							id: 12
						},
						foodUsed: {
							type: "CategoryScoreDetails",
							id: 13
						},
						killedMinerals: {
							type: "CategoryScoreDetails",
							id: 14
						},
						killedVespene: {
							type: "CategoryScoreDetails",
							id: 15
						},
						lostMinerals: {
							type: "CategoryScoreDetails",
							id: 16
						},
						lostVespene: {
							type: "CategoryScoreDetails",
							id: 17
						},
						friendlyFireMinerals: {
							type: "CategoryScoreDetails",
							id: 18
						},
						friendlyFireVespene: {
							type: "CategoryScoreDetails",
							id: 19
						},
						usedMinerals: {
							type: "CategoryScoreDetails",
							id: 20
						},
						usedVespene: {
							type: "CategoryScoreDetails",
							id: 21
						},
						totalUsedMinerals: {
							type: "CategoryScoreDetails",
							id: 22
						},
						totalUsedVespene: {
							type: "CategoryScoreDetails",
							id: 23
						},
						totalDamageDealt: {
							type: "VitalScoreDetails",
							id: 24
						},
						totalDamageTaken: {
							type: "VitalScoreDetails",
							id: 25
						},
						totalHealed: {
							type: "VitalScoreDetails",
							id: 26
						},
						currentApm: {
							type: "float",
							id: 27
						},
						currentEffectiveApm: {
							type: "float",
							id: 28
						}
					}
				},
				ObservationFeatureLayer: {
					fields: {
						renders: {
							type: "FeatureLayers",
							id: 1
						},
						minimapRenders: {
							type: "FeatureLayersMinimap",
							id: 2
						}
					}
				},
				FeatureLayers: {
					fields: {
						heightMap: {
							type: "ImageData",
							id: 1
						},
						visibilityMap: {
							type: "ImageData",
							id: 2
						},
						creep: {
							type: "ImageData",
							id: 3
						},
						power: {
							type: "ImageData",
							id: 4
						},
						playerId: {
							type: "ImageData",
							id: 5
						},
						unitType: {
							type: "ImageData",
							id: 6
						},
						selected: {
							type: "ImageData",
							id: 7
						},
						unitHitPoints: {
							type: "ImageData",
							id: 8
						},
						unitHitPointsRatio: {
							type: "ImageData",
							id: 17
						},
						unitEnergy: {
							type: "ImageData",
							id: 9
						},
						unitEnergyRatio: {
							type: "ImageData",
							id: 18
						},
						unitShields: {
							type: "ImageData",
							id: 10
						},
						unitShieldsRatio: {
							type: "ImageData",
							id: 19
						},
						playerRelative: {
							type: "ImageData",
							id: 11
						},
						unitDensityAa: {
							type: "ImageData",
							id: 14
						},
						unitDensity: {
							type: "ImageData",
							id: 15
						},
						effects: {
							type: "ImageData",
							id: 20
						},
						hallucinations: {
							type: "ImageData",
							id: 21
						},
						cloaked: {
							type: "ImageData",
							id: 22
						},
						blip: {
							type: "ImageData",
							id: 23
						},
						buffs: {
							type: "ImageData",
							id: 24
						},
						buffDuration: {
							type: "ImageData",
							id: 26
						},
						active: {
							type: "ImageData",
							id: 25
						},
						buildProgress: {
							type: "ImageData",
							id: 27
						},
						buildable: {
							type: "ImageData",
							id: 28
						},
						pathable: {
							type: "ImageData",
							id: 29
						},
						placeholder: {
							type: "ImageData",
							id: 30
						}
					}
				},
				FeatureLayersMinimap: {
					fields: {
						heightMap: {
							type: "ImageData",
							id: 1
						},
						visibilityMap: {
							type: "ImageData",
							id: 2
						},
						creep: {
							type: "ImageData",
							id: 3
						},
						camera: {
							type: "ImageData",
							id: 4
						},
						playerId: {
							type: "ImageData",
							id: 5
						},
						playerRelative: {
							type: "ImageData",
							id: 6
						},
						selected: {
							type: "ImageData",
							id: 7
						},
						alerts: {
							type: "ImageData",
							id: 9
						},
						buildable: {
							type: "ImageData",
							id: 10
						},
						pathable: {
							type: "ImageData",
							id: 11
						},
						unitType: {
							type: "ImageData",
							id: 8
						}
					}
				},
				ObservationRender: {
					fields: {
						map: {
							type: "ImageData",
							id: 1
						},
						minimap: {
							type: "ImageData",
							id: 2
						}
					}
				},
				ActionSpatial: {
					oneofs: {
						action: {
							oneof: [
								"unitCommand",
								"cameraMove",
								"unitSelectionPoint",
								"unitSelectionRect"
							]
						}
					},
					fields: {
						unitCommand: {
							type: "ActionSpatialUnitCommand",
							id: 1
						},
						cameraMove: {
							type: "ActionSpatialCameraMove",
							id: 2
						},
						unitSelectionPoint: {
							type: "ActionSpatialUnitSelectionPoint",
							id: 3
						},
						unitSelectionRect: {
							type: "ActionSpatialUnitSelectionRect",
							id: 4
						}
					}
				},
				ActionSpatialUnitCommand: {
					oneofs: {
						target: {
							oneof: [
								"targetScreenCoord",
								"targetMinimapCoord"
							]
						}
					},
					fields: {
						abilityId: {
							type: "int32",
							id: 1
						},
						targetScreenCoord: {
							type: "PointI",
							id: 2
						},
						targetMinimapCoord: {
							type: "PointI",
							id: 3
						},
						queueCommand: {
							type: "bool",
							id: 4
						}
					}
				},
				ActionSpatialCameraMove: {
					fields: {
						centerMinimap: {
							type: "PointI",
							id: 1
						}
					}
				},
				ActionSpatialUnitSelectionPoint: {
					fields: {
						selectionScreenCoord: {
							type: "PointI",
							id: 1
						},
						type: {
							type: "Type",
							id: 2
						}
					},
					nested: {
						Type: {
							values: {
								Select: 1,
								Toggle: 2,
								AllType: 3,
								AddAllType: 4
							}
						}
					}
				},
				ActionSpatialUnitSelectionRect: {
					fields: {
						selectionScreenCoord: {
							rule: "repeated",
							type: "RectangleI",
							id: 1
						},
						selectionAdd: {
							type: "bool",
							id: 2
						}
					}
				},
				ObservationUI: {
					oneofs: {
						panel: {
							oneof: [
								"single",
								"multi",
								"cargo",
								"production"
							]
						}
					},
					fields: {
						groups: {
							rule: "repeated",
							type: "ControlGroup",
							id: 1
						},
						single: {
							type: "SinglePanel",
							id: 2
						},
						multi: {
							type: "MultiPanel",
							id: 3
						},
						cargo: {
							type: "CargoPanel",
							id: 4
						},
						production: {
							type: "ProductionPanel",
							id: 5
						}
					}
				},
				ControlGroup: {
					fields: {
						controlGroupIndex: {
							type: "uint32",
							id: 1
						},
						leaderUnitType: {
							type: "uint32",
							id: 2
						},
						count: {
							type: "uint32",
							id: 3
						}
					}
				},
				UnitInfo: {
					fields: {
						unitType: {
							type: "uint32",
							id: 1
						},
						playerRelative: {
							type: "uint32",
							id: 2
						},
						health: {
							type: "int32",
							id: 3
						},
						shields: {
							type: "int32",
							id: 4
						},
						energy: {
							type: "int32",
							id: 5
						},
						transportSlotsTaken: {
							type: "int32",
							id: 6
						},
						buildProgress: {
							type: "float",
							id: 7
						},
						addOn: {
							type: "UnitInfo",
							id: 8
						},
						maxHealth: {
							type: "int32",
							id: 9
						},
						maxShields: {
							type: "int32",
							id: 10
						},
						maxEnergy: {
							type: "int32",
							id: 11
						}
					}
				},
				SinglePanel: {
					fields: {
						unit: {
							type: "UnitInfo",
							id: 1
						},
						attackUpgradeLevel: {
							type: "int32",
							id: 2
						},
						armorUpgradeLevel: {
							type: "int32",
							id: 3
						},
						shieldUpgradeLevel: {
							type: "int32",
							id: 4
						},
						buffs: {
							rule: "repeated",
							type: "int32",
							id: 5,
							options: {
								packed: false
							}
						}
					}
				},
				MultiPanel: {
					fields: {
						units: {
							rule: "repeated",
							type: "UnitInfo",
							id: 1
						}
					}
				},
				CargoPanel: {
					fields: {
						unit: {
							type: "UnitInfo",
							id: 1
						},
						passengers: {
							rule: "repeated",
							type: "UnitInfo",
							id: 2
						},
						slotsAvailable: {
							type: "int32",
							id: 3
						}
					}
				},
				BuildItem: {
					fields: {
						abilityId: {
							type: "uint32",
							id: 1
						},
						buildProgress: {
							type: "float",
							id: 2
						}
					}
				},
				ProductionPanel: {
					fields: {
						unit: {
							type: "UnitInfo",
							id: 1
						},
						buildQueue: {
							rule: "repeated",
							type: "UnitInfo",
							id: 2
						},
						productionQueue: {
							rule: "repeated",
							type: "BuildItem",
							id: 3
						}
					}
				},
				ActionUI: {
					oneofs: {
						action: {
							oneof: [
								"controlGroup",
								"selectArmy",
								"selectWarpGates",
								"selectLarva",
								"selectIdleWorker",
								"multiPanel",
								"cargoPanel",
								"productionPanel",
								"toggleAutocast"
							]
						}
					},
					fields: {
						controlGroup: {
							type: "ActionControlGroup",
							id: 1
						},
						selectArmy: {
							type: "ActionSelectArmy",
							id: 2
						},
						selectWarpGates: {
							type: "ActionSelectWarpGates",
							id: 3
						},
						selectLarva: {
							type: "ActionSelectLarva",
							id: 4
						},
						selectIdleWorker: {
							type: "ActionSelectIdleWorker",
							id: 5
						},
						multiPanel: {
							type: "ActionMultiPanel",
							id: 6
						},
						cargoPanel: {
							type: "ActionCargoPanelUnload",
							id: 7
						},
						productionPanel: {
							type: "ActionProductionPanelRemoveFromQueue",
							id: 8
						},
						toggleAutocast: {
							type: "ActionToggleAutocast",
							id: 9
						}
					}
				},
				ActionControlGroup: {
					fields: {
						action: {
							type: "ControlGroupAction",
							id: 1
						},
						controlGroupIndex: {
							type: "uint32",
							id: 2
						}
					},
					nested: {
						ControlGroupAction: {
							values: {
								Recall: 1,
								Set: 2,
								Append: 3,
								SetAndSteal: 4,
								AppendAndSteal: 5
							}
						}
					}
				},
				ActionSelectArmy: {
					fields: {
						selectionAdd: {
							type: "bool",
							id: 1
						}
					}
				},
				ActionSelectWarpGates: {
					fields: {
						selectionAdd: {
							type: "bool",
							id: 1
						}
					}
				},
				ActionSelectLarva: {
					fields: {}
				},
				ActionSelectIdleWorker: {
					fields: {
						type: {
							type: "Type",
							id: 1
						}
					},
					nested: {
						Type: {
							values: {
								Set: 1,
								Add: 2,
								All: 3,
								AddAll: 4
							}
						}
					}
				},
				ActionMultiPanel: {
					fields: {
						type: {
							type: "Type",
							id: 1
						},
						unitIndex: {
							type: "int32",
							id: 2
						}
					},
					nested: {
						Type: {
							values: {
								SingleSelect: 1,
								DeselectUnit: 2,
								SelectAllOfType: 3,
								DeselectAllOfType: 4
							}
						}
					}
				},
				ActionCargoPanelUnload: {
					fields: {
						unitIndex: {
							type: "int32",
							id: 1
						}
					}
				},
				ActionProductionPanelRemoveFromQueue: {
					fields: {
						unitIndex: {
							type: "int32",
							id: 1
						}
					}
				},
				ActionToggleAutocast: {
					fields: {
						abilityId: {
							type: "int32",
							id: 1
						}
					}
				}
			}
		}
	});

module.exports = $root;
