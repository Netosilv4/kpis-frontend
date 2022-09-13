import axios from "axios"
import { Dayjs } from "dayjs"
import { ChartData } from "../hooks/useCharts"

const { REACT_APP_API_URL } = process.env

export enum EnumCharts {
    headCountChart = "headCountChart",
    turnoverChart = "turnoverChart",
}

interface ChartApiResponse {
    data: ChartData | string
    status: number
}


export const fetchChartData = async (chart: EnumCharts, dateRange: Dayjs): Promise<ChartApiResponse> => {
    try {
    const user = localStorage.getItem("kpis-token")
    if(!user) return {
        data: "No user found",
        status: 401
    }
    const response = await axios.get(`${REACT_APP_API_URL}/${chart}`, {
        headers: {
          "authorization": "Bearer " + JSON.parse(user).token,
        },
        params: {
            mes: dateRange.month(),
            ano: dateRange.year()
        }
      })
      return {
            data: response.data as ChartData,
            status: response.status as number
      }
    } catch (err: any) {
        if(err.response) {
            return {
                data: err.response.data,
                status: err.response.status
            }
        }
        return {
            data: "Erro interno",
            status: 500
    }
}
}