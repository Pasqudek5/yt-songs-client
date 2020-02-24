import axios from 'axios'

interface Payload {
  url: string
}

interface Response {
  link?: string,
  title?: string,
  message?: string
}

class Api {
  protected BASE_URL = 'http://localhost:3000'

  public async convertVideo(payload: Payload): Promise<Response> {
    
    const URL = `${this.BASE_URL}/songs/`;

    const { data } = await axios.post(URL, payload);
    
    return data;
  }
}

export default new Api();
