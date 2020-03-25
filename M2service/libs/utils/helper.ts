export const sortObject = (object: object) => {
    const result = sortObjectHelper(object);
    console.log(result);
};

const sortObjectHelper = (obj: object): object => {
    const len = Object.keys(obj).length;
    const unsorted = Object.keys(obj);
    if (len) {
        for (let i = 0; i < len; i++) {
            if (typeof obj[unsorted[i]] === 'object' && !Array.isArray(obj[unsorted[i]])) {
                const temp = sortObjectHelper(obj[unsorted[i]]);
                sortObjectHelper[unsorted[i]] = temp;
            }
        }
        const sortedArray = Object.keys(obj).sort();
        const tempObj = {};
        for (let i = 0; i < len; i++) {
            tempObj[sortedArray[i]] = obj[sortedArray[i]];
        }
        obj = tempObj;
    }
    return obj;
};


const mergeSort = (array: string[]) => {
    
}
