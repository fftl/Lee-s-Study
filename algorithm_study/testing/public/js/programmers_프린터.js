// 수정없이 한번에 풀었다!!

function solution(pt, lc) {
    var answer = 0;
    let init_length = pt.length
    let key = "a";
    while(key === "a"){
        if(lc !== 0) { //가장 앞에 있는 문서가 내가 요청한 문서가 아닐때,
            for( let a=0; a<pt.length; a++){

                if(pt[0]<pt[a]){ //만약 배열중에 첫번째 요소보다 중요도가 큰 값이 있다면, 
                    pt.push(pt[0]) //첫번째 요소를 맨 뒤로 추가해 준 뒤
                    pt.splice(0, 1); //첫번째 요소를 삭제해 줍니다. 
                    lc -= 1;            //그리고 내 요청문서의 인덱스를 수정해 줍니다.
                    break;              //그리고 이번 반복을 멈춥니다.
                } else {
                    if(a === (pt.length-1)){ //이번 반복동안 첫번째 요소보다 중요도가 큰 값이 없을 경우 
                        pt.splice(0, 1);  //첫번째 요소를 제거해 줍니다.
                        lc -= 1;             //그리고 내 요청문서의 인덱스를 수정해 줍니다.
                    }
                }

            }
        } else {
            for( let a=0; a<pt.length; a++){

                if(pt[0]<pt[a]){ //만약 배열중에 첫번째 요소보다 중요도가 큰 값이 있다면, 

                    pt.push(pt[0]) //첫번째 요소를 맨 뒤로 추가해 준 뒤
                    pt.splice(0, 1); //첫번째 요소를 삭제해 줍니다. 
                    lc = pt.length-1;            //그리고 내 요청문서의 인덱스를 수정해 줍니다.
                    break;              //그리고 이번 반복을 멈춥니다.

                } else {
                    if(a === (pt.length-1)){ //이번 반복동안 첫번째 요소보다 중요도가 큰 값이 없을 경우 
                        pt.splice(0, 1);  //첫번째 요소를 제거해 줍니다.
                        answer = init_length - pt.length
                        key = "finish"
                    }
                }
            }

        }


    }

    console.log(answer)
    return answer;
}


solution([2, 1, 3, 2], 2);
solution([1, 1, 9, 1, 1, 1], 0);