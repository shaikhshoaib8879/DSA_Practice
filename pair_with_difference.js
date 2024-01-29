array = [5, 20, 3, 2, 50, 80]
n = 78

function differencePair(array,n){
    i = 0
    while(i<array.length){
        if(array.includes(array[i]+n)){
            sum = array[i] + n
            val = sum - n
            return [sum,val]
        }
    }
}