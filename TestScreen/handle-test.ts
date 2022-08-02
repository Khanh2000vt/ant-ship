/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */

function validateEmail(emailCheck: any) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(emailCheck)) {
    return true;
  }
  return false;
}

const axios = require('axios').default;
// async function getDataNameTest(ID: number) {
//   try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
//       params: {
//         id: ID,
//       },
//     });
//     return response.data[0].username;
//   } catch (error) {
//     console.error(error);
//   }
// }

function getDataNameTest(ID: number) {
  return axios
    .get('https://jsonplaceholder.typicode.com/users', {
      params: {
        id: ID,
      },
    })
    .then(function (response: any) {
      return response.data[0].username;
    });
  // .catch(function (error: any) {
  //   console.log(error);
  // });
}

export {validateEmail, getDataNameTest};
