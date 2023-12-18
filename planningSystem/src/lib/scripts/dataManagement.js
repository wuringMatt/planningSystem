import { collection, getDocs, setDoc, doc, getDoc, updateDoc } from 'firebase/firestore';

export async function getData(db, coll, d) {
    if(d){
        const querySnapshot = await getDoc(doc(db, coll, d))
        console.log(querySnapshot.data())
        return querySnapshot.data()
    } else{
        const querySnapshot = await getDocs(collection(db, coll));
        const queryList = querySnapshot.docs.map(doc => doc.data())
        return queryList
    }
}

export async function setData(db, coll, d, obj) {
    try {
        await setDoc(doc(db, coll, d), obj);
        await getData(db, coll, d)
        console.log("data added");
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function editDoc(db, coll, d, obj){
    try {
        await updateDoc(doc(db, coll, d), obj)
        await getData(db, coll, d)
        console.log("data changed");
    } catch(e){
        console.log("error: " + e)
    }
}