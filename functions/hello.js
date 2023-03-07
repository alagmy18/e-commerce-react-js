

// domain/.netlify/functions/hello  


const items = [ 
    {id:1,name:"ahmed"},
    {id:1,name:"eslam"}

]

exports.handler  = async function(event,context) {
     return {
        statusCode:200,
        body:"hello "
     }
}