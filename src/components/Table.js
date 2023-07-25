import React, { useMemo, useState } from "react";
import {
  StyledHeaderButton,
  StyledHeadRow,
  StyledPriceTd,
  StyledTable,
  StyledTr,
} from "./styledComponents";
import { COLORS, COLUMN_IDS, COLUMN_NAMES, ROW_THEME } from "../constants";
import { getSortDataByColumnName } from "../utils";

const Table = ({ initialData }) => {
  const [sortByColumn, setSortByColumn] = useState();
  const tableData = useMemo(
    () => getSortDataByColumnName(sortByColumn, initialData),
    [sortByColumn, initialData]
  );
  const handleSort = ({ currentTarget: { id } }) => {
    if (id !== sortByColumn) {
      setSortByColumn(id);
    }
  };
  return (
    <StyledTable aria-label="Financial Details">
      <thead>
        <StyledHeadRow>
          {COLUMN_NAMES.map((name, index) => (
            <th key={name}>
              <StyledHeaderButton
                onClick={handleSort}
                data-active={COLUMN_IDS[index] === sortByColumn} // data-active is a prop for styledComponents to set the active column style.
                id={COLUMN_IDS[index]}
                data-testid={COLUMN_IDS[index]} // data-testid used for testing.
              >
                {name}
              </StyledHeaderButton>
            </th>
          ))}
        </StyledHeadRow>
      </thead>
      <tbody>
        {tableData.map((instrument, index) => (
          <StyledTr key={index} data-theme={ROW_THEME[instrument.assetClass]}>
            <td>{instrument.assetClass}</td>
            <td>{instrument.ticker}</td>
            <StyledPriceTd
              data-bg={instrument.price >= 0 ? COLORS.blue : COLORS.red} // data-bg is a prop for styledComponents to set the background color based on the price value
            >
              {instrument.price}
            </StyledPriceTd>
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;