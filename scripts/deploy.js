async function main() {
    const Battle = artifacts.require("Battle");

    const BattleContract = await Battle.new("0x29326F9050Be6DF0eC285d55476dF4906c82DA1e", "0x7fcc8188ef983bc54e7d50c4d46d20ca0174cc37");
    console.log("Battle address", BattleContract.address);
  }
  
main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});