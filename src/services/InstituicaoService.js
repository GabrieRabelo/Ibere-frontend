import AbstractService from './AbstractService';

const BASE_URL = 'instituicao/';

const RESOURCES = {
  LISTA_INSTITUICOES: BASE_URL
};
class InstituicaoService extends AbstractService {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

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

  buscaPorId(id) {
    let URL = RESOURCES.LISTA_INSTITUICOES;
    URL += `${id}`;

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
