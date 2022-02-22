function trim(){
    let demoString1 = "     Srushti    "
    console.log(demoString1.trim())
}
function changetoLowerCase(){
    let demoString2 = "Srushti Kokare"
    console.log(demoString2.toLowerCase())
    
}
function changetoUpperCase(){
    let demoString3="Srushti Kokare"
    console.log(demoString3.toUpperCase())
}
module.exports.trim=trim
module.exports.changetoLowerCase=changetoLowerCase
module.exports.changetoUpperCase=changetoUpperCase
