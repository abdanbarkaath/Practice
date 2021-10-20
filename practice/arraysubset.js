let ddd = [[], [], []];
let values = [1, 2, 3, 4]

function createSubSet(arr, k) {
    const tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= k) {
            tempArr.push(arr[i])
        }
    }
    // tempArr.forEach((val, index) => {
    //     if (val === k) {
    //         subsets[index] = [val]
    //         tempArr.splice(index, 1);
    //     } else if (val <= k) {

    //     }
    // })
    const subarray = (arr, n, limit) => {
        let subarr = [];
        let count = 0;
        for (let i = 0; i < n; i += 1) {
            for (let j = i; j < n; j += 1) {
                let a = [];
                for (let k = i; k <= j; k += 1) {
                    a.push(arr[k]);
                }
                // a.every((e) => console.log(e))
                subarr.push(a);
                console.info(a);
            }
        }
        // console.log(subarr)
        return count;
    };
    subarray(tempArr, tempArr.length, 4)
}
createSubSet(values, 4)