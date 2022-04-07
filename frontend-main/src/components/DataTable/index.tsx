import React from 'react';
import { singleSad, useMultipleSad } from '../../hooks/useMultileSad';
import { parseCSV } from '../../services/parseSadMones';
import { StyledDataTable, StyledCell, StyledRow } from './DataTable.elements';

export const DataTable = () => {
  const { data, updateData } = useMultipleSad([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Ensure we have something
    if (!e || !e.target || !e.target.files) return;

    const file = e.target.files[0];
    const reader = new FileReader();

    if (reader == null) return;

    reader.onload = (evt: any) => {
      if (reader.result)
        parseCSV(reader.result.toString())
          .then((data) => updateData(data))
          .catch((e) => console.log(e));
    };
    reader.readAsText(file);
  };

  return (
    <>
      <input type="file" accept=".csv,.xlsx,.xls" onChange={(e) => handleFileUpload(e)}></input>
      <StyledDataTable>
        {data.map((val, index) => (
          <DataRow key={index} data={val} index={index}></DataRow>
        ))}
      </StyledDataTable>
    </>
  );
};

type DataRowProps = { data: singleSad; index: number };

const DataRow = ({ data }: DataRowProps) => {
  return (
    <StyledRow numVals={7}>
      <StyledCell>{data.paymentType}</StyledCell>
      <StyledCell>{data.details}</StyledCell>
      <StyledCell>{data.particulars || 'N/A'}</StyledCell>
      <StyledCell>{data.code || 'N/A'}</StyledCell>
      <StyledCell>{data.reference || 'N/A'}</StyledCell>
      <StyledCell>{data.amount}</StyledCell>
      <StyledCell>{data.date.toUTCString()}</StyledCell>
    </StyledRow>
  );
};
