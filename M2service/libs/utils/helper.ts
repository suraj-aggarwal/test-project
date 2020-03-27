export const sortObject = (object: object) => {
    const result = sortObjectHelper(object, mergeSort);
    return result;
};

const sortObjectHelper = (obj: object, sortFuntion: any): object => {
    const len = Object.keys(obj).length;
    const unsorted = Object.keys(obj);
    if (len) {
        for (let i = 0; i < len; i++) {
            if (typeof obj[unsorted[i]] === 'object' && !Array.isArray(obj[unsorted[i]])) {
                const temp = sortObjectHelper(obj[unsorted[i]], sortFuntion);
                sortObjectHelper[unsorted[i]] = temp;
            }
        }
        const sortedArray = sortFuntion(Object.keys(obj).sort());
        const tempObj = {};
        for (let i = 0; i < len; i++) {
            tempObj[sortedArray[i]] = obj[sortedArray[i]];
        }
        obj = tempObj;
    }
    return obj;
};

const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const subLeft = mergeSort(arr.slice(0, mid));
    const subRight = mergeSort(arr.slice(mid));

    return merge(subLeft, subRight);
};

const merge = (node1, node2) => {
    const result = [];
    while (node1.length > 0 && node2.length > 0)
        result.push(node1[0] < node2[0] ? node1.shift() : node2.shift());
    return result.concat(node1.length ? node1 : node2);
};
