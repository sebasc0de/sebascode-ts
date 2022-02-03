import { db, app } from './config';
import {
  addDoc,
  doc,
  collection,
  deleteDoc,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  onSnapshot,
} from 'firebase/firestore';

// Fetch agency wordpress packs
export const fetchWordpressPacks = async () => {
  const q = query(collection(db, 'services'));

  const packs = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    packs.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return packs;
};
