function divideAndConquerSum(a) {
    if(a.length == 0) {
        return 0;}
    else{
        return SumCalc(a, 0, a.length); }
}

function SumCalc(a, lo, hi) {
    if (hi - lo == 1) {
        return a[lo]; }
    if (hi - lo == 2) {
        return a[lo] + a[lo + 1]; }
    
    var thirds = Math.floor((hi - lo) / 3);
    var mid = lo + thirds;
    var mid2 = lo + 2 * thirds;

    return (SumCalc(a, lo, mid) + SumCalc(a, mid, mid2) + SumCalc(a, mid2, hi));
}
