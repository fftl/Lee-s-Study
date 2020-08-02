function solution(board, moves) {
    
    var answer = 0;
    let basket = new Array;

    for(let a=0; a<moves.length; a++){
        console.log(a+'############################################')

        for(let b=0; b<board.length; b++){
            let boardindex = moves[a]-1
            if (board[b][boardindex] == 0){
                continue
            } else {
                console.log('값'+board[b][boardindex])
                if(basket.length >0){

                    let basketindex = basket.length -1
                    if(basket[basketindex] == board[b][boardindex]){
                        answer = answer + 2;
                        basket.pop();
                    } else {
                        basket[basketindex+1] = board[b][boardindex];
                    }

                    board[b][boardindex] = 0;

                    break;
                } else {
                    
                    basket[0] = board[b][boardindex];
                    board[b][boardindex] = 0;
                    break;
                }
            }
        }

        console.log(basket)
    }
    
    console.log(answer)
    return answer;
}

solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]);