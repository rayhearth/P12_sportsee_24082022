import Axios from './Caller.services'

import { allData } from './DataMocked'



const api = true

/**on recupere les données de USER_MAIN_DATA **/
/**
 * Get main information data: user infos, key data & today score
 * @param {Number} userId User id number
 * @const {data}  User main information
 * @await Axios get
 * @return data
 */
const getUser = async (userId) => {
    if (!api) {
        const { data } = await Axios.get(allData.usersMocked.find((el) => el.id === userId))
        return data
    } else {
        // console.log(Axios.get(`/user/${userId}`))
        const { data } = await Axios.get(`/user/${userId}`)
        return data
    }
}


/**on recupere les données de USER_ACTIVITY */
/**
 * Get main information data: user infos, key data & today score
 * @param {Number} userId User id number
 * @const {data}  User activity
 * @await Axios get
 * @return data
 */
const getActivity = async (userId) => {
    if (!api) {
        const { data } = await Axios.get(allData.activityMocked.find((el) => el.userId === userId))
        return data
    } else {
        const { data } = await Axios.get(`/user/${userId}/activity`)
        return data
    }
}

/**on recupere les données de USER_AVERAGE_SESSIONS */
/**
 * Get main information data: user infos, key data & today score
 * @param {Number} userId User id number
 * @const {data}  User average session
 * @await Axios get
 * @return data
 */
const getAverageSessions = async (userId) => {
    if (!api) {
        const { data } = await Axios.get(allData.averageSessionsMocked.find((el) => el.userId === userId))
        return data
    }
    const { data } = await Axios.get(`/user/${userId}/average-sessions`)
    return data
}

/**on recupere les données de USER_PERFORMANCE */
/**
 * Get main information data: user infos, key data & today score
 * @param {Number} userId User id number
 * @const {data}  User performance
 * @await Axios get
 * @return data
 */
const getPerformance = async (userId) => {
    if (!api) {
        const { data } = await Axios.get(allData.performanceMocked.find((el) => el.userId === userId))
        return data
    }
    const { data } = await Axios.get(`/user/${userId}/performance`)
    return data
}

/**
 * @var {type} dataServices
 */
export const dataServices = {
    getUser, getActivity, getAverageSessions, getPerformance
}
