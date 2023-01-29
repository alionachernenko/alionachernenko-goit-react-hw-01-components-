import css from './Transactions.module.css'
import PropTypes from 'prop-types';

export function TransactionHistory({transactions}) {
    return (
        <table className={css.transactionHistory}>
        <thead className={css.head}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead> 
        <tbody className={css.body}>
            {transactions.map(({id, type, amount, currency}) => (
                <tr key={id}>
                    <td>{type }</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            ))}
        </tbody>
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