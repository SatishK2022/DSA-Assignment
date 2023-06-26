function firstUniqueCharacter(s){
    let obj = {}

    for(let i of s){
        if (!obj[i]) {
            obj[i] = 1
        } else{
            obj[i]++
        }
    }

    for(let j in obj){
        if (obj[j] === 1) {
            return s.indexOf(j)
        }
    }

    return -1
}

let s1 = "leetcode"
let s2 = "loveleetcode"
let result1 = firstUniqueCharacter(s1)
let result2 = firstUniqueCharacter(s2)
console.log(result1);
console.log(result2);