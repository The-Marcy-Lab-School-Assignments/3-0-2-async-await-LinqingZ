// const getUsers = async () => {
//     const url = 'https://jsonplaceholder.typicode.com/users';
//     const users = await fetch(url).then(r => r.json()).catch((err) => []);
//     console.log(users)
//     return users;
//   }
//   getUsers()

const getUser = async (userId) => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const response = await fetch(url);
    const users = await response.json();
    console.log(users)
    return users;
  }
  getUser(-1)