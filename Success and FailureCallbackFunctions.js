/*JavaScript Promises
Success and Failure Callback Functions

To handle a “successful” promise, or a promise that resolved, we invoke
 .then() on the promise, passing in a success
handler callback function:*/

const prom = new Promise((resolve, reject) => {
  resolve('Yay!');
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

prom.then(handleSuccess); // Prints: 'Yay!'

/*
Let’s break down what’s happening in the example code:

    prom is a promise which will resolve to 'Yay!'.
    We define a function, handleSuccess(), which prints the argument passed to
    it.
    We invoke prom‘s .then() function passing in our handleSuccess() function.
    Since prom resolves, handleSuccess() is invoked with prom‘s resolved value,
    'Yay', so 'Yay' is logged to the console.

With typical promise consumption, we won’t know whether a promise will resolve
or reject, so we’ll need to provide the logic for either case. We can pass both
a success callback and a failure callback to .then().
*/
let prom2 = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});

const handleSuccess2 = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

prom.then(handleSuccess, handleFailure);

/*
Let’s break down what’s happening in the example code:

    prom is a promise which will randomly either resolve with 'Yay!' or reject
    with 'Ohhh noooo!'.
    We pass two handler functions to .then(). The first will be invoked with
    'Yay!' if the promise resolves, and the second will be invoked with
    'Ohhh noooo!' if the promise rejects.

    Note: The success callback is sometimes called the
    “success handler function” or the onFulfilled function. The failure callback
    is sometimes called the “failure handler function” or the onRejected
    function.

Let’s write some success and failure callbacks!
Instructions
1.

Take a look at the provided code in app.js. We use require() to include the
function checkInventory() from library.js. It builds on the logic of the
orderSunglasses() function you wrote in a previous exercise.

    checkInventory() takes in an array representing an order and returns a
    promise.
    If every item in the order is in stock, that promise resolves with the
    value "Thank you. Your order was successful."
    Otherwise, the promise rejects with the value "We're sorry. Your order
    could not be completed because some items are sold out".

We used setTimeout() to ensure that the checkInventory() promise settles
asynchronously.

If you’d like, look at the library.js file to see how it works. Press
“Check Work” when you’re ready to move on.
*/
