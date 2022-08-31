import { useContext } from 'react';
import { ThemeContext } from '../helpers/context';
import { FiSun, FiMoon } from 'react-icons/fi';


const Theme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    if (theme === 'light') {
        return <FiSun onClick={toggleTheme} />
    } else {
        return <FiMoon onClick={toggleTheme} />
    }
}

export default Theme;