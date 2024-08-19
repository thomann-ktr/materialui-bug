import { ThemeProvider, createTheme } from '@mui/material/styles';
import Textarea from '@mui/joy/Textarea';

const theme = createTheme ({
  palette: {
    mode: 'light',
    primary: {
      main: '#f24600',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Textarea />
    </ThemeProvider>
  );
}

export default App;
