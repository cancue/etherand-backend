import Web3 from "web3"
import config from "config"

const rpcServer = process.env.NODE_ENV === "development" ? "RPC_SERVER_LOCAL" : "RPC_SERVER"
const rpc = config.get(rpcServer)
const web3 = new Web3(new Web3.providers.WebsocketProvider(rpc))

export default web3
