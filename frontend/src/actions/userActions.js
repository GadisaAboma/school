import { GET_SEMISTER_FAIL, GET_SEMISTER_REQUEST, GET_SEMISTER_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/userConstants"
import axios from 'axios'
import { GET_EVENT_FAIL, GET_EVENT_REQUEST, GET_EVENT_SUCCESS } from "../constants/adminConstants"


export const loginUser = (username, password) => async(dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }

        const { data } = await axios.post('/api/all/login', { username, password }, config)  

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('loginInfo', JSON.stringify(data))

    } catch(error) {
         dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response.data
        }) 

    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('loginInfo')
    dispatch({
        type: USER_LOGOUT
    })

   
}

export const showTeacherModal = () => (dispatch) => {
    dispatch({
        type: 'SHOW_MODAL'
    })
}
export const closeTeacherModal = () => (dispatch) => {
    dispatch({
        type: 'CLOSE_MODAL'
    })
}


export const getCurrentSemister = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_SEMISTER_REQUEST
        })

        const { data } = await axios.get('/api/all/semister')  

        dispatch({
            type: GET_SEMISTER_SUCCESS,
            payload: data
        })


    } catch(error) {
         dispatch({
            type: GET_SEMISTER_FAIL,
            payload: error.response.data
        }) 

    }
}


export const getEvents = () => async (dispatch, getState) => {

    try {
        dispatch({
            type: GET_EVENT_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }


        const { data } = await axios.get('/api/admin/getEvents', config)  

        dispatch({
            type: GET_EVENT_SUCCESS,
            payload: data
        })


    } catch(error) {
         dispatch({
            type: GET_EVENT_FAIL,
            payload: error.response.data
        }) 

    }
}