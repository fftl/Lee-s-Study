function solution(n, arr1, arr2) {
    var answer = [];
    let a1 = [];
    let a2 = [];
    let a3 = [];
    let a4 = [];

    for(let a=0; a<arr1.length; a++){
        let num1 = arr1[a].toString(2) // 2진수로 변환한 수
        while(String(num1).length<n){
            num1 = '0'+num1 
        }
        a1.push(num1);
    }

    for(let a=0; a<arr2.length; a++){
        let num1 = arr2[a].toString(2) // 2진수로 변환한 수
        while(String(num1).length<n){
            num1 = '0'+num1 
        }
        a2.push(num1);
    }

    for(let a=0; a<a1.length; a++){
        a1[a] *= 1;
        a2[a] *= 1;
        let num2 = a1[a]+a2[a];
        while(String(num2).length < n){
            // console.log('gg')
            num2 = '0'+num2 
        }
        a3.push(num2);
    }

    console.log(a3);

    for(let a=0; a<a3.length; a++){
        let num3 = String(a3[a])
        let munja = ""
        for(let b=0; b<num3.length; b++){
            munja = munja + (num3[b] > 0 ? "#" : " ");
        }

        answer.push(munja);
    }

    
    console.log(answer);
    return answer;
}




// solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])
solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])
