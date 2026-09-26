//.then() and .catch()

// const data = fetch("https://jsonplaceholder.typicode.com/users") // getting the data

// console.log(data); // printing the data

// data
// .then((res) => { // 
//     return res.json() // conerting into json 
// })
// .then((data) => {
//     console.log(data); // uses to get the actual data and it can use the above stored data 
    
// })
// .catch((err) => {
//     console.log(err); // for handling errors 
    
// })

// async/await

// async function era() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users") // getting response frm user
//         const data = await response.json()//converting response to json
//         console.log(data); // printing converted respomse
        
        
//     } catch (error) { // error handling method
//         console.log(error);
        
        
//     }
// }
// era()// fn calling