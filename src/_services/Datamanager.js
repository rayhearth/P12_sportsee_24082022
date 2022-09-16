import Axios from './Caller.services'

import { allData } from './DataMocked'

const api = true


const mockedData = (data, id) => {
    for (const key in data) {
        if (data[key].userId === id) {
            return JSON.parse(JSON.stringify(data[key]))
        }
    }
}

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
        return mockedData(allData.USER_MAIN_DATA, userId)
    } else {
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
        return mockedData(allData.USER_ACTIVITY, userId)
    } else{
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
        return mockedData(allData.USER_AVERAGE_SESSIONS, userId)
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
        return mockedData(allData.USER_PERFORMANCE, userId)
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
