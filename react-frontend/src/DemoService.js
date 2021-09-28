import axios from 'axios'

const DEMO_REST_API_URL = 'http://localhost:8082/api/employee';

class DemoService {

    getDemo(){
        return axios.get(DEMO_REST_API_URL);
    }
}

export default new DemoService();
