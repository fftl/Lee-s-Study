
function solution(arr)
{
    var answer = []; //답안이 들어갈 배열
    let count = 0;   //answer 에 들어간 수의 index

    for(let a=0; a<arr.length; a++){        //입력받은 배열 개수만큼 반복

        if(a==0){                           //첫번째 객체는 무조건 입력입니다.  
            answer[count] = arr[a]      
        } else if(a>0){                     //두번째 이후
            if(arr[a] == answer[count]){    //a번째 숫자가 이 전의 숫자와 같다면
                continue;                   //answer에 넣지 않고 다음 반복으로 이동
            } else {                        //a번째 숫자가 이 전의 숫자와 다르다면
                count = count + 1           //다음 자리에 숫자를 넣기 위해 count를 1 증가 
                answer[count] = arr[a]      //answer의 증가된 count자리에 arr[a] 를 입력해줍니다.
            }
        }
    }
    
    return answer;
}

