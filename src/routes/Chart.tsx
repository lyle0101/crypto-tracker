import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

interface ChartProps {
    coinId: string;
}

function Chart() {
    const { coinId } = useOutletContext<ChartProps>();
    const { isLoading, data } = useQuery<IHistorical[]>(
        ["ohlcv", coinId],
        () => fetchCoinHistory(coinId),
        {
            refetchInterval: 10000,
        }
    );
    return (
        <div>
            {isLoading ? (
                "Loading chart..."
            ) : (
                <ApexChart
                    type="candlestick"
                    series={[
                        {
                            data: data?.map((price) => {
                                return [price.time_open, [price.open, price.high, price.low, price.close, price.volume]]
                            }),
                        },
                    ]}
                    options={{
                        theme: {
                            mode: "dark",
                        },
                        chart: {
                            type: 'candlestick',
                            height: 350,
                            background: "transparent",
                          },
                          title: {
                            text: 'CandleStick Chart',
                            align: 'left'
                          },
                          xaxis: {
                            type: 'datetime'
                          },
                          yaxis: {
                            tooltip: {
                              enabled: true
                            },
                            show: false
                          },
                    }}
                />
            )}
        </div>
    );
}

export default Chart;
