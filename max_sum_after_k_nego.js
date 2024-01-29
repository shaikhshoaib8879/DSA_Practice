// Q.no: 1005

var largestSumAfterKNegations = function(nums, k) {
    nums = nums.sort((a,b) => a-b)
    for (i=0;i<=k;i++){
        debugger
        if (nums[i] < 0){
            return nums[i] =  -nums[i]
        } 
        else if (nums[i] > 0){
            return nums[i] = -nums[i]
        }
        else{
            return num[i] = 0
        }
    
    }
}

largestSumAfterKNegations([-4, 3, -1, 2, 5],3)


var largestSumAfterKNegations = function(nums, k) {
    const sortedNums = nums.sort((a,b) => a-b);
    let lowestPos = 0;
    for (let i = 0; i < k; i++) {
        debugger
        // keep track of the lowest positive number
        if (sortedNums[i] < sortedNums[lowestPos]) lowestPos = i;
        // if the number is negative, flip it, otherwise continue to flip the lowest positive number
        sortedNums[i] < 0 ? sortedNums[i] = -sortedNums[i] : sortedNums[lowestPos] = -sortedNums[lowestPos];
    }
    return sortedNums.reduce((a,b) => a + b);
}

largestSumAfterKNegations([-4, -3, -1, 2, 5],3)