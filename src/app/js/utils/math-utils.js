function shuffle(array) {
  let newArr = array
  for (let i = newArr.length; i ; i--) {
    let j = Math.floor(Math.random() * i);
    [newArr[i - 1], newArr[j]] = [newArr[j], newArr[i - 1]];
  }
  return newArr
}



export default {shuffle}
