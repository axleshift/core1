/**
 * © 2025 Melvin Jones Repol & its contributors . All rights reserved.
 * This project is licensed under the MIT License with Commons Clause.
*/
import{r as e,j as s}from"./CbKKHx2O.js";import"./D9QqU1Un.js";const r=()=>{const[r,t]=e.useState("");return e.useEffect((()=>{(async()=>{try{const e=await axios.get("/sec/management/server-logs");t(e.data)}catch(e){}})()}),[]),s.jsxs("div",{children:[s.jsx("h1",{children:"Server Logs"}),s.jsx("pre",{style:{whiteSpace:"pre-wrap",backgroundColor:"#f4f4f4",padding:"10px"},children:r})]})};export{r as default};
