function viewReal(string){
  return string.split('\n').filter(element => {
    const [alpha, checkKey] = element.split('-')
    const count = []
    for(let i = 0;  i < alpha.length; i++){
      count.push(0)
      for(let j = 0; j < alpha.length; j++){
        if(alpha[i] == alpha[j]){
          count[i]++
        }
      }
    }
    const realKey = []
      for (let j = 0; j < alpha.length; j++){
        if(count[j] == 1){
          realKey.push(alpha[j])
        }
      }
    return realKey.join('') === checkKey
  })
  
}