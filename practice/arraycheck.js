// function check(val){
//     var x = "abcdef"
//     for(var i = 0;i<x.length ;i++){
//         if(val[0] == x[i] && val[1] == x[i+1]){
//             console.log("values at "+i);
//         }else{
//             console.log("no");
//         }
//     }
// }
// If found then it will return starting index
// Else will return -1
// str is substring passed to search
// function check(fullString, str) { return ... };

// fullString = "mnopxyzas";
// strToFind = "mn";

// searchedResult = [];

// if (check(fullString, strToFind) > -1) {
//     this.searchedResult.push(fullString);
// }

function check(val){
    x = "abcdefgh";
    var l = val.length;
    var t=1;
    for(var i = 0;i<val.length;i++){
        if(val[0] == x[i]){
            for(var j = 1 ;j<l;j++){
                if(val[j] == x[i+j]){
                    console.log(l);
                    t++;
                    console.log(t);
                    if(t == l){
                        console.log("yes");
                    }
                }
            }
        }
    }
}

check("cdef")