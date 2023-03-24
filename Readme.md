# FIREBASE CRUD APP LINKS
> note: this is an app to learn use firebase

## code to make a crud using firebase
### install 
```javascript
  yarn add firebase
```
### conect to firebase
when you start your project firebase generate this code
```javascript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //data config
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
```
### add data
```javascript
//import firebase
import { db } from "../../services/firebase";
import { collection, addDoc} from "firebase/firestore";

//add data to collection
const saveData = async (data)=>{
  await addDoc(collection(db, 'nameCollection'), data);
}

```

### get data
```javascript
//import firebase
import { db } from './services/firebase';
import { collection, doc, getDocs, onSnapshot } from 'firebase/firestore';
```
```javascript
//this function get data once time
const getLinsk = async()=>{
  const listLinks = []
  const res  = await getDocs(collection(db,'nameCollection'));
  res.forEach((doc)=>{
    const objLink = {
      'id': doc.id,
      'url': doc.data().url,
      'nameLink': doc.data().nameLink,
      'descriptionLink': doc.data().descriptionLink
    }
    listLinks.push(objLink)
  })
  setAllLinks(listLinks);
  console.log(allLinks)
}
```
```javascript
//this function get data if there are changes on firebase
const getLinks = ()=>{
  onSnapshot(collection(db, 'nameCollection'), (res)=>{
    const listLinks = [];
    res.forEach((doc)=>{
      const objLink = {
        'id': doc.id,
        'url': doc.data().url,
        'nameLink': doc.data().nameLink,
        'descriptionLink': doc.data().descriptionLink
      }
      listLinks.push(objLink);
    })
    setAllLinks(listLinks);
  })
}
```

### delete data
```javascript
import { db } from "../../services/firebase"
import { deleteDoc, doc } from "firebase/firestore"

const deleteLink = async()=>{
  if(confirm('are you sure?')){
    await deleteDoc(doc(db, 'nameCollection', id));
  }
}
```

### update data
```javascript
import { db } from "../../services/firebase";
import { updateDoc, doc } from "firebase/firestore";

const saveLink = async(data)=>{
  await updateDoc(doc(db, 'links', dataLink.id), data);
}
```