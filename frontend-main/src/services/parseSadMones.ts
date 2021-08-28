import { singleSad } from "../hooks/useMultileSad";

async function bankStringToDate(dateString: string): Promise<Date> {
  const elements = dateString.split("/");
  return new Date(`${elements[2]}-${elements[1]}-${elements[0]}`);
}

export default async function parseCSV(raw: string): Promise<singleSad[]> {
  const lines: string[] = raw.split("\n");
  const entries: singleSad[] = [];

  for (let i = 1; i + 1 < lines.length; i++) {
    const rowCols: string[] = lines[i].split(",");
    const tmp: singleSad = {
      paymentType: rowCols[0],
      details: rowCols[1],
      particulars: rowCols[2],
      code: rowCols[3],
      reference: rowCols[4],
      amount: parseFloat(rowCols[5]),
      date: await bankStringToDate(rowCols[6]),
    };
    entries.push(tmp);
  }

  return entries;
}
