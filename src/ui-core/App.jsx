import { useState } from 'react';
import { ThemeContext } from '../helpers/context';
import { AppWrapper } from '../styled-components/index';
import Routes from '../routes/index';


export default function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

  return (
    <AppWrapper>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <Routes />
      </ThemeContext.Provider>
    </AppWrapper>
  );
}
