
import "./styles/App.css"


declare const __webpack_init_sharing__: any;
declare const __webpack_share_scopes__: any;
(async () => {
  
  await __webpack_init_sharing__('default');
  await __webpack_share_scopes__.default;


  const React = await import('react');
  const ReactDOM = await import('react-dom/client');
  const App = (await import('./router/AppRouter')).default;
  const Providers = await import("./Providers");
  

  const Accounts = () => (
   <Providers>
        <App />
      
    </Providers>
  );

  const rootEl = document.getElementById('root');
  if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(<Accounts />);
  }
})();
