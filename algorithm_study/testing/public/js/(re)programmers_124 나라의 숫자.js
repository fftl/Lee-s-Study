// 구글 검색 참조했습니다. 다시 공부해 볼것..

function solution(n) {
    let numbs = ["4", "1", "2"];
    let answer = "";

    let num = n;
    
    while(num > 0){
        let remainder = num % 3;
        num = parseInt(num/3);

        if( remainder === 0 ) num--;

        answer = numbs[remainder] + answer;

    }

    return answer;
}



solution(3);