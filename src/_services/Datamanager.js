import Axios from './Caller.services'


/**on recupere les données de USER_MAIN_DATA **/
/**
 * Get main information data: user infos, key data & today score
 * @param {Number} userId User id number
 * @const {data}  User main information
 * @await Axios get
 * @return data
 */
const getUser = async (userId) => {
    const { data } = await Axios.get(`/user/${userId}`)
    return data
}

/**on recupere les données de USER_ACTIVITY */
/**
 * Get main information data: user infos, key data & today score
 * @param {Number} userId User id number
 * @const {data}  User main information
 * @await Axios get
 * @return data
 */
const getActivity = async (userId) => {
    const { data } = await Axios.get(`/user/${userId}/activity`)
    return data
}

/**on recupere les données de USER_AVERAGE_SESSIONS */
/**
 * Get main information data: user infos, key data & today score
 * @param {Number} userId User id number
 * @const {data}  User main information
 * @await Axios get
 * @return data
 */
const getAverageSessions = async (userId) => {
    const { data } = await Axios.get(`/user/${userId}/average-sessions`)
    return data
}

/**on recupere les données de USER_PERFORMANCE */
/**
 * Get main information data: user infos, key data & today score
 * @param {Number} userId User id number
 * @const {data}  User main information
 * @await Axios get
 * @return data
 */
const getPerformance = async (userId) => {
    const { data } = await Axios.get(`/user/${userId}/performance`)
    return data
}

export const dataServices = {
    getUser, getActivity, getAverageSessions, getPerformance
}
