const orderfood=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const available=Math.random()>0.5;
      if(available){
        resolve("order placed");
      }else{
        reject("order not placed");
      }
    },3000)
  })
}
orderfood().then((data)=>{
  console.log(data);
}).catch((error)=>{  
  console.log(error);
})