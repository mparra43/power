import { Pagination } from './Pagination';
import { TableCard } from './Table/TableCard';
import { TableFooter } from './Table/TableFooter';
import usePagination from '../hooks/usePagination';
import { ActionData, Buttons } from '../types/index';
import { ToolButtons } from '.';


interface TableProps {
  actions?: Buttons[]
  handleActions?: (data: ActionData) => void;
  header?: React.ReactNode
  classNameTable: string;
  columns: string[];
  headers: string[]
  rows: any[]
  itemsForPage: number;
}

export const Table: React.FC<TableProps> = ({ actions, classNameTable, columns, header, headers, handleActions, itemsForPage, rows }) => {
  const {
    currentData,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
  } = usePagination(rows, itemsForPage);


  return (

    <TableCard>
      <TableCard.Header>{header}</TableCard.Header>
      <table className={classNameTable || "table "}>
        <thead className='bg-light'>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, rowIndex) => (
            <tr key={rowIndex} >
              {columns.map((column, columnIndex) => (
                <td key={columnIndex}>
                  {column === 'actions' && actions && handleActions ?
                    <ToolButtons buttons={actions} element={row} onClick={handleActions}></ToolButtons> : row[column]
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter className='w-100 d-flex justify-content-end'>
        <Pagination currentPage={currentPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} />
      </TableFooter>
    </TableCard>

  );
};
