function makeRequest(location){
  return new Promise((resolve, reject)=>{
    if(location === 'Google'){
      resolve('Google says hi');
    }else{
      reject('We can only talk to Google');
    }
  })
}

function processRequest(response){
  return new Promise((resolve, reject)=>{
    console.log('Processing response')
    resolve(`Extra Information + ${response}`)
  })
}

// makeRequest('facebook').then(response =>{
//   console.log('Response Received')
//   return processRequest(response);
// }).then(processResponse =>{
//   console.log(processResponse);
// }).catch(err =>{
//   console.log(err);
// })

//All the async funtion must put in a function like doWork() and add async 
async function doWork(){
  try{
      const response = await makeRequest('AAA');  
      console.log('await Response Received ');
      const processedResponse = await processRequest(response);
      console.log(processedResponse)
  }catch(err){
    console.log(err)
  }

}

doWork();