function solution(participant, completion) {
    var answer = '';

    //try1
    // for(let a=0; a<participant.length; a++){
    //     if(completion.indexOf(participant[a]) == -1){
    //         answer=participant[a];
    //         break;
    //     } else {
    //         completion.splice(completion.indexOf(participant[a]), 1)
    //     }

    // }
    //try2
    // participant.sort()
    // completion.sort()
    // while(true){
        //     if(participant[0] == completion[0]){
            //         participant.splice(0, 1)
            //         completion.splice(0, 1)
            //     } else {
                //         answer= participant[0]
                //         break;
                //     }
                // }
    participant.sort()
    completion.sort()

    let test = participant - completion
    console.log(test)
    return answer;
}

solution(	["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])