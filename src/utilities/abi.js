const getAbi = () => {
    return [
        {
          "inputs":[
            {
              "internalType":"uint256",
              "name":"_registrationDeposit",
              "type":"uint256"
            },
            {
              "internalType":"uint256",
              "name":"_bandOfTolerance",
              "type":"uint256"
            }
          ],
          "stateMutability":"nonpayable",
          "type":"constructor",
          "name":"constructor"
        },
        {
          "anonymous":false,
          "inputs":[
            {
              "indexed":true,
              "internalType":"bytes32",
              "name":"alertID",
              "type":"bytes32"
            },
            {
              "indexed":true,
              "internalType":"address",
              "name":"client",
              "type":"address"
            },
            {
              "indexed":true,
              "internalType":"address",
              "name":"operator",
              "type":"address"
            },
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"gasAccounted",
              "type":"uint256"
            },
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"gasPrice",
              "type":"uint256"
            },
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"gasCost",
              "type":"uint256"
            },
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"ethAccounted",
              "type":"uint256"
            }
          ],
          "name":"AlertCompensated",
          "type":"event"
        },
        {
          "anonymous":false,
          "inputs":[
            {
              "indexed":true,
              "internalType":"bytes32",
              "name":"requestID",
              "type":"bytes32"
            },
            {
              "indexed":false,
              "internalType":"bytes32",
              "name":"alertID",
              "type":"bytes32"
            },
            {
              "indexed":false,
              "internalType":"address[2]",
              "name":"assignedNode",
              "type":"address[2]"
            },
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"gasCost",
              "type":"uint256"
            }
          ],
          "name":"AlertDispatched",
          "type":"event"
        },
        {
          "anonymous":false,
          "inputs":[
            {
              "indexed":true,
              "internalType":"bytes32",
              "name":"requestID",
              "type":"bytes32"
            },
            {
              "indexed":true,
              "internalType":"address",
              "name":"servingNode",
              "type":"address"
            },
            {
              "indexed":false,
              "internalType":"bytes32",
              "name":"alertID",
              "type":"bytes32"
            },
            {
              "indexed":false,
              "internalType":"enum KhronusCoordinatorV01.alertStatus",
              "name":"status",
              "type":"uint8"
            }
          ],
          "name":"AlertFulfilled",
          "type":"event"
        },
        {
          "anonymous":false,
          "inputs":[
            {
              "indexed":true,
              "internalType":"address",
              "name":"servingNode",
              "type":"address"
            },
            {
              "indexed":false,
              "internalType":"bytes32",
              "name":"alertID",
              "type":"bytes32"
            },
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"expectedTimestamp",
              "type":"uint256"
            },
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"actualTimestamp",
              "type":"uint256"
            }
          ],
          "name":"AlertMistaken",
          "type":"event"
        },
        {
          "anonymous":false,
          "inputs":[
            {
              "indexed":true,
              "internalType":"address",
              "name":"khronUser",
              "type":"address"
            },
            {
              "indexed":true,
              "internalType":"uint256",
              "name":"timestamp",
              "type":"uint256"
            },
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"amount",
              "type":"uint256"
            }
          ],
          "name":"BalanceWithdrawn",
          "type":"event"
        },
        {
          "anonymous":false,
          "inputs":[
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"newValue",
              "type":"uint256"
            },
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"timestamp",
              "type":"uint256"
            }
          ],
          "name":"BandOfToleranceUpdated",
          "type":"event"
        },
        {
          "anonymous":false,
          "inputs":[
            {
              "indexed":true,
              "internalType":"address",
              "name":"client",
              "type":"address"
            },
            {
              "indexed":true,
              "internalType":"address",
              "name":"requester",
              "type":"address"
            },
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"amount",
              "type":"uint256"
            }
          ],
          "name":"ClientFunded",
          "type":"event"
        },
        {
          "anonymous":false,
          "inputs":[
            {
              "indexed":true,
              "internalType":"address",
              "name":"clientContract",
              "type":"address"
            },
            {
              "indexed":true,
              "internalType":"uint256",
              "name":"timestamp",
              "type":"uint256"
            },
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"amount",
              "type":"uint256"
            }
          ],
          "name":"ClientFundsWithdrawn",
          "type":"event"
        },
        {
          "anonymous":false,
          "inputs":[
            {
              "indexed":true,
              "internalType":"address",
              "name":"client",
              "type":"address"
            },
            {
              "indexed":true,
              "internalType":"address",
              "name":"requester",
              "type":"address"
            },
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"timestamp",
              "type":"uint256"
            }
          ],
          "name":"ClientRegistered",
          "type":"event"
        },
        {
          "anonymous":false,
          "inputs":[
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"minimumClientBalance",
              "type":"uint256"
            },
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"timestamp",
              "type":"uint256"
            }
          ],
          "name":"MinimumClientBalanceUpdated",
          "type":"event"
        },
        {
          "anonymous":false,
          "inputs":[
            {
              "indexed":true,
              "internalType":"address",
              "name":"node",
              "type":"address"
            },
            {
              "indexed":false,
              "internalType":"bytes32",
              "name":"index",
              "type":"bytes32"
            },
            {
              "indexed":false,
              "internalType":"address",
              "name":"owner",
              "type":"address"
            }
          ],
          "name":"NodeRegistered",
          "type":"event"
        },
        {
          "anonymous":false,
          "inputs":[
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"newValue",
              "type":"uint256"
            },
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"timestamp",
              "type":"uint256"
            }
          ],
          "name":"OperatorMarkupPCUpdated",
          "type":"event"
        },
        {
          "anonymous":false,
          "inputs":[
            {
              "indexed":true,
              "internalType":"address",
              "name":"previousOwner",
              "type":"address"
            },
            {
              "indexed":true,
              "internalType":"address",
              "name":"newOwner",
              "type":"address"
            }
          ],
          "name":"OwnershipTransferred",
          "type":"event"
        },
        {
          "anonymous":false,
          "inputs":[
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"newValue",
              "type":"uint256"
            },
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"timestamp",
              "type":"uint256"
            }
          ],
          "name":"ProtocolGasConstantUpdated",
          "type":"event"
        },
        {
          "anonymous":false,
          "inputs":[
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"newValue",
              "type":"uint256"
            },
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"timestamp",
              "type":"uint256"
            }
          ],
          "name":"RegistrationDepositUpdated",
          "type":"event"
        },
        {
          "anonymous":false,
          "inputs":[
            {
              "indexed":true,
              "internalType":"address",
              "name":"client",
              "type":"address"
            },
            {
              "indexed":false,
              "internalType":"bytes32",
              "name":"requestID",
              "type":"bytes32"
            }
          ],
          "name":"RequestProcessed",
          "type":"event"
        },
        {
          "anonymous":false,
          "inputs":[
            {
              "indexed":true,
              "internalType":"bytes32",
              "name":"alertID",
              "type":"bytes32"
            },
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"gasCost",
              "type":"uint256"
            },
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"accountedGas",
              "type":"uint256"
            },
            {
              "indexed":false,
              "internalType":"uint256",
              "name":"txGasPrice",
              "type":"uint256"
            }
          ],
          "name":"WorkflowCompleted",
          "type":"event"
        },
        {
          "inputs":[
            {
              "internalType":"address",
              "name":"_clientContract",
              "type":"address"
            }
          ],
          "name":"fundClient",
          "outputs":[
            
          ],
          "stateMutability":"payable",
          "type":"function"
        },
        {
          "inputs":[
            {
              "internalType":"bytes32",
              "name":"_alertID",
              "type":"bytes32"
            }
          ],
          "name":"getAlertRequest",
          "outputs":[
            {
              "internalType":"bytes32",
              "name":"",
              "type":"bytes32"
            }
          ],
          "stateMutability":"view",
          "type":"function"
        },
        {
          "inputs":[
            {
              "internalType":"bytes32",
              "name":"_alertID",
              "type":"bytes32"
            }
          ],
          "name":"getAlertServers",
          "outputs":[
            {
              "internalType":"address[2]",
              "name":"",
              "type":"address[2]"
            }
          ],
          "stateMutability":"view",
          "type":"function"
        },
        {
          "inputs":[
            {
              "internalType":"bytes32",
              "name":"_alertID",
              "type":"bytes32"
            }
          ],
          "name":"getAlertTimestamp",
          "outputs":[
            {
              "internalType":"uint256",
              "name":"",
              "type":"uint256"
            }
          ],
          "stateMutability":"view",
          "type":"function"
        },
        {
          "inputs":[
            {
              "internalType":"address",
              "name":"_beneficiary",
              "type":"address"
            }
          ],
          "name":"getBalanceOf",
          "outputs":[
            {
              "internalType":"uint256",
              "name":"",
              "type":"uint256"
            }
          ],
          "stateMutability":"view",
          "type":"function"
        },
        {
          "inputs":[
            
          ],
          "name":"getBandOfTolerance",
          "outputs":[
            {
              "internalType":"uint256",
              "name":"",
              "type":"uint256"
            }
          ],
          "stateMutability":"view",
          "type":"function"
        },
        {
          "inputs":[
            {
              "internalType":"bytes32",
              "name":"_requestID",
              "type":"bytes32"
            }
          ],
          "name":"getClientContract",
          "outputs":[
            {
              "internalType":"address",
              "name":"",
              "type":"address"
            }
          ],
          "stateMutability":"view",
          "type":"function"
        },
        {
          "inputs":[
            
          ],
          "name":"getMinimumClientBalance",
          "outputs":[
            {
              "internalType":"uint256",
              "name":"",
              "type":"uint256"
            }
          ],
          "stateMutability":"view",
          "type":"function"
        },
        {
          "inputs":[
            {
              "internalType":"bytes32",
              "name":"_index",
              "type":"bytes32"
            }
          ],
          "name":"getNodeFromIndex",
          "outputs":[
            {
              "internalType":"address",
              "name":"",
              "type":"address"
            }
          ],
          "stateMutability":"view",
          "type":"function"
        },
        {
          "inputs":[
            
          ],
          "name":"getOperatorMarkup",
          "outputs":[
            {
              "internalType":"uint256",
              "name":"",
              "type":"uint256"
            }
          ],
          "stateMutability":"view",
          "type":"function"
        },
        {
          "inputs":[
            
          ],
          "name":"getProtocolGasConstant",
          "outputs":[
            {
              "internalType":"uint256",
              "name":"",
              "type":"uint256"
            }
          ],
          "stateMutability":"view",
          "type":"function"
        },
        {
          "inputs":[
            
          ],
          "name":"getRegistrationDeposit",
          "outputs":[
            {
              "internalType":"uint256",
              "name":"",
              "type":"uint256"
            }
          ],
          "stateMutability":"view",
          "type":"function"
        },
        {
          "inputs":[
            
          ],
          "name":"nodeCorrelative",
          "outputs":[
            {
              "internalType":"uint256",
              "name":"",
              "type":"uint256"
            }
          ],
          "stateMutability":"view",
          "type":"function"
        },
        {
          "inputs":[
            
          ],
          "name":"owner",
          "outputs":[
            {
              "internalType":"address",
              "name":"",
              "type":"address"
            }
          ],
          "stateMutability":"view",
          "type":"function"
        },
        {
          "inputs":[
            {
              "internalType":"address",
              "name":"_clientContract",
              "type":"address"
            }
          ],
          "name":"registerClient",
          "outputs":[
            
          ],
          "stateMutability":"payable",
          "type":"function"
        },
        {
          "inputs":[
            {
              "internalType":"address",
              "name":"_nodeAddress",
              "type":"address"
            }
          ],
          "name":"registerNode",
          "outputs":[
            {
              "internalType":"bytes32",
              "name":"",
              "type":"bytes32"
            }
          ],
          "stateMutability":"nonpayable",
          "type":"function"
        },
        {
          "inputs":[
            
          ],
          "name":"renounceOwnership",
          "outputs":[
            
          ],
          "stateMutability":"nonpayable",
          "type":"function"
        },
        {
          "inputs":[
            {
              "internalType":"uint256",
              "name":"_timestamp",
              "type":"uint256"
            },
            {
              "internalType":"uint256",
              "name":"_iterations",
              "type":"uint256"
            },
            {
              "internalType":"uint256",
              "name":"_step",
              "type":"uint256"
            }
          ],
          "name":"requestKhronTab",
          "outputs":[
            {
              "internalType":"bytes32",
              "name":"",
              "type":"bytes32"
            }
          ],
          "stateMutability":"nonpayable",
          "type":"function"
        },
        {
          "inputs":[
            {
              "internalType":"bytes32",
              "name":"_alertID",
              "type":"bytes32"
            }
          ],
          "name":"serveKhronAlert",
          "outputs":[
            {
              "internalType":"bool",
              "name":"",
              "type":"bool"
            }
          ],
          "stateMutability":"nonpayable",
          "type":"function"
        },
        {
          "inputs":[
            {
              "internalType":"uint256",
              "name":"_bandOfTolerance",
              "type":"uint256"
            }
          ],
          "name":"setBandOfTolerance",
          "outputs":[
            
          ],
          "stateMutability":"nonpayable",
          "type":"function"
        },
        {
          "inputs":[
            {
              "internalType":"uint256",
              "name":"_minimumClientBalance",
              "type":"uint256"
            }
          ],
          "name":"setMinimumClientBalance",
          "outputs":[
            
          ],
          "stateMutability":"nonpayable",
          "type":"function"
        },
        {
          "inputs":[
            {
              "internalType":"uint256",
              "name":"_operatorMarkupPC",
              "type":"uint256"
            }
          ],
          "name":"setOperatorMarkup",
          "outputs":[
            
          ],
          "stateMutability":"nonpayable",
          "type":"function"
        },
        {
          "inputs":[
            {
              "internalType":"uint256",
              "name":"_protocolGasConstant",
              "type":"uint256"
            }
          ],
          "name":"setProtocolGasConstant",
          "outputs":[
            
          ],
          "stateMutability":"nonpayable",
          "type":"function"
        },
        {
          "inputs":[
            {
              "internalType":"uint256",
              "name":"_registrationDeposit",
              "type":"uint256"
            }
          ],
          "name":"setRegistrationDeposit",
          "outputs":[
            
          ],
          "stateMutability":"nonpayable",
          "type":"function"
        },
        {
          "inputs":[
            {
              "internalType":"address",
              "name":"newOwner",
              "type":"address"
            }
          ],
          "name":"transferOwnership",
          "outputs":[
            
          ],
          "stateMutability":"nonpayable",
          "type":"function"
        },
        {
          "inputs":[
            {
              "internalType":"uint256",
              "name":"_amount",
              "type":"uint256"
            }
          ],
          "name":"withdrawBalance",
          "outputs":[
            
          ],
          "stateMutability":"nonpayable",
          "type":"function"
        },
        {
          "inputs":[
            {
              "internalType":"address",
              "name":"_clientContract",
              "type":"address"
            },
            {
              "internalType":"uint256",
              "name":"_amount",
              "type":"uint256"
            }
          ],
          "name":"withdrawFromContract",
          "outputs":[
            
          ],
          "stateMutability":"nonpayable",
          "type":"function"
        }
      ]
}

export {getAbi}