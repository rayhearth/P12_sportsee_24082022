class MainData {
    constructor({ id, userInfos, firstName, lastName, age, todayScore, score, keyData, calorieCount, proteinCount, carbohydrateCount, lipidCount }) {
        this.userId = id
        this.userInfos = userInfos
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.todayScore = todayScore
        this.score = score
        this.keyData = keyData
        this.calorieCount = calorieCount
        this.proteinCount = proteinCount
        this.carbohydrateCount = carbohydrateCount
        this.lipidCount = lipidCount
    }
}

class ActivityData {
    constructor({ userId, sessions, day, kilogram, calories }) {
        this.userId = userId
        this.sessions = sessions
        this.day = sessions.day
        this.kilogram = sessions.kilogram
        this.calories = sessions.calories
    }
}


class AverageData {
    constructor({ userId, sessions, day, sessionLength }) {
        this.userId = userId
        this.sessions = sessions
        this.day = day
        this.sessionLength = sessionLength
    }
}

class PerformanceData {
    constructor({ userId, kind }) {
        this.userId = userId
        this.kind = kind
    }
}

export {MainData, ActivityData, AverageData, PerformanceData}