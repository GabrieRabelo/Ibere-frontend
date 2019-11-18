import AbstractService from './AbstractService';

class InstituicaoService extends AbstractService {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

  listaInstituicoes() {
    let URL = 'http://www.hml.ages.pucrs.br:4301/api/v1/instituicao';

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
    let URL = `http://www.hml.ages.pucrs.br:4301/api/v1/instituicao/${id}`;

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