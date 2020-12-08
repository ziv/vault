import axios from 'axios';
import { NameSpace, Vault } from './types';

export class Vaultier {
  constructor(public readonly base = 'http://localhost:3666') {
  }

  async store(ns: NameSpace, vault: Vault) {
    console.log(`${this.base}/store/${ns}`);
    return axios.post(`${this.base}/store/${ns}`, vault);
  }

  async fetch(ns: NameSpace, vault: Vault) {
    return axios.get(`${this.base}/fetch/${ns}`);
  }

  async flush(ns: NameSpace, vault: Vault) {
    return  axios.delete(`${this.base}/flush/${ns}`);
  }
}
