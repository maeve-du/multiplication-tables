import './style.css';

const table = [];
const from = 1;
const upTo = 9;


const multiply = function (num1, num2) {
  return num1 * num2;
};

// 
for (let i = from; i <= upTo; i++) {

  // 放每一竖排的数据 1x1，1x2，1x3 。。。。
  const tableCol = [];

  for (let j = i; j <= upTo; j++) {
    const result = multiply(j, i);
    const data = `${i} x ${j} = ${result}`;
    tableCol.push(data);
  }
  table.push(tableCol);
}

// console.log(table);

const app = document.getElementById("app");

const h1 = document.createElement("h1");
// Multiplication Tables
h1.textContent = `Multiplication Tables  ${from}-${upTo}`;
app.append(h1);

const section = document.createElement("section");
app.append(section);

for (let i = 0; i < table.length; i++) {

  const div = document.createElement("div");
  div.classList.add("col");
  section.append(div);

  table[i].forEach(element => {
    const p = document.createElement("p");
    div.append(p);;
    p.textContent = element;
  });

}

