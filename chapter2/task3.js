const printChess = (size) => {

    const black = '#';
    const white = '_'

    for (let i = 0; i < size; i++) {

        let txt = i % 2 == 0 ? white : black;

        for (let j = 1; j < size; j++) {
            txt += txt[txt.length - 1] == white ? black : white;
        }
        console.log(txt)
    }

}

printChess(30);