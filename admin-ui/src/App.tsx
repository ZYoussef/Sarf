import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import basicHttpAuthProvider from "./auth-provider/ra-auth-basic-http";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ExchangeOfficeList } from "./exchangeOffice/ExchangeOfficeList";
import { ExchangeOfficeCreate } from "./exchangeOffice/ExchangeOfficeCreate";
import { ExchangeOfficeEdit } from "./exchangeOffice/ExchangeOfficeEdit";
import { ExchangeOfficeShow } from "./exchangeOffice/ExchangeOfficeShow";
import { CurrencyList } from "./currency/CurrencyList";
import { CurrencyCreate } from "./currency/CurrencyCreate";
import { CurrencyEdit } from "./currency/CurrencyEdit";
import { CurrencyShow } from "./currency/CurrencyShow";
import { CurrencyExchangeList } from "./currencyExchange/CurrencyExchangeList";
import { CurrencyExchangeCreate } from "./currencyExchange/CurrencyExchangeCreate";
import { CurrencyExchangeEdit } from "./currencyExchange/CurrencyExchangeEdit";
import { CurrencyExchangeShow } from "./currencyExchange/CurrencyExchangeShow";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Sarf"}
        dataProvider={dataProvider}
        authProvider={basicHttpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="ExchangeOffice"
          list={ExchangeOfficeList}
          edit={ExchangeOfficeEdit}
          create={ExchangeOfficeCreate}
          show={ExchangeOfficeShow}
        />
        <Resource
          name="Currency"
          list={CurrencyList}
          edit={CurrencyEdit}
          create={CurrencyCreate}
          show={CurrencyShow}
        />
        <Resource
          name="CurrencyExchange"
          list={CurrencyExchangeList}
          edit={CurrencyExchangeEdit}
          create={CurrencyExchangeCreate}
          show={CurrencyExchangeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
