import axios from "axios";
import API from './studentApi'

const qs = require('qs')
interface ApiResponse {
    Data?: any;
    Message: string;
    Code: number;
    loading: boolean;
}
class StudentServices{
    public async getList(pageNo:number,pageSize:number,query:any):Promise<ApiResponse>{
        try{
            const res = await axios.get(API.getList+"?query="+query+"&pageNo="+pageNo+"&pageSize="+pageSize);
            return await res.data;
        }
        catch(error:any){
            return {
                Message: error.response.statusText,
                Code: error.response.status,
                Data: null,
                loading: false
            }
        }
    }
}
export default new StudentServices();