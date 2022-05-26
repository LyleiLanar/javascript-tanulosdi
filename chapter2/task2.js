const getFizzBuzzTxt = (number) => {
    let flag = 0;

    flag += number % 3 == 0 ? 1 : 0;
    flag += number % 5 == 0 ? 2 : 0;

    if (flag == 0) return number;
    if (flag == 1) return 'Fizz';
    if (flag == 2) return 'Buzz';
    if (flag == 3) return 'FizzBuzz';
}


for (let i = 1; i < 101; i++) {
    console.log(getFizzBuzzTxt(i));
}