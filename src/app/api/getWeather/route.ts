import axios from "axios"

export async function GET(request: Request, { params }: { params: {zip: string} }) {
    const zip = { params }

    if (!zip) {
        return Response.json({ error: "Zip  code is required" }, { status: 400 })
    }

    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${zip}&aqi=no`)
        return Response.json(response)
    } catch (err) {
        return Response.json({ error: "Failed to fetch data", err }, { status: 500 })
    }
}