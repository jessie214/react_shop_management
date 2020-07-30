import { LOGIN_DATA } from './loginActionType';
import axios from 'axios';

export const getValue = ()=> async (dispatch) =>{
    let res = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8888/api/private/v1/login',
    });

    dispatch({
        type: LOGIN_DATA,
        data: res
    });

}