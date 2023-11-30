function finalProblem (csv){
  return csv.split('\n').filter(user => {
    const [id, username, email, age, location] = user.split(',')
  return!((/^[a-zA-Z0-9]+$/.test(id) && id !== '') && (/^[a-zA-Z0-9]+$/.test(username) && username !== '') && (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email !== '') && (!isNaN(age) || age === '') && (isNaN(location) || location === ''))
  }).map(usuario => usuario.split(',')[1][0]).join('')
}
