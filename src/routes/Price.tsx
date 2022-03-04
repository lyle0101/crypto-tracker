import { useLocation } from "react-router-dom";
import styled from "styled-components";

interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        };
    };
}

const ListItem = styled.li`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  border-bottom: 1px solid #000;
`;

const Key = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const Value = styled.span`
  font-size: 14px;
`;

function Price() {
    const location = useLocation();
    const state = location.state as PriceData
    return <ul>
        <ListItem>
            <Key>1시간 변동폭</Key>
            <Value>{state.quotes.USD.percent_change_1h}%</Value>
        </ListItem>
        <ListItem>
            <Key>6시간 변동폭</Key>
            <Value>{state.quotes.USD.percent_change_6h}%</Value>
        </ListItem>
        <ListItem>
            <Key>12시간 변동폭</Key>
            <Value>{state.quotes.USD.percent_change_12h}%</Value>
        </ListItem>
        <ListItem>
            <Key>1일 변동폭</Key>
            <Value>{state.quotes.USD.percent_change_24h}%</Value>
        </ListItem>
        <ListItem>
            <Key>일주일 변동폭</Key>
            <Value>{state.quotes.USD.percent_change_7d}%</Value>
        </ListItem>
        <ListItem>
            <Key>한달 변동폭</Key>
            <Value>{state.quotes.USD.percent_change_30d}%</Value>
        </ListItem>
        <ListItem>
            <Key>1년 변동폭</Key>
            <Value>{state.quotes.USD.percent_change_1y}%</Value>
        </ListItem>
    </ul>;
}

export default Price;