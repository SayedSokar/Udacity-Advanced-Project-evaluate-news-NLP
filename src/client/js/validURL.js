//----- option 1 to validate the URL--------//

// var validUrl = require('valid-url')
// function validUrl(str)
// {
//     if(validUrl.isHttpsUri(str))
//     {
//         return true
//     }else{
//         return false
//     }
// }
//----------------------------------------//

//------------option 2----------------------//
function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}
//----------------------------------------//

// export for external use
export { validURL }
