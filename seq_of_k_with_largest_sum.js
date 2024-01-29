// Q.no : 2099

maxSubsequence = function(nums, k){
    // debugger
    number = nums.sort((a,b) => b-a)
    sum = 0;
    for(i=0;i<k;i++){
        // debugger
        sum += nums[i]
    }
    return sum
}

// nums = [2,1,3,3]
// k = 2
maxSubsequence([2,1,3,3],2)


var maxSubsequence = function(nums, k) {
    
    let sortedArray = nums.slice().sort((a, b) => b - a);
    let desiredValues = sortedArray.slice(0, k);
    let finalValues = [];
    
    for (let i = 0; i < nums.length; i++) {
        debugger
        
        let index = desiredValues.indexOf(nums[i]);
        if (index != -1) {
            finalValues.push(nums[i]);
            desiredValues.splice(index, 1);
        }
            
    }
    
    return finalValues;
};

maxSubsequence([-1,-2,3,4],3)