function solution(ans) {
    var answer = [];
    let supo1_pt = [1, 2, 3, 4, 5];
    let supo2_pt = [2, 1, 2, 3, 2, 4, 2, 5];
    let supo3_pt = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //각 수포자들의 패턴

    //supo1_pt #############################################
    let supo1 = [];
    let count1 = 0;
    let yesCount1 =0;
    while( count1 !== ans.length ){
        for(let a=0; a<supo1_pt.length; a++){
            supo1.push(supo1_pt[a]);
            count1++
        }
    }
    for(let a=0; a<ans.length; a++){
        if(ans[a] === supo1[a]){
            yesCount1++
        }
    }
    answer.push(yesCount1)
    //supo2 #############################################
    let supo2 = [];
    let count2 = 0;
    let yesCount2 =0;
    while( count2 !== ans.length ){
        for(let a=0; a<supo2_pt.length; a++){
            supo2.push(supo2_pt[a]);
            count2++
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
        }
    }
    for(let a=0; a<ans.length; a++){
        if(ans[a] === supo3[a]){
            yesCount3++
        }
    }
    answer.push(yesCount3)

    



    console.log(answer);
    return answer;
}



solution([1, 2, 3, 4, 5])
solution([1, 3, 2, 4, 2])