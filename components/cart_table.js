import Fade from 'react-reveal/Fade';
import { Table } from 'react-bootstrap';

const CartTable = ({ data, columns }) => {
  const rows = [...new Array(data.length)].map((item, index) => {
    return columns.map(({ columnId }) => data[index][columnId]);
  });

  return (
    <Fade bottom cascade>
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
                {row.map((cell, index) => {
                  return <td key={index}>{cell}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Fade>
  );
};

export default CartTable;
