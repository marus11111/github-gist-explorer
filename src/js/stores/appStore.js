import {observable} from 'mobx';

class AppStore {
  @observable ongoingInitAuth = false;
  @observable authorized = true;
  @observable gists = []
}

export default new AppStore();