import chalk from "chalk";

async function handle(number) {
   let characters = []
   let password = ""

   if(process.env.UPPERCASE_LETTERS == "true"){
      characters.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
   }

   if(process.env.LOWERCASE_LETTERS == "true"){
      characters.push(... "abcdefghijklmnopqrstuvwxyz");
   }

   if(process.env.NUMBERS == "true"){
      characters.push(... "0123456789");
   }

   if(process.env.SPECIAL_CHARACTERS == "true"){
      characters.push(... "!@#$%&*");
   }


   const length = number

   for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * characters.length);
      password += characters[index];
   }

   //console.log(chalk.green(password));

   return password
}

export default handle