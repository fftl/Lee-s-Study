function solution(clothes) {
    var answer = 1;
    var obj={};
    for(var i=0;i<clothes.length;i++){
        console.log(i+'=======================')
        console.log(obj[clothes[i][1]])

        obj[clothes[i][1]]=(obj[clothes[i][1]] || 1) + 1;

        console.log(clothes[i][1], ' : ', obj[clothes[i][1]])

    }
    console.log('for line =========================================================')
    console.log(obj)
    
    for(var key in obj){
        console.log(key)
        answer *= obj[key];
    }
    
    return answer-1;
}

// solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]);
solution(	[["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]);