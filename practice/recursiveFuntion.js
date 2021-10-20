// function recursive(n){
//     if(n<=10){
//         console.log(n);
//         recursive(n+1)
//     }
// }
// recursive(1)

function even(n,m) {
    if (n <= m) {
        if (n % 2 == 0) {
            console.log(n);
        }
        even(n+1,m)
    }
}
even(1,20)