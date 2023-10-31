import { makeAutoObservable } from 'mobx';

class ActivityStore {
  title = 'Hello from MobX!';

  constructor() {
    makeAutoObservable(this);
  }

  setTitle = () => {
    this.title = this.title + '!';
  };
}

export default ActivityStore;
