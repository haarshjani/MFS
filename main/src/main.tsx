import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router/AppRouter";
import Providers from "./providers";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Providers>
            <App />
    </Providers>
);