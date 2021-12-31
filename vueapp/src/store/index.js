import { defineStore } from 'pinia'
import {addUser, fetchUsers} from '../service';

export const useUsersStore = defineStore('users', {
  state: () => ({ users: [] }),
  actions: {
    async fetchUsers() {
      this.users = await fetchUsers();
    },
    async addUser(firstName, lastName, age) {
      const newUser = await addUser(firstName, lastName, age);
      this.users = [ newUser, ...this.users];
    }
  }
})
