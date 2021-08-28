import { useState } from "react";

export type singleSad = {
  paymentType: string;
  details: string;
  amount: number;
  date: Date;
  particulars?: string;
  code?: string;
  reference?: string;
  category?: Category;
};

export enum Category {
  living = "living",
  rent = "rent",
  treats = "treats",
  flat = "flat",
  fuel = "fuel",
  other = "other",
}

export default function useMultipleSad(rows: singleSad[]) {
  const [data, setData] = useState(rows);

  const updateData = (data: singleSad[]) => {
    setData(data);
  };

  return { data, updateData };
}

export const sampleData: singleSad[] = [
  {
    paymentType: "debit",
    details: "dets",
    amount: 23,
    date: new Date(),
    category: Category.living,
  },
  {
    paymentType: "debit",
    details: "dets",
    amount: 23,
    date: new Date(),
    category: Category.living,
  },
  {
    paymentType: "debit",
    details: "dets",
    amount: 23,
    date: new Date(),
    category: Category.living,
  },
  { paymentType: "debit", details: "dets", amount: 23, date: new Date(), category: Category.rent },
  {
    paymentType: "debit",
    details: "dets",
    amount: 23,
    date: new Date(),
    category: Category.living,
  },
  { paymentType: "debit", details: "dets", amount: 23, date: new Date(), category: Category.other },
];
