import { Currency } from "../currency/Currency";

export type ExchangeOffice = {
  address: string;
  createdAt: Date;
  currencies?: Array<Currency>;
  id: string;
  managerName: string | null;
  name: string;
  phoneNumber: string | null;
  updatedAt: Date;
};
