
let chess = function(size){

    let chessBlock = '';

    let white = '██';
    let black = '  ';

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 === 0)
                chessBlock += black;
            else
                chessBlock += white;
        }
        chessBlock += "\n";
    }

    return chessBlock;
}

chess(8)
console.log(chess(8))