function solution(bridge_length, weight, truck_weights) {
    let answer = 1;
    let delay_truck = truck_weights.slice(0,truck_weights.length); //대기트럭
    let briFinTrk =  []; //다리를 지난 트럭.
    let briTrk  = []; //다리를 건너는 트럭,
    let truck_weight = 0;
    //대기트럭이 없을떄까지와 트럭이 다 지났을떄...
    while(delay_truck.length!==0||briFinTrk.length!==truck_weights.length){
        answer++;
        let truck  = delay_truck[0];
        //다리를 지날 트럭을 다리에 올릴때...
        if((truck_weight+truck)<=weight){ //다리를 건널수 있는 무게 인지 확인하고 된다면 트럭을 지나가게한다.
            let object = {};
            object["weight"] = truck;
            object["count"]  = 0;
            truck_weight +=  delay_truck.shift(); //대기트럭에 있는 첫번쨰 트럭을 다리를 지나는 트럭으로 옮긴다.
            briTrk.push(object); //다리를 지나는 트럭에 옮긴다.
        }
        
         briTrk.forEach(function(result){ //다리를 건너는 중...
           result.count++ ;
        })
           if(briTrk[0].count===bridge_length){ //다리를 다 건넜으면...
               truck_weight -= briTrk[0].weight;
               briFinTrk.push(briTrk.shift());
           } 
       
    }
    return answer;
}




solution(2, 10, [7, 4, 5, 6]);
// solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);