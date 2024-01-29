// Q.no: 628

maximumProduct = function(nums){
    number = nums.sort((a,b) => b -a)
    let product = 1
    for (i = 0; i <= number.length-1 ;i++){
        // debugger
        product*=number[i]
    }
    return product
}

maximumProduct([-100,-98,-1,2,3,4])
nums = [1,2,3,4]
nums = [4,3,2,1]
max = [4,3,2,1,-97,-98,-100]

maximumProduct([4,3,2,1,-97,-98,-100])
