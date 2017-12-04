//This function waits for an unknown amount of time
const wait = (delay, callback) => {
  // setInterval returns an ID. We need this to stop the timer
  const id = setInterval(() => {
    // Generate a random number between 0 and 1
    const rand = Math.random();

    if (rand > 0.95) {
      // Call the callback function. Note the first parameter is an error
      callback(null, 'Congratulations, you have finished waiting.');
      // Stop the timer
      clearInterval(id);
    } else if (rand < 0.01) {
      // Call the callback function. Note we're setting an error now
      callback('Could not wait any longer!', null);
      // Stop the timer
      clearInterval(id);
    } else {
      // Print to STDOUT
      console.log('Waiting ...');
    }
  }, Number(delay));
};

const util = require('util');

const waitAsync = util.promisify(wait);

// waitAsync(0.93)
//   .then(data => console.log(data))
//   .catch(err => console.error(`[Error]: ${err}`));

(async () => { 
  let result;
  try {
    result = await waitAsync(1000);
  } catch (err) {
    return console.error(err)
  }
    return console.log(result);
}) ();






//there is an article by Fred Schott on callbacks for nodejs. also,
//known as node-style callbacks. very good article.