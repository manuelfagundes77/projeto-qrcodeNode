import chalk from "chalk";

const promptPassword = [
   
   {
      name: "number",
      description: chalk.yellow("digite o numero de caracters da senha desejada:  (entre 1 a 12"),
      pattern: /^(?:[1-9]|1[0-2])$/,
      message: chalk.red("escolha apenas entre 1 e 12"),
      required: true
   }
]

export default promptPassword