function service(){
  var data = {
    codes: {
      "01": "Admin",
      "02": "Read",
      "03": "Write",
      "04": "Execute",
      "05": "Print"
    },
    users: [
        {
          name: "Mike",
          gender: "male",
          age: "-358345",
          permission: ["01", "03", "05"]
        },
        {
          name: "Tiffany",
          gender: "female",
          age: "-83547",
          permission: ["01", "03", "04"]
        },
        {
          name: "Tom",
          gender: "male",
          age: "7858345",
          permission: ["01", "03"]
        },
        {
          name: "Sally",
          age: "945349",
          gender: "female",
          permission: ["02", "03", "04"]
        }
      ]
  }

  return {
    get: function(param) {
      return data[param]; 
    }
  }
}

// Explain what this function does


// print out all female user names
const users = service().get("users");
const femaleUsers = users.filter(user => user.gender === "female").map(user => user.name);
console.log(femaleUsers);


// print out the sum of all users ages
// age is encrypted: to decrypt, make conver the value to absolute number; then add all digits together
// e.g., "-873" => 18
function convertAge(str) {
  let num = Math.abs(parseInt(str, 10));
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

const ageSum = users.map(user => convertAge(user.age)).reduce((a, b) => a + b);
console.log(ageSum);

// what is the Big O complexity of ageSum algorithm?
// Answer: O(N)

// write a function that takes user's name as an input and return the list of permissions in string (not codes)
// e.g., getPermission("Mike")
//       => ["Admin", "Write", "Print"]
function getPermission(name) {
  const users = service().get("users");
  const codes = service().get("codes");
  return users.find(user => user.name === name).permission.map(code => codes[code]);
}
console.log(getPermission("Mike"))

// Write _map function