import web3 from "@/common/web3"
import Etherand from "../Etherand.json"

export default () => {

  const contractAddress = Etherand.networks["5777"].address
  const etherand = new web3.eth.Contract(Etherand.abi, contractAddress)

  //console.log(Etherand.abi)
  console.log(contractAddress)

  const _number = Math.floor(Math.random() * 10000) + 1
  let _id = 0

  const resToReq = (_id) => {
    console.log("==== etherand.methods.respondToRequest")
    etherand.methods.respondToRequest(_id, _number)
        .send({ from: "0xd0e9508ac66D5BB4Ec20B45008ad42560e100432", gas: 1000000 })
        .then((receipt) => {
          console.log("respondToRequest" + receipt)
        })
  }

  etherand.events.RequestEntropy({
    filter: { _from: "0xd0e9508ac66D5BB4Ec20B45008ad42560e100432" }
  }).on("data", (data) => {
    // reponseToRequest 호출
    console.log("!!!!!events.RequestEntropy" + JSON.stringify(data))
    _id = data.returnValues.id
    resToReq(_id)
  })


  // web3.eth.getAccounts().then((accounts) => {
  //   // web3.eth.getAccounts().then(res => { ... })
  //
  //   etherand.events.RequestEntropy({
  //     filter: { _from: "0xd0e9508ac66D5BB4Ec20B45008ad42560e100432" }
  //   }).on("data", (data) => {
  //     // reponseToRequest 호출
  //     console.log("!!!!!events.RequestEntropy" + JSON.stringify(data))
  //     resToReq()
  //   })


    // const _from = "0xd0e9508ac66D5BB4Ec20B45008ad42560e100432"
    // const _blockCount = 0;
    // const _entropyCount = 0;
    //
    // console.log("=== etherand.methods.requestEntropy")

    // etherand.methods.requestEntropy(_from, _blockCount, _entropyCount)
    //     .send({ from: accounts[1] })
        // .once("transactionHash", (hash) => console.log("requestEntropy transactionHash: " + hash))
        // .once("receipt", (receipt) => console.log("requestEntropy receipt: " + receipt))








  //})


  // web3.eth.getAccounts().then((accounts) => {
  //   const _number = Math.ceil(Math.random())
  //   const _id = 0;
  //
  //   console.log("==== etherand.methods.respondToRequest" )
  //
  //   etherand.methods.respondToRequest(_id, _number)
  //       .send({from: accounts[2]})
  //       .then((receipt) => {
  //         console.log("respondToRequest" + receipt)
  //       })
  // })




  // etherand.method.RequestEntropy(from)
  // web3.eth.subscribe()
  //     .on("data", ({number}) => console.log(number))
  //     .on("error", console.log)
  // etherand.method.respondToRequest(_id, _number)


}
