import {decorate, action, observable} from 'mobx'
import axios from 'axios';
import { Platform, AsyncStorage } from 'react-native';

const BACKEND = 'http://localhost:3001/api'
const IOS_KEY = 'AIzaSyChXV7q2lp22BU7Vy7CqTgSxW4c1jtTnac'
const ANDROID_KEY = 'AIzaSyCuba8zW2mjOLgK3zQ2MhdHzamH9hDiiLc'

const getApiKey = () => {
  return Platform.OS === 'ios' ? IOS_KEY : ANDROID_KEY;
}
class UserStore {
  user = {}
  accessToken = "";

  setUser(user) {
    this.user = user;
  }

  setAccessToken(token) {
    this.accessToken = token;
  }

  getChannelInfo = async () => {
    try {
      await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true`, {
        headers: { Authorization: `Bearer ${this.accessToken}` },

      }).then(res => console.log(res.data))
    } catch (error) {
      console.log(error)
    }
  }
}

decorate(UserStore, {
  user: observable,
  setUser: action,
  setAccessToken: action,
  accessToken: observable
});

export default new UserStore();