import {db} from './firebase';
import {addDoc, collection, getDocs, query, orderBy, Timestamp} from 'firebase/firestore';

const generateAvatar = (firstName, lastName) =>
    `https://avatars.dicebear.com/api/croodles/${firstName}${lastName}.svg`;
const generateEmail = (firstName, lastName) =>
    `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;

export const fetchUsers = async () => {
  const q = query(collection(db, 'users'), orderBy('created', 'desc'));
  const querySnapshot = await getDocs(q);
  const users = [];
  querySnapshot.forEach(doc => users.push(doc.data()));
  return users;
};

export const addUser = async (firstName, lastName, age) => {
  const avatar = generateAvatar(firstName, lastName);
  const email = generateEmail(firstName, lastName);
  const created = Timestamp.fromDate(new Date());
  const newUser = {firstName, lastName, avatar, age, email, created};
  const userRef = await addDoc(collection(db, 'users'), newUser);
  return { id: userRef.id, ...newUser };
};
