import React from "react";
import useMultipleSad, { singleSad } from "../../hooks/useMultileSad";
import parseCSV from "../../services/parseSadMones";
import StyledDataTable, { StyledCell, StyledRow } from "./DataTable";

export default function DataTable() {
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
}

function DataRow(props: { data: singleSad; index: number }) {
  return (
    <StyledRow numVals={7}>
      <StyledCell>{props.data.paymentType}</StyledCell>
      <StyledCell>{props.data.details}</StyledCell>
      <StyledCell>{props.data.particulars || "N/A"}</StyledCell>
      <StyledCell>{props.data.code || "N/A"}</StyledCell>
      <StyledCell>{props.data.reference || "N/A"}</StyledCell>
      <StyledCell>{props.data.amount}</StyledCell>
      <StyledCell>{props.data.date.toUTCString()}</StyledCell>
    </StyledRow>
  );
}
