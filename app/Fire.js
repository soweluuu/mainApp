import * as firebase from 'firebase';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNSEU0dJAK5sTaw4MLj83HKkp_myP8AvA",
  authDomain: "rmtap-66d6d.firebaseapp.com",
  projectId: "rmtap-66d6d",
  storageBucket: "rmtap-66d6d.appspot.com",
  messagingSenderId: "639111169431",
  appId: "1:639111169431:web:5d534c46eb5efb0f64f0d2",
  measurementId: "G-HPWT2QN41F"
};

export async function getClients(clientsRetrieved){
    var clientList = [];
    
    var snapshot = await firebase.firestore()
    .collection('clients')
    .get()

    snapshot.forEach((doc) => {
        clientList.push(doc.data());
    });

    clientsRetrieved(clientList);
}



class Fire {
    constructor(callback) {
        this.init(callback);
    }
    init(callback) {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig)}
    }



}