import PropTypes from 'prop-types';

import { Properties, Property, Row, Values, Table} from "./Transactions.styled"

export function TransactionHistory ({items}) {
    return (
        <Table>
            <Properties>
                <Row>
                    <Property>Type</Property>
                    <Property>Amount</Property>
                    <Property>Currency</Property>
                </Row>
            </Properties>
            <Values>
            {items.map(({id, type, amount, currency}) => (
                <Row key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </Row>
            ))}
            </Values>
        </Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired
}