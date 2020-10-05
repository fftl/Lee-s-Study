function solution(cit) {
    let answer = 0;
    let citList = []
    
    for(let a=0; a<cit.length; a++){
        let topCount = 0;
        for(let b=0; b<cit.length; b++){
            if(cit[a] <= cit[b]){
                topCount++
            }
        }
        if(cit[a] >= topCount){
            citList.push(topCount)
        }
    }

    console.log(citList);
    
    answer = Math.max.apply(null, citList)
    
    console.log(answer);
    return answer;
}

solution([3, 0, 6, 1, 5])


/*
function solution(citations) {
    var num = citations.length;
    var answer = 0;
    let lower = []; // 덜 인용된 논문 배열
    citations.sort((a, b) => a - b); // 오름차순으로 정렬

    for(var i = 0; i <= num ; i++){
        for(var j = 0; j < citations.length; j++){
            if(citations[j] < i) lower.push(citations.shift());
            else break;
        }
        if(lower.length <= i && citations.length >= i) answer = i;
    }
    return answer;
} 
*/