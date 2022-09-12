import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import { useCallback, useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthProvider";
import { loadingContext } from "../contexts/Loading";

interface ChartData {
    chartData: {
        id: string,
        color: string,
        data: [
            {
                x: string,
                y: number
            }
        ]
    }
    generalData: {
        recisoesMes: [
            {
                empregadoId: string,
                dataDeAdmissao: string
                dataDeRecisao: string
            }
        ]
        admissoesMes: [
            {
                empregadoId: string,
                dataDeAdmissao: string
                dataDeRecisao: string
            }
        ]
    }
}

export enum EnumCharts {
    headCountChart = 'headCountChart',
    turnoverChart = 'turnoverChart',
}

const useCharts = (chart: EnumCharts) => {
    const [dateRange, setDateRange] = useState<Dayjs>(dayjs(new Date()));
    const [ data, setData ] = useState<ChartData | undefined>();
    const { user } = useContext(AuthContext)
    const { REACT_APP_API_URL } = process.env;
    const { setLoading } = useContext(loadingContext)

    const getData = useCallback(async () => {
        try {
            setLoading(true)
            const response = await axios.get(`${REACT_APP_API_URL}/${chart}`, {
                headers: {
                  "authorization": "Bearer " + user?.token
                },
                params: {
                    mes: dateRange.month() + 1 ,
                    ano: dateRange.year()
                }
              })
              setLoading(false)
              setData(response.data)
        } catch (err: any) {
            setLoading(false)
            console.log(err)
        }
    }, [user, REACT_APP_API_URL, chart, setLoading, dateRange])
  
    useEffect(() => {
      getData()
    }, [getData])

    return {
        data,
        dateRange,
        setDateRange
    }
}

export default useCharts