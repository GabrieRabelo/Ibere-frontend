import AbstractService from './AbstractService';

const BASE_URL = 'autenticacao/';

const RESOURCES = {
  AUTENTICA_DADOS: BASE_URL
};
class AutenticacaoService extends AbstractService {
  constructor(props) {
    super(props);
  }

  autenticacaoLogin(usuario, senha) {
    let URL = RESOURCES.AUTENTICA_DADOS;
    return this.axios
      .post(URL, { login: usuario, senha: senha })
      .then((result: Response) => {
        return result.status;
      });
  }
}
export default AutenticacaoService;
