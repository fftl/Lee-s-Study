function solution(ans) {
    var answer = [];
    let supo1_pt = [1, 2, 3, 4, 5];
    let supo2_pt = [2, 1, 2, 3, 2, 4, 2, 5];
    let supo3_pt = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //각 수포자들의 패턴

    //supo1_pt #############################################
    let supo1 = [];
    let count1 = 0;
    let yesCount1 =0;
    while( count1 !== ans.length ){  //이 while 을 통해서 시험문제 개수와 동일한 수의 수포자 패턴 답을 만듭니다.
        for(let a=0; a<supo1_pt.length; a++){
            supo1.push(supo1_pt[a]);
            count1++
            if(count1 === ans.length){ //개수가 같아지면 중지
                break;
            }
        }
    }
    for(let a=0; a<ans.length; a++){ //체점입니다. 동일한 인덱스에 동일한 값 즉 정답일 경우 yesCount1 를 증가시켜줍니다.
        if(ans[a] === supo1[a]){
            yesCount1++
        }
    }
    answer.push(yesCount1) //정답 개수를 배열에 입력해 줍니다.
    //supo2 #############################################
    let supo2 = [];
    let count2 = 0;
    let yesCount2 =0;
    while( count2 !== ans.length ){
        for(let a=0; a<supo2_pt.length; a++){
            supo2.push(supo2_pt[a]);
            count2++
            if(count2 === ans.length){
                break;
            }
        }
    }

    for(let a=0; a<ans.length; a++){
        if(ans[a] === supo2[a]){
            yesCount2++
        }
    }
    answer.push(yesCount2)
    //supo3 #############################################
    let supo3 = [];
    let count3 = 0;
    let yesCount3 =0;
    while( count3 !== ans.length ){
        for(let a=0; a<supo3_pt.length; a++){
            supo3.push(supo3_pt[a]);
            count3++
            if(count3 === ans.length){
                break;
            }
        }
    }
    for(let a=0; a<ans.length; a++){
        if(ans[a] === supo3[a]){
            yesCount3++
        }
    }
    answer.push(yesCount3)

    //최고 득점자 찾기 
    let maxNum = Math.max.apply(null, answer) // 배열내에서 최대값 구하기
    let dap = [];

    for(let a=0; a<3; a++){
        if(answer[a] === maxNum){ //최대값인 경우에는 해당 인덱스를 push 해줍니다.
            dap.push(a+1)
        }
    }
    
    dap.sort((a, b) => a-b) // 배열의 수를 오름차순으로 정렬


    console.log(dap);
    return dap;
}



solution([1, 2, 3, 4, 5])
solution([1, 3, 2, 4, 2])