

export default function shuffleArr(arr){
    for(let i = arr.length - 1;i > 0;i--){
        const j = Math.floor(Math.random()*(i+1));
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    return arr;
}

// function checkRandomVal(a,b){
//     const d = Math.floor(Math.random()*(i+1))
//     const c = (a == b) ? checkRandomVal(a,d) : b;
//     return c;
// }