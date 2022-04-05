// Problem:1
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef

let str = 'abcadeecfb';
let unique = [...new Set(str)];
console.log(unique); 

// Problem:2
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"

function prCharWithFreq(s)
{
  
  var d = new Map();
 
  s.split('').forEach(element => {
     
        if(d.has(element))
        {
            d.set(element, d.get(element)+1);
        }
        else
            d.set(element, 1);
  });
 
  s.split('').forEach(element => {
    if(d.has(element) && d.get(element)!=0)
    {
      console.log( element + "=" + d.get(element) + " ");
      d.set(element, 0);
    }
  });
}
  

var s="abcadeecfb";
prCharWithFreq(s);