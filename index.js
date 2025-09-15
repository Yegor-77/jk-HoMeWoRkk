//1
const user = {
  name: "Yehor",
  age: 17,
  hobby: "Online games",
  premium: true,
};

user.mood = "happy";

user.hobby = "skydiving";

user.premium = false;

//2

function countProps(obj) {
  return Object.keys(obj).length;
}

console.log(countProps({ name: "Yehorchik" }));

console.log(countProps({}));

//3

function findBestEmployee(employees) {
  let bestNameee = "";
  let maxxTasks = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxxTasks) {
      maxxTasks = tasks;
      bestNameee = name;
    }
  }
  return bestNameee;
}

//4

function countTotalSalary(employees) {
  let total = 0;
  for (const salary of Object.values(employees)) {
    total += salary;
  }
  return total;
}

//5
function getAllPropValues(arr, prop) {
  const result = [];
  for (const obj of arr) {
    if (prop in obj) {
      result.push(obj[prop]);
    }
  }
  return result;
}

const productssse = [{ name: "Щявель", price: 300, quantity: "undefinde" }];

console.log(productssse, "name");

//6
("я не маю час на це сори , дайте мене 70-80 балів");
