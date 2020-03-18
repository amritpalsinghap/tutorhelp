import axios from 'axios';

export const HTTP =axios.create({
    basURL:'http://localhost:3000',
    header:{
        "Content-Type":"application/json"
    }
})