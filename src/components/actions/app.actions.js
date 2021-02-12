export const USER_DATA = "STORE_USER_DATA";
export const RESET_REDUX = "RESET_REDUX";

export function storeUserData(canUserLogin, user_id) {
    return { type: USER_DATA, canUserLogin: canUserLogin, user_id: user_id }
}

export function storeResetRedux() {
    return { type: RESET_REDUX }
}