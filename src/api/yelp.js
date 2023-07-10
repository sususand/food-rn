import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
            'Bearer d4qkQ_dybaDAfaRxZ-C5eyGN75Y1PAKoqiqkRgQMDtW4UBa7DPfhCHtsLJtMMCaLNlbSYnl2k3LEKFLKm0ly2Xi3Rht0iAwIFlPC6HpSFS1t7FvgRvYMxwcafNuoZHYx'
    }
})