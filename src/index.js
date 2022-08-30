import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./utils/react-auth0-spa";
import history from "./utils/history";
import { BackendProvider } from "./utils/BackendProvider";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const loadingMarkup = (
  <div className="py-4 text-center">
    <h2>Loading...</h2>
  </div>
)

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH_DOMAIN}
        client_id={process.env.REACT_APP_AUTH_CLIENT}
        redirect_uri={process.env.REACT_APP_API_ROOT}
        onRedirectCallback={onRedirectCallback}
        audience={process.env.REACT_APP_AUTH_AUDIENCE}
      >
        <BackendProvider>
          <App />
        </BackendProvider>
      </Auth0Provider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);

serviceWorker.unregister();
