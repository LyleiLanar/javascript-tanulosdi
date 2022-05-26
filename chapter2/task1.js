const triangle = (n, c) => {

    const logNChar = (n, c) => {
        let txt = '';
        for (let i = 0; i < n; i++) {
            txt += c;
        }
        return txt;
    }

    for (let i = 1; i <= n; i++) {
        console.log(logNChar(i, c));
    }
}

triangle(3, ';');
