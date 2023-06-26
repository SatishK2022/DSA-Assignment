function moveZeros(nums){

    let insertPosition = 0

    for(let i = 0; i < nums.length; i++){
        // Move all non-zero elements in the array
        if (nums[i] != 0) {
            nums[insertPosition] = nums[i]
            insertPosition++
        }
    }

    // mark the rest of the element as zero
    while(insertPosition < nums.length){
        nums[insertPosition] = 0
        insertPosition++
    }

    return nums
}

let nums = [0, 1, 0, 3, 12]
let result = moveZeros(nums)
console.log(result);