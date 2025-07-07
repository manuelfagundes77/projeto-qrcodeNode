import chalk from "chalk";

const promptQRCode = [
   {
      name: "link",
      description: chalk.yellow("Digite o link para gerar o QRCode"),
      required: true
   },
   {
      name: "type",
      description: chalk.yellow("escolha entre o tipo (1 - normal ou 2 - terminal"),
      pattern: /^[1-2]+$/,
      message: chalk.red("escolha apenas entre 1 e 2"),
      required: true
   }
]

export default promptQRCode