var Acc_SID = "AC94b16a19a5910ef8592cae368bef6e55"
var auth_Token = 'a87475ee7282bd4797ff93f1cf7478ce'
var PhoneNumber = "+16562187722";
const client = require('twilio')(Acc_SID,auth_Token);
async function sendSms(){
    try {
        let result = await client.messages.create({body :`Thank you for registering on Fashion HUB `,from:PhoneNumber,to:"+91 94163 24294"})
        console.log(result);
    } catch (error) {
        console.log(error,"message not sent ");
    }
}
sendSms()
