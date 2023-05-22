
function validAnagram(first,second){
    // add whatever parameters you deem necessary - good luck!
    if(first.length!==second.length){
        return false;
    }
    
    let lookup={};
    
    for(var i=0;i<first.length;i++){
        var letter = first[i];
        
        lookup[letter]?lookup[letter]+=1:lookup[letter]=1;
    }
    
    for(var i=0;i<second.length;i++){
        var letter = second[i];
        if(!lookup[letter]){
            return false;
        }else{
            lookup[letter]-=1;
        }
    }
    return true;
  }

  console.log(validAnagram('', '')) // true
  console.log(validAnagram('aaz', 'zza')) // false
  console.log(validAnagram('anagram', 'nagaram')) // true
  console.log(validAnagram("rat","car")) // false) // false
  console.log(validAnagram('awesome', 'awesom')) // false
  console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
  console.log(validAnagram('qwerty', 'qeywrt')) // true
  console.log(validAnagram('texttwisttime', 'timetwisttext')) // true