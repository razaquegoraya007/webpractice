function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function delayedPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = getRandomNumber(1, 10);
        if (randomNumber <= 5) {
          resolve(`Resolved with random number: ${randomNumber}`);
        } else {
          reject(`Rejected with random number: ${randomNumber}`);
        }
      }, 5000);
    });
  }

  delayedPromise()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });