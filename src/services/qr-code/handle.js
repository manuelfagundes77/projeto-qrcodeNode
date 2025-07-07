import qr from "qrcode-terminal"
import chalk from "chalk"

async function handle(err, result) {
   if (err) {
      console.log("error aplication");
      return
   } 

   const  isSmall =  result.type == 2


   qr.generate(result.link, {small: isSmall}, (qrCode) => {
      console.log(chalk.green("qrCode gerado com sucesso"));
      console.log(qrCode);
   })


   }


   export default handle