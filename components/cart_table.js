import { Table, Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart';

const CartTable = ({ data, columns }) => {
  const { removeItem } = useCart();
  const rows = [...new Array(data.length)].map((item, index) => {
    return columns.map(({ columnId }) => data[index][columnId]);
  });

  const remove = () => removeItem(id);

  return (
    <table>
      <thead>
        <tr>
          {columns.map(({ columnId, Header }) => {
            return (
              <td key={columnId}>
                <strong>{Header}</strong>
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr key={index}>
              {row.map((cell, index) => {
                return <td key={index}>{cell}</td>;
              })}
              <Button variant="outline-dark" onClick={remove}>
                x
              </Button>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CartTable;
