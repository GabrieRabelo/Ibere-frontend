import AbstractService from './AbstractService';

const BASE_URL = 'roteiros/';

const RESOURCES = {
  LISTA_ROTEIROS: BASE_URL
};

class RoteiroService extends AbstractService {
  constructor() {
    super();
  }

  listaRoteiros() {
    let URL = RESOURCES.LISTA_ROTEIROS;

    return this.axios
      .get(URL)
      .then((result: Response) => {
        return result.data;
      })
      .catch(error => {
        return error.response.data.message;
      });
  }
}

export default RoteiroService;
