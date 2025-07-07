import  chalk from "chalk";   
import handle from "./handle.js";
import prompt from "prompt";
import promptPassword from "../../prompts/prompt-password.js";


async function createPassword() {
   

    

  prompt.get(promptPassword, async (err, result) => {
    if (err) {
      console.log(chalk.red("Erro ao receber input."));
      return;
    }

    const number = parseInt(result.number);
    const password = await handle(number);

    console.log(chalk.green("Senha gerada com sucesso:"));
    console.log(chalk.cyan(password));
  });

  prompt.start();

   
}

export default createPassword