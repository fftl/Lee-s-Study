function solution(skill, skill_trees) {
    var answer = 0;

    console.log('for start')
    for(let a=0; a<skill_trees.length; a++){
        let skill_array = new Array();
        console.log(a)
        for(let b=0; b<skill.length; b++){
            skill_array.push(skill_trees[a].indexOf(skill[b]))
        }
        console.log(skill_array)
        // if(skill_array[0] == -1){
        //     continue
        // } else {
        //     for(let c=0; c<skill.length; c++){
        //         if(skill_array[c]>skill)
        //     }
        // }
    }
    return answer;
}
solution("CBD",["BACDE", "CBADF", "AECB", "BDA"])