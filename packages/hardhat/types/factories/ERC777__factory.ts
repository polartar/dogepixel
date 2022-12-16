/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC777, ERC777Interface } from "../ERC777";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "address[]",
        name: "defaultOperators_",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "AuthorizedOperator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Burned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Minted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "RevokedOperator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Sent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "authorizeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultOperators",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "granularity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "isOperatorFor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "operatorBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "operatorSend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "revokeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001d3b38038062001d3b8339810160408190526200003491620003b0565b82516200004990600290602086019062000221565b5081516200005f90600390602085019062000221565b50805162000075906004906020840190620002b0565b5060005b8151811015620000f157600160056000848481518110620000aa57634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905580620000e88162000535565b91505062000079565b506040516329965a1d60e01b815230600482018190527fac7fbab5f54a3ca8194167523c6753bfeb96a445279294b6125b68cce217705460248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad24906329965a1d90606401600060405180830381600087803b1580156200016c57600080fd5b505af115801562000181573d6000803e3d6000fd5b50506040516329965a1d60e01b815230600482018190527faea199e31a596269b42cdafd93407f14436db6e4cad65417994c2eb37381e05a60248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad2492506329965a1d9150606401600060405180830381600087803b158015620001ff57600080fd5b505af115801562000214573d6000803e3d6000fd5b5050505050505062000573565b8280546200022f90620004f8565b90600052602060002090601f0160209004810192826200025357600085556200029e565b82601f106200026e57805160ff19168380011785556200029e565b828001600101855582156200029e579182015b828111156200029e57825182559160200191906001019062000281565b50620002ac92915062000308565b5090565b8280548282559060005260206000209081019282156200029e579160200282015b828111156200029e57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620002d1565b5b80821115620002ac576000815560010162000309565b600082601f83011262000330578081fd5b81516001600160401b038111156200034c576200034c6200055d565b602062000362601f8301601f19168201620004c5565b828152858284870101111562000376578384fd5b835b838110156200039557858101830151828201840152820162000378565b83811115620003a657848385840101525b5095945050505050565b600080600060608486031215620003c5578283fd5b83516001600160401b0380821115620003dc578485fd5b620003ea878388016200031f565b945060209150818601518181111562000401578485fd5b6200040f888289016200031f565b94505060408601518181111562000424578384fd5b8601601f8101881362000435578384fd5b8051828111156200044a576200044a6200055d565b8060051b92506200045d848401620004c5565b8181528481019083860185850187018c101562000478578788fd5b8795505b83861015620004b457805194506001600160a01b03851685146200049e578788fd5b848352600195909501949186019186016200047c565b508096505050505050509250925092565b604051601f8201601f191681016001600160401b0381118282101715620004f057620004f06200055d565b604052919050565b600181811c908216806200050d57607f821691505b602082108114156200052f57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156200055657634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b6117b880620005836000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063959b8c3f116100a2578063d95b637111610071578063d95b63711461022b578063dd62ed3e1461023e578063fad8b32a14610277578063fc673c4f1461028a578063fe9d93031461029d57610116565b8063959b8c3f146101ea57806395d89b41146101fd5780639bd9bbc614610205578063a9059cbb1461021857610116565b806323b872dd116100e957806323b872dd14610183578063313ce56714610196578063556f0dc7146101a557806362ad1b83146101ac57806370a08231146101c157610116565b806306e485381461011b57806306fdde0314610139578063095ea7b31461014e57806318160ddd14610171575b600080fd5b6101236102b0565b60405161013091906115af565b60405180910390f35b610141610312565b60405161013091906115fc565b61016161015c3660046113c6565b61039b565b6040519015158152602001610130565b6001545b604051908152602001610130565b6101616101913660046112f6565b6103b3565b60405160128152602001610130565b6001610175565b6101bf6101ba366004611336565b61057c565b005b6101756101cf366004611286565b6001600160a01b031660009081526020819052604090205490565b6101bf6101f8366004611286565b6105b8565b6101416106d6565b6101bf6102133660046113f1565b6106e5565b6101616102263660046113c6565b610708565b6101616102393660046112be565b6107bb565b61017561024c3660046112be565b6001600160a01b03918216600090815260086020908152604080832093909416825291909152205490565b6101bf610285366004611286565b61085d565b6101bf610298366004611448565b610979565b6101bf6102ab3660046114c5565b6109b1565b6060600480548060200260200160405190810160405280929190818152602001828054801561030857602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116102ea575b5050505050905090565b60606002805461032190611703565b80601f016020809104026020016040519081016040528092919081815260200182805461034d90611703565b80156103085780601f1061036f57610100808354040283529160200191610308565b820191906000526020600020905b81548152906001019060200180831161037d57509395945050505050565b6000336103a98185856109d0565b5060019392505050565b60006001600160a01b0383166103e45760405162461bcd60e51b81526004016103db9061160f565b60405180910390fd5b6001600160a01b0384166104495760405162461bcd60e51b815260206004820152602660248201527f4552433737373a207472616e736665722066726f6d20746865207a65726f206160448201526564647265737360d01b60648201526084016103db565b600033905061047a818686866040518060200160405280600081525060405180602001604052806000815250610af7565b6104a6818686866040518060200160405280600081525060405180602001604052806000815250610c2e565b6001600160a01b038086166000908152600860209081526040808320938516835292905220548381101561052e5760405162461bcd60e51b815260206004820152602960248201527f4552433737373a207472616e7366657220616d6f756e74206578636565647320604482015268616c6c6f77616e636560b81b60648201526084016103db565b610542868361053d87856116ec565b6109d0565b6105708287878760405180602001604052806000815250604051806020016040528060008152506000610d94565b50600195945050505050565b61058633866107bb565b6105a25760405162461bcd60e51b81526004016103db90611653565b6105b185858585856001610f68565b5050505050565b336001600160a01b038216141561061d5760405162461bcd60e51b8152602060048201526024808201527f4552433737373a20617574686f72697a696e672073656c66206173206f70657260448201526330ba37b960e11b60648201526084016103db565b6001600160a01b03811660009081526005602052604090205460ff161561066e573360009081526007602090815260408083206001600160a01b03851684529091529020805460ff1916905561069d565b3360009081526006602090815260408083206001600160a01b03851684529091529020805460ff191660011790555b60405133906001600160a01b038316907ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f990600090a350565b60606003805461032190611703565b61070333848484604051806020016040528060008152506001610f68565b505050565b60006001600160a01b0383166107305760405162461bcd60e51b81526004016103db9061160f565b6000339050610761818286866040518060200160405280600081525060405180602001604052806000815250610af7565b61078d818286866040518060200160405280600081525060405180602001604052806000815250610c2e565b6103a98182868660405180602001604052806000815250604051806020016040528060008152506000610d94565b6000816001600160a01b0316836001600160a01b0316148061082657506001600160a01b03831660009081526005602052604090205460ff16801561082657506001600160a01b0380831660009081526007602090815260408083209387168352929052205460ff16155b8061085657506001600160a01b0380831660009081526006602090815260408083209387168352929052205460ff165b9392505050565b6001600160a01b0381163314156108c05760405162461bcd60e51b815260206004820152602160248201527f4552433737373a207265766f6b696e672073656c66206173206f70657261746f6044820152603960f91b60648201526084016103db565b6001600160a01b03811660009081526005602052604090205460ff1615610914573360009081526007602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610940565b3360009081526006602090815260408083206001600160a01b03851684529091529020805460ff191690555b60405133906001600160a01b038316907f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa190600090a350565b61098333856107bb565b61099f5760405162461bcd60e51b81526004016103db90611653565b6109ab8484848461104b565b50505050565b6109cc3383836040518060200160405280600081525061104b565b5050565b6001600160a01b038316610a345760405162461bcd60e51b815260206004820152602560248201527f4552433737373a20617070726f76652066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103db565b6001600160a01b038216610a965760405162461bcd60e51b815260206004820152602360248201527f4552433737373a20617070726f766520746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103db565b6001600160a01b0383811660008181526008602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60405163555ddc6560e11b81526001600160a01b03861660048201527f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe8956024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca9060440160206040518083038186803b158015610b7357600080fd5b505afa158015610b87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bab91906112a2565b90506001600160a01b03811615610c2557604051633ad5cbc160e11b81526001600160a01b038216906375ab978290610bf2908a908a908a908a908a908a90600401611555565b600060405180830381600087803b158015610c0c57600080fd5b505af1158015610c20573d6000803e3d6000fd5b505050505b50505050505050565b6001600160a01b03851660009081526020819052604090205483811015610ca75760405162461bcd60e51b815260206004820152602760248201527f4552433737373a207472616e7366657220616d6f756e7420657863656564732060448201526662616c616e636560c81b60648201526084016103db565b6001600160a01b03808716600090815260208190526040808220878503905591871681529081208054869290610cde9084906116d4565b92505081905550846001600160a01b0316866001600160a01b0316886001600160a01b03167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987878787604051610d369392919061169f565b60405180910390a4846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef86604051610d8391815260200190565b60405180910390a350505050505050565b60405163555ddc6560e11b81526001600160a01b03861660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca9060440160206040518083038186803b158015610e1057600080fd5b505afa158015610e24573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4891906112a2565b90506001600160a01b03811615610ec4576040516223de2960e01b81526001600160a01b038216906223de2990610e8d908b908b908b908b908b908b90600401611555565b600060405180830381600087803b158015610ea757600080fd5b505af1158015610ebb573d6000803e3d6000fd5b50505050610f5e565b8115610f5e576001600160a01b0386163b15610f5e5760405162461bcd60e51b815260206004820152604d60248201527f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460448201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60648201526c1ad95b9cd49958da5c1a595b9d609a1b608482015260a4016103db565b5050505050505050565b6001600160a01b038616610fc95760405162461bcd60e51b815260206004820152602260248201527f4552433737373a2073656e642066726f6d20746865207a65726f206164647265604482015261737360f01b60648201526084016103db565b6001600160a01b03851661101f5760405162461bcd60e51b815260206004820181905260248201527f4552433737373a2073656e6420746f20746865207a65726f206164647265737360448201526064016103db565b3361102e818888888888610af7565b61103c818888888888610c2e565b610c2581888888888888610d94565b6001600160a01b0384166110ac5760405162461bcd60e51b815260206004820152602260248201527f4552433737373a206275726e2066726f6d20746865207a65726f206164647265604482015261737360f01b60648201526084016103db565b336110bc81866000878787610af7565b6001600160a01b038516600090815260208190526040902054848110156111315760405162461bcd60e51b815260206004820152602360248201527f4552433737373a206275726e20616d6f756e7420657863656564732062616c616044820152626e636560e81b60648201526084016103db565b6001600160a01b03861660009081526020819052604081208683039055600180548792906111609084906116ec565b92505081905550856001600160a01b0316826001600160a01b03167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a40988787876040516111ae9392919061169f565b60405180910390a36040518581526000906001600160a01b038816907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050505050565b600082601f83011261120f578081fd5b813567ffffffffffffffff8082111561122a5761122a611754565b604051601f8301601f19908116603f0116810190828211818310171561125257611252611754565b8160405283815286602085880101111561126a578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215611297578081fd5b81356108568161176a565b6000602082840312156112b3578081fd5b81516108568161176a565b600080604083850312156112d0578081fd5b82356112db8161176a565b915060208301356112eb8161176a565b809150509250929050565b60008060006060848603121561130a578081fd5b83356113158161176a565b925060208401356113258161176a565b929592945050506040919091013590565b600080600080600060a0868803121561134d578081fd5b85356113588161176a565b945060208601356113688161176a565b935060408601359250606086013567ffffffffffffffff8082111561138b578283fd5b61139789838a016111ff565b935060808801359150808211156113ac578283fd5b506113b9888289016111ff565b9150509295509295909350565b600080604083850312156113d8578182fd5b82356113e38161176a565b946020939093013593505050565b600080600060608486031215611405578283fd5b83356114108161176a565b925060208401359150604084013567ffffffffffffffff811115611432578182fd5b61143e868287016111ff565b9150509250925092565b6000806000806080858703121561145d578384fd5b84356114688161176a565b935060208501359250604085013567ffffffffffffffff8082111561148b578384fd5b611497888389016111ff565b935060608701359150808211156114ac578283fd5b506114b9878288016111ff565b91505092959194509250565b600080604083850312156114d7578182fd5b82359150602083013567ffffffffffffffff8111156114f4578182fd5b611500858286016111ff565b9150509250929050565b60008151808452815b8181101561152f57602081850181015186830182015201611513565b818111156115405782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0387811682528681166020830152851660408201526060810184905260c0608082018190526000906115909083018561150a565b82810360a08401526115a2818561150a565b9998505050505050505050565b6020808252825182820181905260009190848201906040850190845b818110156115f05783516001600160a01b0316835292840192918401916001016115cb565b50909695505050505050565b600060208252610856602083018461150a565b60208082526024908201527f4552433737373a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b6020808252602c908201527f4552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f60408201526b39103337b9103437b63232b960a11b606082015260800190565b6000848252606060208301526116b8606083018561150a565b82810360408401526116ca818561150a565b9695505050505050565b600082198211156116e7576116e761173e565b500190565b6000828210156116fe576116fe61173e565b500390565b600181811c9082168061171757607f821691505b6020821081141561173857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461177f57600080fd5b5056fea2646970667358221220830a32c5b942b74586d532d8551d07957e29ed349d44bf36c26ed127b77081f464736f6c63430008030033";

type ERC777ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC777ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC777__factory extends ContractFactory {
  constructor(...args: ERC777ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    defaultOperators_: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC777> {
    return super.deploy(
      name_,
      symbol_,
      defaultOperators_,
      overrides || {}
    ) as Promise<ERC777>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    defaultOperators_: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      defaultOperators_,
      overrides || {}
    );
  }
  attach(address: string): ERC777 {
    return super.attach(address) as ERC777;
  }
  connect(signer: Signer): ERC777__factory {
    return super.connect(signer) as ERC777__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC777Interface {
    return new utils.Interface(_abi) as ERC777Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC777 {
    return new Contract(address, _abi, signerOrProvider) as ERC777;
  }
}