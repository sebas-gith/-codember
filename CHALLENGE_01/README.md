# Challenge_01 
A spy is sending encrypted messages.

## Problem

Your mission is to create a program that decodes the messages.

The messages are words separated by spaces like this:
cat dog dog car Cat doG sun

We need the program to return the number of times each word appears in the message, regardless of whether it is in uppercase or lowercase.

The result will be a text string with the word and the number of times it appears in the message, in this format:
cat2dog3car1sun1

The words are sorted by their first appearance in the message!

[Test string](https://codember.dev/data/message_01.txt)

## Code

```javascript

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
               
```
