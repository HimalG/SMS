import { ApiEndPoints } from '../../../configs/apiconfig';
import { baseUrl } from '../../http/_config';
let API = {};
export default API={

    getList: ApiEndPoints.api + baseUrl+'/student/list',
    Save:ApiEndPoints.api+baseUrl+'/student/save',
}