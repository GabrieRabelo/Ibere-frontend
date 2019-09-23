import axios from 'axios';
import { config } from '../util/Config';

export default class AbstractService {
  axios;

  constructor() {
    this.axios = axios.create({
      baseURL: config.server
    });
  }
}
