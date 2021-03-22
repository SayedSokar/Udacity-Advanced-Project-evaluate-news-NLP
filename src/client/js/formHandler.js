//-------// imports:---------------------------------//
import { validURL } from "./validURL"
//-----------------------------------------------------//
//--------------Variables------------------------------//
const fetch = require("node-fetch");
//-----------------------------------------------------//
async function handleSubmit(e) {
    e.preventDefault()
    ///alert('here')
    let url = document.getElementById('url').value

    if(Client.validURL(url))
    {
        //------------send to backend server
        post("http://localhost:8081/check",{url: url}).then(data =>{
            document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}`;
            document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
            document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
            document.getElementById("irony").innerHTML = `irony: ${data.irony}`;
        })
      
       
    }else{ 
        alert(url + ': is not Valid url')
        console.log("Error!!!! in URL format ")
    }
}
//-----------------END of FUNCTIONS-------------------------//

const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {

        return await response.json()

    } catch (error) {

        console.log('error !!!' , error)
    }
}

export { handleSubmit }
