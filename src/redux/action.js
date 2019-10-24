export function createSession(boolean){
    return {
        type:"CREATE_SESSION",
        current_session: boolean
    }
}

export function createProfile(array){
    return {
        type:"CREATE_PROFILE",
        data: array
    }
}