import { Button, TextField } from "@mui/material";
import Layout from "../components/Layout";
import { SiDarkreader } from "react-icons/si";

export default function Mui() {
  return (
    <Layout>
    <div className="w-full flex justify-center py-16">
      <div className="w-[1200px] flex flex-col space-y-4">
        <h1>Mui test</h1>
        <Button variant="text">버튼</Button>
        <Button variant="contained" color="success">버튼</Button>
        <Button variant="outlined">버튼</Button>
        <Button><SiDarkreader />delete</Button>
        <TextField id="outlined-basic" label="이름" variant="outlined" />
        <TextField id="filled-basic" label="이메일" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        
      </div>
    </div>
    </Layout>
  )
}
