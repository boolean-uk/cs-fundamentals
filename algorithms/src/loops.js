const loopOne = (list) => {
  return list.map(item => item**2)
}

const loopTwo = (list) => {
  return list.filter((item, index) => {
    if (index < list.length / 2) return item
  })
}

const loopThree = (list) => {
  let text = ''
  for (let i = 0; i < list.length; i++) {
    if (i > list.length / 2) { break }
    text += `The number is ${i} `
  }
  return text
}

const nestedLoop = (list) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return list.map(item => {
    return item.split('').filter(char => {
      if (vowels.includes(char)) return char
    })
  })
}

module.exports = {
  loopOne: loopOne,
  loopTwo: loopTwo,
  loopThree: loopThree,
  nestedLoop: nestedLoop
}
