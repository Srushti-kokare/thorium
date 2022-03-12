let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//Q1:
let getDistrictId = async function(req,res){
    try{
 let district= req.query.DistrictId
 let date=req.query.date
 let options={
     method: "get",
     url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
 }
  let result=await axios(options)
  console.log(result)
  res.status(200).send({msg:result.data})
    }
    catch(err){
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};

//Q2:1:
let getLondonTemp = async function(req,res){
    try{
        let city=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObj =[]
        for(let i=0;i<city.length;i++){
            let obj ={city:city[i]}
            let resp =await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=5cb4ec3939f78c084a574c278e7f2f58 `)
            console.log(resp.data.main.temp) 
            obj.temp=resp.data.main.temp
            cityObj.push(obj)
        }
        let sorted=cityObj.sort(function (a,b) {return a.temp-b.temp})
        console.log(sorted)
        res.status(200).send({status:true, data:sorted})
        }
    catch(err){
        console.log(err)
        res.status(500).send({ status:false, msg:"server error" })
    }
};

//Q3:
let memHandler=async function(req,res){
    try{
        let id=req.query.template_id
        let text=req.query.text0
        let text1=req.query.text1
        let name=req.query.username
        let password=req.query.password
        let option={
            method:'post',
            url:`https://api.imgflip.com/caption_image?template_id=${id}&text0=${text}&text1=${text1}&username=${name}&username=${name}&password=${password}`
        }
        let result= await axios(option)
        res.status(200).send({data:result.data})
    }
    catch(err){
        console.log(err)
        res.status(500).send({ status:false, msg:"server error" })
    }
}



module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getDistrictId=getDistrictId
module.exports.getLondonTemp = getLondonTemp
module.exports.memHandler = memHandler
