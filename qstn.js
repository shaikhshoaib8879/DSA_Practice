function anagram(s,t){
    array = []
    for(i=0;i<=s.length;i++){
        value = s[i]
        for(j=0;j<=t.length-1;j++){
            if (value == t[j]){
                array.push(t[j])
                break
            }

        }
    }
    if (array.length == s.length){
        return true
    }
}

s = 'helo'
t = 'oeh'