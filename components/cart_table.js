import Fade from 'react-reveal/Fade';
import { Table } from 'react-bootstrap';

const CartTable = ({ data, columns }) => {
  const rows = [...new Array(data.length)].map((item, index) => {
    return columns.map(({ columnId }) => data[index][columnId]);
  });

  return (
    <Table responsive hover>
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
              <Fade bottom cascade>
                {row.map((cell, index) => {
                  return <td key={index}>{cell}</td>;
                })}
              </Fade>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CartTable;
