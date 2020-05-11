function genomic() {
    var S = 'CAGCCTA';
    var impact = {
        A:1,
        C:2,
        G:3,
        T:4
    };
    S = S.split('');
    var P = [2 ,5 ,0];
    var Q = [4 ,5 ,6];
    var PLength = P.length;
    var values= [];
    for (var i=0;i<PLength; i++) {
        var x = impact[S[P[i]]];
        var y = impact[S[Q[i]]];
        values= [...values, (Math.min(x,y))];
    }
    return values;
}

console.log(genomic());