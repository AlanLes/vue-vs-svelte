import {writable} from 'svelte/store';
import {addUser} from '../../../vueapp/src/service';
import {fetchUsers} from '../service';

export const store = writable({ users: [] });

export const initFetchUsers = async () => {
  const users = await fetchUsers();
  store.set({users});
}

export const addSingleUser = async (firstName, lastName, age) => {
  const newUser = await addUser(firstName, lastName, age);
  store.update(({users}) => ({users: [ newUser, ...users]}));
}
