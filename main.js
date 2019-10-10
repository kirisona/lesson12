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

const fetchUrl = "https://jsonplaceholder.typicode.com/posts";

const url = "https://jsonplaceholder.typicode.com/posts";

function http2() {
  (function() {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(get => resolve(get))
        .catch(error => reject(console.log(error)));
    });
  })();

  (function() {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        // for example
        title: "foo",
        body: "bar",
        userId: 1
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(error => console.log(error));
  })();
}
http2();
