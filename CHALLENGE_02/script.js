function minCompiler(message){
  const arrMessage = message.split("")
  let result = []
  let count = 0
  for(const letter of arrMessage){
    if(letter == "#" || letter == "")  count += 1;
    else if(letter == "@") count -= 1
    else if(letter == "*") count *= count
    else { 
      result.push(count)
    }
  }
  
  return result.join('')
}