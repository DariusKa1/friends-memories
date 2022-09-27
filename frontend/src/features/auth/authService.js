import axios from "axios"

const API_URL_REGISTER = "http://localhost:5000/api/v1/user/"

const API_URL_LOGIN = "http://localhost:5000/api/v1/user/login"


// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL_REGISTER, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post(API_URL_LOGIN, userData);

    console.log(response.data, " => response.data");

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    logout,
    register,
    login
}

export default authService