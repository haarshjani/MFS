
declare const __webpack_init_sharing__: any;
declare const __webpack_share_scopes__: any;
(async () => {
  
  await __webpack_init_sharing__('default');
  await __webpack_share_scopes__.default;


  const React = await import('react');
  const ReactDOM = await import('react-dom/client');
  const App = (await import('./router/AppRouter')).default;
  const { ApolloProvider } = await import('@apollo/client');
  const client = (await import('./apollo/client')).default;
  const { Provider } = await import('react-redux');
  const { store } = await import('./redux/store');

  const Accounts = () => (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  );

  const rootEl = document.getElementById('root');
  if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(<Accounts />);
  }
})();
