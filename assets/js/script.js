// **************************
//  Controlando la asincronía
// ***************************

//VERSION ORIGINAL (con DOM y/o Console.log)
// ****************************************
// const request = async () => {
//   const urlBase = 'https://dog.ceo/api/breeds/image/random';
//   try {
//     const result = await fetch(urlBase);
//     const response = await result.json();
//     // console.log(response.message);
//     document.getElementById('dog').src = response.message;
//   } catch (error) {
//     console.log('error', error);
//   }
// };
// request();

//VERSION CON PROMISE.all (con DOM y/o Console.log)
// ***************************************************
const urlBase = 'https://dog.ceo/api/breeds/image/random';
const request = async (url) => {
  const result = await fetch(url);
  const response = await result.json();
  //  console.log(response.message);
  document.getElementById('dog').src = response.message;
};

const getDog = async () => {
  const url = `${urlBase}`;
  return request(url);
};

Promise.all([getDog()])
  .then((data) => {
    data;
  })
  .catch((e) => {
    console.log('error promesas', e);
  });
