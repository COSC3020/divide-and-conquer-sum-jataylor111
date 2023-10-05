function divideAndConquerSum(a) {
    if(a.length == 1) return a[0];
    if(a.length == 2) return a[0] + a[1];
    if(a.length == 0) {
        return 0;}
    else{
        return SumCalc(a, a.length - 1, 0); }
}

function SumCalc(a, hi, lo) {
    var mid = lo + (hi - lo) / 3;
    var mid2 = mid + (hi - lo) / 3;

    return SumCalc(a, mid - 1, lo) + SumCalc(a, mid2 - 1, mid + 1) + SumCalc(a, hi, mid2 + 1);
}
