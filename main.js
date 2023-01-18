// console.log("%cString", "color:#FFFF00; background-color:#5394EC");
// console.log("Привет, Марафонец !");
// console.log(+true);
// console.log(+null);
// console.log("null");
// console.log(null);
// console.log(!!"");
// console.log(!!" ");

// console.log("%c&&", "color:#FFFF00; background-color:#5394EC");
// console.log(1 + 1 === 2 && 10 * 10 > 50);

// console.log("%c?", "color:#FFFF00; background-color:#5394EC");
// console.log(true ? 1 : 2);
// console.log(false ? 1 : 2);

const firstRow = "мама мыла раму";
const secondRow = "собака друг человека";
const phone = "+71234567890";

function countChar(string, char) {
  let countA = 0;
  for (let i = 0; i < string.length; i++) {
    const charString = string.charAt(i);

    if (charString === char) {
      countA++;
    }
  }
  return countA;
}

function getRow(firstRow, secondRow) {
  let countFirstRow, countSecondRow;

  char = prompt("Задай букву !");

  countFirstRow = countChar(firstRow, char);
  countSecondRow = countChar(secondRow, char);
  return countFirstRow > countSecondRow ? countFirstRow : countSecondRow;
}

function formattedPhone() {
  let phone = prompt("Номер телефона: ");
  let formatPhone = "";
  if (phone.search(/[а-яёa-z]/) == -1) {
  } else {
    alert("Формат функции неверный !");
    return "";
  }
  j = 0;
  for (let i = 0; i < phone.length; i++) {
    const char = phone.charAt(i);
    formatPhone += char;
    if (i === 0) {
      switch (char) {
        case "+":
          j = 1;
          break;
        case "8":
        case "7":
          formatPhone = "+7 (";
        case "9":
          formatPhone = "+7 (9";
          j = 1;
          break;
        default:
          alert("Формат функции неверный !");
          break;
          return "";
      }
    }
    if (i === 1 && char === "7") {
      formatPhone += " (";
      j -= 2;
    }
    if (j === 3) {
      formatPhone += ") ";
    }
    if (j === 6 || j === 8) {
      formatPhone += "-";
    }
    j++;
  }

  return formatPhone;
}

alert(formattedPhone()); // +7 (123) 456-78-90
alert(getRow(firstRow, secondRow));
