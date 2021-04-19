import firebase from 'firebase';
import { checkCell } from '../redux/actions/boardCells';



var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};


// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}
const db = firebase.database();

export { firebase, db as default };

export const  fromDB = (id, dispatch) =>{
    db.ref(`board/${id}/cellPos`).on('child_changed', data => {
        console.log(data)
        // if (data.val()) {
        //   dispatch({
        //     type: 'SET_MESSAGE',
        //     payload: data.val() 
        //   });
        // }
      });
}

db.ref('expenses')
    .on('value', (snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        })
        console.log(expenses)
    }, (e) => {
        console.log("Failed. ", e);
    })

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
db.ref('boards/-MY_XQzDrpB1v26mJ_KO/cells/0/0').on('child_changed', (snapshot) => {
    const val = snapshot.val();
    console.log(val)
}, (e) => {
    console.log('Error with data fetching ', e)
})