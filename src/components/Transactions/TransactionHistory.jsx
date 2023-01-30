
import PropTypes from 'prop-types';
import { Properties, Values, Row, Property } from './Transactions.styled';


export function TransactionHistory({transactions}) {
    return (
        <table>
        <Properties>
            <Row>
                <Property>Type</Property>
                <Property>Amount</Property>
                <Property>Currency</Property>
            </Row>
        </Properties> 
        <Values>
            {transactions.map(({id, type, amount, currency}) => (
                <Row key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </Row>
            ))}
        </Values>
</table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}