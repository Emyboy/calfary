import axios from "axios";
import Global from "../Global";


export default {

    createUser: async function() {
        const res = await axios(Global.API_URL+'/auth/app', {
            method: 'POST',
            data
        });
        return res;
    }

}

