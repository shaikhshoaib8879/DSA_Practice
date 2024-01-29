//Q.no 645

nums = [1,2,2,4]

findErrorNums = function(nums){
    obj = new Object();
    for(i=0;i<nums.length ;i++){ 
        debugger
        value = nums[i];
        if (obj[value] == undefined) {
            obj[value] = value
        }
        else{
            arr = obj[value] = value + 1
            array = Array()
            array.push(arr)
            array.unshift(array[0]-1)
            return array

        }
    }
}

findErrorNums([2,2])