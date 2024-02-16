import axios from 'axios'
import { useState } from 'react';

function Show() {
    const[res, setRes] = useState(null);

    if(res == null) {
        axios.get('http://localhost:8081/showall', {

        }).then((responce)=>{
            console.log(responce.data);
            setRes(responce.data);
        })
    }

    return(
        <div>
            {JSON.stringify(res)}
        </div>
    );
}

export default Show;