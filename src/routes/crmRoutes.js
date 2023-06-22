import{runInNewContext} from "vm";
import { addNewContact,getContacts } from "../controllers/crmControllers";

const routes=(app)=>{
    app.route('/contact')
    .get((req,res,next)=>{
        //middelware
        console.log(`request de : ${req.originalUrl}`)
        
        console.log(`request type: ${req.method}`)
        next();
    },(req,res,next)=>{
        res.send('demande get avec succe');
    })
    .post(addNewContact);
    //.post((req,res)=>
    //res.send('demande post avec succe'))

    app.route('/contact/:contactId')
    .put((req,res)=>
    res.send('demande put avec succe'))
    .delete((req,res)=>
    res.send('demande delete avec succe'))
    }
    export default routes;