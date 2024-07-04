import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProfileList } from "./profile/ProfileList";
import { ProfileCreate } from "./profile/ProfileCreate";
import { ProfileEdit } from "./profile/ProfileEdit";
import { ProfileShow } from "./profile/ProfileShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { LiftList } from "./lift/LiftList";
import { LiftCreate } from "./lift/LiftCreate";
import { LiftEdit } from "./lift/LiftEdit";
import { LiftShow } from "./lift/LiftShow";
import { BuildingList } from "./building/BuildingList";
import { BuildingCreate } from "./building/BuildingCreate";
import { BuildingEdit } from "./building/BuildingEdit";
import { BuildingShow } from "./building/BuildingShow";
import { RtspLinkList } from "./rtspLink/RtspLinkList";
import { RtspLinkCreate } from "./rtspLink/RtspLinkCreate";
import { RtspLinkEdit } from "./rtspLink/RtspLinkEdit";
import { RtspLinkShow } from "./rtspLink/RtspLinkShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

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
        title={"UserService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Profile"
          list={ProfileList}
          edit={ProfileEdit}
          create={ProfileCreate}
          show={ProfileShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Lift"
          list={LiftList}
          edit={LiftEdit}
          create={LiftCreate}
          show={LiftShow}
        />
        <Resource
          name="Building"
          list={BuildingList}
          edit={BuildingEdit}
          create={BuildingCreate}
          show={BuildingShow}
        />
        <Resource
          name="RtspLink"
          list={RtspLinkList}
          edit={RtspLinkEdit}
          create={RtspLinkCreate}
          show={RtspLinkShow}
        />
      </Admin>
    </div>
  );
};

export default App;
