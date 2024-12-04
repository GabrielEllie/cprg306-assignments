import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    try {
        itemsReference = collection(db, 'users', userId, 'items');
        const q = query(itemsReference);
        const querySnapshot = await getDocs(q);
        let itemsArray = [];
        querySnapshot.forEach((docSnap) => {
            let thisPost = {
                id: docSnap.id,
                ...docSnap.data()
            }
            itemsArray.push(thisPost);
        });
        return itemsArray;
    } catch (error) {
        console.error('Error getting user items', error);
    }
};

export async function addItem(userId, newItemObj) {
    try {
        const newItemRef = collection(db, 'users', userId, 'items');
        const newItemPostPromise = await addDoc(newItemRef, newItemObj);
    } catch (error) {
        console.error("Problem adding item", error);
    }
};