import web3 from "@/common/web3"
import etherand from "./etherand"

export default () => {
  web3.eth.subscribe("newBlockHeaders")
    .on("data", ({ number }) => console.log(number))
    .on("error", console.log)

  etherand()
}
