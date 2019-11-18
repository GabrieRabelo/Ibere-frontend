import AbstractService from './AbstractService';

const BASE_URL = 'instituicoes/';

const RESOURCES = {
  LISTA_INSTITUICOES: BASE_URL
};

class InstituicaoService extends AbstractService {

  listaInstituicoes() {
    let URL = RESOURCES.LISTA_INSTITUICOES;

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

export default InstituicaoService;
