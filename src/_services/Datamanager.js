import axios from 'axios'
import { useParams } from 'react-router-dom'
import Axios from './Caller.services'


const { userId } = useParams

/**
 * Get main information data: user infos, key data & today score
 * 
 * @param {Number} userId User id number
 * @then  {Promise}  User main information
 */
let getAllUsers = () => {
    return Axios.get('/users')
}

// let getUser = (uid) => {
//     return Axios.get('/users/' + uid)
// }

/**on recupere les données de USER_MAIN_DATA */
let get = () => {
    axios.get(`http://localhost:3000/user/${userId}`
        .then(res => res.data)
        .catch(error => console.log(error))
    )
}

let getActivity = () => {
    /**on recupere les données de USER_ACTIVITY */
    axios.activity(`http://localhost:3000/user/${userId}/activity`
        .then(res => res.data.data)
        .catch(error => console.log(error))
    )

}

let getAverageSessions = () => {
    /**on recupere les données de USER_AVERAGE_SESSIONS */
    axios.averageSessions(`http://localhost:3000/user/${userId}/average-sessions`
        .then(res => res.data.data)
        .catch(error => console.log(error))
    )

}

let getPerformance = () => {
    /**on recupere les données de USER_PERFORMANCE */
    axios.performance(`http://localhost:3000/user/${userId}/performance`
        .then(res => res.data.data)
        .catch(error => console.log(error))
    )

}

export const dataServices = {
    getAllUsers, get, getActivity, getAverageSessions, getPerformance
}
