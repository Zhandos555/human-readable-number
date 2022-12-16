module.exports = function toReadable(number) {
    let oneToTwenty = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tenth = [
        "",
        "",
        "twenty ",
        "thirty ",
        "forty ",
        "fifty ",
        "sixty ",
        "seventy ",
        "eighty ",
        "ninety ",
    ];

    if (number.toString().length > 4)
        return alert("Overlimit, please enter less number?");
    console.log(number);
    //let num = ('0000000000'+ numberInput).slice(-10).match(/^(\d{1})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    let insertedNumber = ("000" + number).slice(-3).match(/^(\d{1})(\d{2})$/);
    console.log(insertedNumber);
    if (!insertedNumber) return;

    if (number === 0) {
        return "zero";
    }

    let humanReadNumber =
        insertedNumber[1] != 0
            ? (oneToTwenty[Number(insertedNumber[1])] ||
                  `${tenth[insertedNumber[1][0]]}${
                      oneToTwenty[insertedNumber[1][1]]
                  }`) + " hundred "
            : "";
    console.log(humanReadNumber);

    humanReadNumber +=
        insertedNumber[2] != 0
            ? oneToTwenty[Number(insertedNumber[2])] ||
              `${tenth[insertedNumber[2][0]]}${
                  oneToTwenty[insertedNumber[2][1]]
              }`
            : "";
    console.log(humanReadNumber.trim());
    return humanReadNumber.trim();
};
