a = [2, 1, 3],  b = [7, 8, 9] , k = 10

function permute(a, b, k) {
    a = a.sort(function(a,b){return a-b})
    b = b.sort(function(a,b){return b-a})
    for(i=0;i<=a.length-1;i++){
        if ((a[i] + b[i]) < k){
            return 'no'
        }
    }
    return 'yes' 
}

