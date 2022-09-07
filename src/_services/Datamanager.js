import Axios from './Caller.services'


/**
 * Get main information data: user infos, key data & today score
 * 
 * @param {Number} userId User id number
 * @then  {Promise}  User main information
 */


/**on recupere les données de USER_MAIN_DATA */
let getUser = () => {
    return Axios.get(`/user/`+ 12)
}


/**on recupere les données de USER_ACTIVITY */
let getActivity = () => {
    return Axios.get(`/user/`+ 12+`/activity`)
}

// let getActivity = () => {

//     axios.activity(`http://localhost:3000/user/${userId}/activity`
//         .then(res => res.data.data)
//         .catch(error => console.log(error))
//     )

// }

let getAverageSessions = () => {
    /**on recupere les données de USER_AVERAGE_SESSIONS */
    return Axios.get(`/user/12/average-sessions`)
}

let getPerformance = () => {
    /**on recupere les données de USER_PERFORMANCE */
    return Axios.get(`/user/12/performance`)
    // axios.performance(`http://localhost:3000/user/${userId}/performance`
    //     .then(res => res.data.data)
    //     .catch(error => console.log(error))
    // )

}

export const dataServices = {
    getUser, getActivity, getAverageSessions, getPerformance
}
