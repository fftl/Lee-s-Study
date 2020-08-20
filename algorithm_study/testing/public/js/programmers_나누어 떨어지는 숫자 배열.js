
function solution(arr, divisor) {
    var answer = [];                
    let b= 0;                         //answer의 index를 만들기 위해서 선언해주었습니다.
    for(let a=0; a<arr.length; a++){  //입력받은 arr 의 갯수만큼 반복합니다.
        if(arr[a] % divisor == 0){    //arr의 a 번째수를 divisor로 나눈 나머지가 0 일때
            answer[b] = arr[a];       //해당 arr[a]를 answer에 입력해 준뒤
            b = b+1;                  //answer의 인덱스를 증가 시켜줍니다.
        }
    }
    if(answer.length == 0){           //만약 index가 나누어 떨어지지 않는다면 answer의 배열은 갯수가 0 일것이라 판단했습니다.
        answer[0] = -1;               //answer가 갯수가 0 이면 -1 를 입력해 줍니다.
    }
    
    answer.sort(function(a, b) { // 해당 배열을 오름차순으로 정렬해 줍니다.
        return a - b;
    })
    
    return answer;
}
