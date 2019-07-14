// Задание 1
// Используя методы массива, последовательно выполни указанные операции над массивом имен пользователей.

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// // Удалить первый элемент массива
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
 users.splice(0, 1);
 console.log(users);

// // Удалить последний элемент массива
// console.log(users); // ["Poly", "Ajax"]

users.splice(2 , 1);
console.log(users);

// // Добавить в начало массива пользователя "Lux"
// console.log(users); // ["Lux", "Poly", "Ajax"]

users.splice(0, 0, 'Lux');
console.log(users);

// // Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

users.splice(3, 0, 'Jay', 'Kiwi');
console.log(users);

// // Удалить из массива элемент хранящийся в переменной userToDelete
// const userToDelete = 'Ajax';
// console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

const userToDelete = "Ajax";
for ( let i = 0 ; i < users.length ; i += 1 ) {
  if ( userToDelete === users[i] ) {
       users.splice(i,1);
       break; 
  }
  
  }
console.log(users); 

// // Добавить в массив пользователя хранящегося в переменной userToInsert,
// // перед пользователем хранящимся в переменной insertBefore
// const userToInsert = 'Kong';
// const insertBefore = 'Jay';
// console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]

const userToInsert = 'Kong';
const insertBefore = 'Jay';

for ( let i = 0 ; i < users.length ; i += 1 ) {
    if ( insertBefore === users[i] ) {
   users.splice ( i, 0, userToInsert );
   break;  
  }
}
console.log(users);


