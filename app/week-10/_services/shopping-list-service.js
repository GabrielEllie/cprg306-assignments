import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    try {
        let itemsArray = [];
        const itemsReference = collection(db, 'users', userId, 'items');
        const q = query(itemsReference);
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((docSnap) => {
                itemsArray.push({
                    id: docSnap.id,
                    ...docSnap.data()
                });
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
        return newItemPostPromise.id;
    } catch (error) {
        console.error("Problem adding item", error);
    }
};