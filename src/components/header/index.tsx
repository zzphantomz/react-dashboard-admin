import { Typography, Box, useTheme} from "@mui/material";
import {tokens} from "../../theme";

interface IHeader {
  title:string;
  subtitle:string;
}

const Header = ({title, subtitle}:IHeader) => {
  const themes = useTheme()
  const colors = tokens(themes.palette.mode)
  return (
    <Box mb="30px">
      <Typography
        variant='h2'
        color = {colors.grey["100"]}
        fontWeight="bold"
        sx ={{
          mb:"5px"
        }}>
        {title}
      </Typography>
      <Typography
        variant='h2'
        color = {colors.grey["400"]}>
        {subtitle}
      </Typography>
    </Box>
  )
}

export default Header
