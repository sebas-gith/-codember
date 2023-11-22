function encryptation(list) {
  return list.split('\n').filter(lista => {
    const parameters = lista.split(' ')
    const [min, max] = parameters[0].split('-')
    const [letter] = parameters[1]
    const count = parameters[2].length - parameters[2].split(letter).join('').length
	
    return !(count >= +min && count <= +max)

  })[41]
}
