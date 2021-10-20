const items = [5, 3, 2, 7, 5, 6, 8, 7, 10, 7, 8, 5];

for (let i = 0; i < items.length; i++) {
    let count = 0;
    for (let j = items.length; j > 0; j--) {
        if (items[i] === items[j]) {
            count += 1
        }
    }
    console.log(items[i] + '-' + count);
}