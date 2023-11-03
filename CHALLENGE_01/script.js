function challenge01(str){
  const strArr = str.toLowerCase().split(" ")
  const lastArr = []
  let unicos = Array.from(new Set(strArr))
  let counts = new Array(unicos.length).fill(0)
  for(let j = 0; j< unicos.length; j++){
      for(let i= 0; i< strArr.length; i++){
        if(unicos[j] == strArr[i]){
          counts[j] += 1
        }
      }
  }
  
  
  for(let i = 0; i < counts.length; i++){
    lastArr.push(unicos[i], counts[i])
  }
  
  return lastArr.join("")
}
