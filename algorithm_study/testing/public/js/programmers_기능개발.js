function solution(progresses, speeds) {
    var answer = [];
    let key = true;
    let cnt = 0;
    while(key){
        ++cnt;
        console.log(cnt,'번쨰 : ', progresses)
        let count = 0;

        for(let a=0; a<progresses.length; a++){
            progresses[a] = progresses[a] + speeds[a]
        }

        while(true){
            if(progresses[0] >= 100){
                ++count
                progresses.splice(0, 1)
                speeds.splice(0, 1)
            } else {
                if(count != 0){
                    answer.push(count)
                }
                break;
            }
        }

        if(progresses.length == 0){
            key = false
        }

    }

    console.log(answer);
    return answer;
}


solution([93, 30, 55], [1, 30, 5]);