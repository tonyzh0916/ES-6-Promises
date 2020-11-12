const recordVideoOne = new Promise((resolve, reject)=>{
  resolve('Video 1 Recorded');
})

const recordVideoTwo = new Promise((resolve, reject)=>{
  resolve('Video 2 Recorded');
})

const recordVideoThree = new Promise((resolve, reject)=>{
  resolve('Video 3 Recorded');
})

//waiting for all complete
Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((messages)=>{
  console.log(messages);
})

//return whatever the frist return, only return one 
Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((message)=>{
  console.log(message);
})

