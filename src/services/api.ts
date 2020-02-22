import axios from 'axios'

class Api {
  protected BASE_URL = 'http://www.localhost:1234'

  public async convertVideo(payload) {
    const URL = `${this.BASE_URL}/songs/`;

    const { data } = await axios.post(URL, payload)
    return data
  }
}

export default new Api();
