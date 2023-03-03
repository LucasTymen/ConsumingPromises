const { checkInventory } = require("./library.js");

const order = [
  ["sunglasses", 3],
  ["bags", 2],
];

const handleSuccess = (resolvedValue, rejectReason) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:
checkInventory(order)
.then(handleSuccess)
.catch(handleFailure);
