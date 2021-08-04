import { ExchangeOffice as TExchangeOffice } from "../api/exchangeOffice/ExchangeOffice";

export const EXCHANGEOFFICE_TITLE_FIELD = "managerName";

export const ExchangeOfficeTitle = (record: TExchangeOffice) => {
  return record.managerName;
};
