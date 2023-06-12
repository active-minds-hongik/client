import axios from 'axios';

<<<<<<< HEAD
export function uploadImage(formData: FormData) {
  return new Promise((resolve, reject) => {
    axios
      .post('https://www.activeminds.co.kr/ai/example', formData, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res);
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
=======
export async function uploadImage(formData: FormData) {
  await axios
    .post('https://www.activeminds.co.kr/ai/example', formData, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      console.log(res);
      return res.data;
    });
>>>>>>> 18a0abd (Resolve Conflicts)
}
