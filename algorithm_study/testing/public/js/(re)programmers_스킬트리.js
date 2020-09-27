// https://n1tjrgns.tistory.com/184 참고했습니다.

function solution(skill, skill_trees) {
    var answer = 0;

    console.log('for start')
    let skill_split = skill.split("");
    for(let a=0; a<skill_trees.length; a++){
        console.log(a,"############################");
        let yesorno = true;
        let skill_array = new Array();
        let word = skill_trees[a];
        for(let b=0; b<word.length; b++){
            if(skill_split.includes(word[b])){
                skill_array.push(word[b])
            }
        }
        console.log(skill_array);

        for(let c=0; c<skill_array.length; c++){
            if(skill_split[c] == skill_array[c]){
                continue;
            } else {
                yesorno = false;
            }
        }
        console.log(yesorno);

        if( yesorno == true){
            answer ++;
        }
    }
    return answer;
}


solution("CBD",["BACDE", "CBADF", "AECB", "BDA"])