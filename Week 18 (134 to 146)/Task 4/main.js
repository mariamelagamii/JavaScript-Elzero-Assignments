let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
//http
//s? if it contain s or not (http or https)
//:
// \/ /\ -> escape char ->  // 
//grouping   
    // optitnal groping (?)
    // :
    //[-\w]+ match - any char in from 1 
    // \. -> .
//[-\w]+ match - any char in from 1 
// \. -> .
// \w+ match any char
// grouping
    // optitnal groping (?)
    //:
    // \. -> .
    // \w+ match any char
//optinal ?\/ -> /
//optinal ?.* anything
//case insensitive

console.log("http://example.com".match(re));
console.log("https://google.com".match(re));
console.log("ftp://example.com".match(re));
console.log("google.com".match(re));