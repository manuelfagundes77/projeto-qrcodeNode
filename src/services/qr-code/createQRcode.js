import prompt from "prompt"
import promptQRCode from "../../prompts/prompt-qrcode.js"
import handle from "./handle.js";

async function createQRcode() {
   prompt.get(promptQRCode, handle );

   prompt.start();
}

export default createQRcode