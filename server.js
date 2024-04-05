import App from "./App.js";


App.listen(process.env.PORT,()=>{

        console.log(`Server is runnning on Port ${process.env.PORT}`);
        App.get('/',(req,res)=>{
                res.send("Heloooo Gues....");
        })
})