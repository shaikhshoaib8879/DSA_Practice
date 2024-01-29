// Q.no : 1346

checkIfExist = function(arr){
    for(i=0;i<=arr.length-1;i++){
        debugger
        value = arr[i]
        for(j=0;j<=arr.length;j++){
            debugger
            if (arr.indexOf(arr[j]) < arr.length){
                if ((arr[j]* 2) == arr[i]){
                    return true
                }
            }
            else{
                false
            }
        }
    }
    return false
}

checkIfExist([7,1,14,11])

// leetcode solution

var checkIfExist = function(arr) {
    const hashTable = {};
    
    for (let i = 0; i < arr.length; i++) {
        debugger
        const currValue = arr[i];
        if (hashTable[currValue] != undefined) {
            return true;
        }
        hashTable[currValue * 2] = currValue;
        hashTable[currValue / 2] = currValue;
    }
    return false;
};