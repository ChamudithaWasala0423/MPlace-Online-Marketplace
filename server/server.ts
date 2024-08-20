// npx tsc --init 
import {app} from './app';
require('dotenv').config();


//create server
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);

});