import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { firestore } from "../../firebase.config"

 //Saving new item
 export const saveItem = async (data) => {
    await setDoc(
        doc(firestore, "shoeItems", `${Date.now()}`), data, {
            merge: true,
        });
        } 
 
        //get shoe items
        export const getAllShoeItems = async () => {
            const items = await getDocs(
                query(collection(firestore, "shoeItems"), orderBy("id", "desc"))
            );
            return items.docs.map((doc) => doc.data());
        }