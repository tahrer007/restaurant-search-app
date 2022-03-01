import axios from "axios"


export default axios.create({
    baseURL : "https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:"Bearer HyjzOqcQSpF5XCLKOd8bylSqLufJuSgf3LjtAG2TTaiKnyYt9BY5DudegxXApobojdcBMsHqeS12Oj3eMW8g7CUTL-bd2zwibC1iTfHtAPocJJ16KLo1EVANyMYcYnYx"
    }
});

