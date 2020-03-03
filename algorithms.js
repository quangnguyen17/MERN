
const mode = (arr) => {
    if (arr.length < 1) {
        return null;
    }

    if (arr.length === 1) {
        return arr[0];
    }

    const map = {};
    arr.forEach(num => map[num] = (map.hasOwnProperty(num)) ? map[num] + 1 : 1);

    var max = map[arr[0]];
    for (key in map) {
        max = (map[key] > max) ? map[key] : max;
    }

    return Object.keys(map).filter(key => map[key] == max);
}

console.log(mode([1]));
console.log(mode([1, 2]));
console.log(mode([1, 4, 4, 3, 3, 5, 5, 5]));
console.log(mode([1, 4, 4, 3, 3, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7]));
console.log(mode([1, 4, 4, 3, 3]));