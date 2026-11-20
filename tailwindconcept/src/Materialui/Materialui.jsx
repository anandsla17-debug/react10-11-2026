import { Box, Button, Container, FormLabel, TextField, Typography } from "@mui/material"
function Materialui(){
    return(
        <Box className="p-1" sx={{border:"2px solid yellow",marginTop:"10px"}}>
        <Typography variant="h4" sx={{bgcolor:"tomato",textAlign:"center"}}>Material Ui</Typography>

        {/* <Button  variant="contained" sx={{borderRadius:"20px",padding:"10px"}}>Submit</Button> */}
        <Container sx={{
            display:"flex",
            flexDirection:"column",
            border:"2px solid black",
            width:"300px",
            marginTop:"10px",
            marginBottom:"10px",
            padding:"5px",
            gap:"5px",
            borderRadius:"10px"
        }} >
            <Typography variant="h5" sx={{textAlign:"center"}}>Login Form</Typography>

            <TextField variant="outlined" label="name" placeholder="Enter your name"></TextField>
            <TextField variant="outlined" label="password" placeholder="Enter your password" ></TextField>
            <Button variant="contained" sx={{bgcolor:"orange"}}>Login</Button>
        </Container>
        
        </ Box>
    )
}
export default Materialui;