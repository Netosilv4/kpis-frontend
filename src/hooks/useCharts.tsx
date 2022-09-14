import dayjs, { Dayjs } from "dayjs";
import { useCallback, useContext, useEffect, useState } from "react"
import { loadingContext } from "../contexts/Loading";
import { fetchChartData } from "../services/charts";
import { AuthContext } from "../contexts/AuthProvider";
import { swalHandler } from "../errors/swalHandler";

export interface ChartData {
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
        totalEmpregadosInicio: number,
        totalEmpregadosFim: number,
        balancoGeral: number,
        recisoesTotais: number,
        admissoesTotais: number
    }
}

export enum EnumCharts {
    headCountChart = 'headCountChart',
    turnoverChart = 'turnoverChart',
}

const useCharts = (chart: EnumCharts) => {
    const [dateRange, setDateRange] = useState<Dayjs>(dayjs(new Date()));
    const [ data, setData ] = useState<ChartData | undefined>();
    const { setLoading } = useContext(loadingContext)
    const { logout } = useContext(AuthContext);


    const getData = useCallback(async () => {
        setLoading(true)
        const response = await fetchChartData(chart, dateRange)
        if(response.status === 200) {
            setLoading(false)
            return setData(response.data as ChartData)
        }
        setLoading(false)
        swalHandler({
            status: response.status,
            logoutCallback: logout
        })
    }, [chart, setLoading, dateRange])
  
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