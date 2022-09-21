import { Provider } from "react-redux";
import { AppRouter } from "./router/AppRouter";
import { store } from "./store";
import { AppTheme } from "./theme";

export const PokedexApp = () => {
  return (
    <Provider store={store}>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </Provider>
  );
};
