{
  "web3FunctionVersion": "2.0.0",
  "runtime": "js-1.0",
  "memory": 128,
  "timeout": 30,
  "userArgs": {
    "currency": "string",
    "oracle": "string"
  }
}
Web3Function.onRun(async (context: Web3FunctionContext) => {
  const { userArgs, gelatoArgs, secrets } = context;

  // User args:
  console.log("Currency:", userArgs.currency);
  console.log("Oracle:", userArgs.oracle);
});
{
  "currency": "optimism ethereum",
  "oracle": "0x2491b230BaA58200B0C2857eaB1bFD523bE345b4"
}
