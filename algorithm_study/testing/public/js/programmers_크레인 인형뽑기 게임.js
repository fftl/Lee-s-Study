
function solution(board, moves) {
    
    var answer = 0;                                                         //답을 담을 변수 입니다.
    let basket = new Array;                                                 //뽑기를 뽑아서 담을 바구니 입니다.

    for(let a=0; a<moves.length; a++){                                      //moves를 하는 횟수만큼 반복해줍니다.
        console.log(a+'############################################')       //각 a마다 동작한 console 들을 구분해주기 위해 사용했습니다.

        for(let b=0; b<board.length; b++){                                  //board의 갯수만큼 반복을 해줍니다.
            let boardindex = moves[a]-1                                     //moves의 수는 실제 board에서 탐색해야할 index 보다 1 이 많으므로 1을 빼서 지정해 줍니다.
            if (board[b][boardindex] == 0){                                 //인형뽑기에서 0은 빈칸이므로 건너 뛰어 줘야 합니다.
                continue                                                    //continue 로 이번차레 for 반복을 스킵해줍니다.
            } else {                                                        //0이 아닌 즉 빈칸이 아닌 인형이 존재하는 칸입니다.
                console.log('값'+board[b][boardindex])                      //뽑은 값이 0이 아닌 무슨값이 들어오는지 알맞은 값이 들어오는지 확인하기 위해 사용했습니다.
                if(basket.length >0){                                       //바구니가 비어있지 않을 때,

                    let basketindex = basket.length -1                      //뽑은 값과 바구니의 가장 위에 있는 값을 비교해야 하기 때문에 미리 가장 마지막 index를 구해줍니다.
                    if(basket[basketindex] == board[b][boardindex]){        //뽑은 값과, 바구니 가장 위의 값이 같다면,
                        answer = answer + 2;                                //두개의 인형이 같다는 의미로 두개의 인형이 사라집니다. 즉 2+ 됩니다.
                        basket.pop();                                       //바구니 안의 인형도 사라져야 하기 때문에 가장 위의 인형도 제거해줍니다.
                                                                            //array.pop() => 배열의 마지막 index에 있는 값을 삭제한뒤 반환해 줍니다.
                    } else {
                        basket[basketindex+1] = board[b][boardindex];       //만약 인형이 같지 않다면 해당 인형을 바구니 맨위에 (basketindex+1) 넣어줍니다.
                    }

                    board[b][boardindex] = 0;                               //이번의 board의 인형을 비교하고 나면 해당 자리에는 0을 넣어 다시 검색되지 않도록 합니다.
                    break;                                                  //for문이 계속 진행되면 다음 칸에 있는 인형도 비교를 시작하므로 break로 멈춰줍니다.

                } else {                                                    //바구니가 비어있지 있을 때,
                    
                    basket[0] = board[b][boardindex];                       //뽑은 값을 바구니 가장 아래에 입력해 줍니다.
                    board[b][boardindex] = 0;                               //board의 인형을 뽑았으니 그 자리에 0을 넣어 다시 검색되지 않도록 합니다.
                    break;                                                  //for문이 계속 진행되면 다음 칸에 있는 인형도 비교를 시작하므로 break로 멈춰줍니다.
                }
            }
        }

        console.log(basket)                                                 //각 a마다 바구니의 값을 확인하기 위해서 사용했습니다.
    }
    
    console.log(answer)                                                     //답이 알맞게 나올지 확인하기 위해서 사용했습니다.
    return answer;                                                          //answer 리턴;
}
