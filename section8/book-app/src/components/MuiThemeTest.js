import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button' 

const MuiThemetest = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: red[500]
            }
        }
    });
 return (
    <>
        <Button color="primary" variant="contained" >デフォルトのテーマ</Button>
        <ThemeProvider theme={theme} variant="contained">
            <Button color="primary" variant="contained">テーマ変更後</Button>
        </ThemeProvider>
    </>
 );
}

export default MuiThemetest;