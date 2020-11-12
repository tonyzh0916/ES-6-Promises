let state = 1;
function step1(resolve,reject){
    console.log('第一步');
    if(state == 1) {
        resolve('第一步执行成功')
    }else{
        reject('第一步执行失败')
    }
}

function step2(resolve,reject){
    console.log('第二步');
    if(state == 1) {
        resolve('第二步执行成功')
    }else{
        reject('第二步执行失败')
    }
}

function step3(resolve,reject){
    console.log('第三步');
    if(state == 1) {
        resolve('第三步执行成功')
    }else{
        reject('第三步执行失败')
    }
}

new Promise(step1).then(function(res){
    console.log(res)
    return new Promise(step2)
}).then(function(res) {
    console.log(res)
    return new Promise(step3)
}).then(function(res) {
    console.log(res)
})
