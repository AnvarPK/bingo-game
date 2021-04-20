import firebase from 'firebase';
import { firebaseConfig } from './keys';


// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}
const db = firebase.database();

export { firebase, db as default };

// db.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     }, (e) => {
//         console.log("Failed. ", e);
//     })

// //set
// db.ref().set({
//     name: "Anvar",
//     isSingle: false,
//     stressLivel:6,
//     job: {
//         title: "Senior Software Engineer",
//         company: "Quest global"
//     },
//     location: {
//         city: "Chavakad",
//         locality: " Manathala"
//     }
// }).then(() => {
//     console.log("Data is saved");
// }).catch((e) => {
//     console.log("Rhis failed. ", e);
// })

// //remove
// db.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('successfully removed');
//     })
//     .catch((e) => {
//         console.log("Failed. ", e);
//     })

// // update
// db.ref().update({
//     name: "Anvar",
//     age: 26,
//     'job/title': "Software Engineer",
//     stressLivel:9
// }).then(() => {
//     console.log('successfully removed');
// }).catch((e) => {
//     console.log("Failed. ", e);
// })

// //read once
// db.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val= snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log("Failed. ", e);
//     })

// //read realtime
// db.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('Error with data fetching ', e)
// })

// //Array
// db.ref('expenses').push({
//     description:'Rent',
//     note:'',
//     amount:10000,
//     createdAt: 97611234566
// })

// db.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses)
//     }).catch((e) => {
//         console.log("Failed. ", e);
//     })

// db.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     }, (e) => {
//         console.log("Failed. ", e);
//     })

// //child_removed
// db.ref('expenses')
//     .on('child_removed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
//     }, (e) => {
//         console.log("Failed. ", e);
//     })

// //child_changed
// db.ref('expenses')
//     .on('child_changed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
//     }, (e) => {
//         console.log("Failed. ", e);
//     })

// //child_added
// db.ref('expenses')
//     .on('child_added', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
//     }, (e) => {
//         console.log("Failed. ", e);
//     })



//read realtime
// db.ref('boards/-MY_XQzDrpB1v26mJ_KO/cells/0/0').on('child_changed', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val)
// }, (e) => {
//     console.log('Error with data fetching ', e)
// })