// Переписать данную функцию на fetch и промисы
// function http() { 
//   return {
//       get(url, cb) { 
//           try { 
//               const xhr = new XMLHttpRequest();
//               xhr.open('GET', url);
//               xhr.addEventListener('load', () => { 
//               if (Math.floor(xhr.status / 100) !== 2) { 
//                   cb(`Error. Status code: ${xhr.status}`, xhr);
//                   return;
//               }
//               const response = JSON.parse(xhr.responseText);
//               cb(null, response);
//               });

//               xhr.addEventListener('error', () => { 
//               cb(`Error. Status code: ${xhr.status}`, xhr);
//               });

//               xhr.send();
//           } catch (error) { 
//               cb(error);
//           }
//       },
//       post(url, body, headers, cb) { 
//           try { 
//               const xhr = new XMLHttpRequest();
//               xhr.open('POST', url);
//               xhr.addEventListener('load', () => { 
//               if (Math.floor(xhr.status / 100) !== 2) { 
//                   cb(`Error. Status code: ${xhr.status}`, xhr);
//                   return;
//               }
//               const response = JSON.parse(xhr.responseText);
//               cb(null, response);
//               });

//               xhr.addEventListener('error', () => { 
//               cb(`Error. Status code: ${xhr.status}`, xhr);
//               });

//               if (headers) { 
//               Object.entries(headers).forEach(([key, value]) => { 
//                   xhr.setRequestHeader(key, value);
//               });
//               }

//               xhr.send(JSON.stringify(body));
//           } catch (error) { 
//               cb(error);
//           }
//       },
//   };
// }

function post2(id) {
  return Promise.resolve.then(() => {
    const [idtext, userId] = id.spite("-");
    return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(
      response => response.json()
    );
  });
}
post2(2)
  .then(post => console.log(post))
  .catch(err => console.log(err));
  