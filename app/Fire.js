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


class Fire {
    constructor(callback) {
        this.init(callback)
    }
    init(callback) {
        if (firebase.apps.length === 0){
            firebase.initializeApp(firebaseConfig)
    }
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            callback(null, user)
        } else {
            firebase.auth().signInAnonymously().catch(error => {
                callback(error)
            });
        }
    })
}

getGroups(callback) {
    let ref = firebase.firestore().collection('users').doc(this.userId).collection('groups');

    this.unsubscribe = ref.onSnapshot(snapshot => {
        groups =[]

        snapshot.forEach(doc => {
            groups.push({id: doc.id, ...doc.data()})
        })

        callback(groups);
    })
}

    get userId() {
        return firebase.auth().currentUser.uid
    }


    detach () {
        this.unsubscribe();
    }
}  
export default Fire;
