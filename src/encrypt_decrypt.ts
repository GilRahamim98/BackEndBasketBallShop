/* eslint-disable prettier/prettier */
import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { createDecipheriv } from 'crypto';
import * as crypto from 'crypto'
// const iv = randomBytes(16);
// const algorithm = 'aes-256-ctr'; 
// const password = 'Password used to generate key';
// async function getKey(){
//   return await promisify(scrypt)(password, 'salt', 32) as Buffer
// }
// const key = getKey() ;

// export async function encrypt(text:string):Promise<string>{
//   const cipher = createCipheriv(algorithm, await key, iv);
//   const textToEncrypt = text;
//   let encryptedText = cipher.update(textToEncrypt,'utf-8','hex')
//   encryptedText+=cipher.final('hex')
//   return encryptedText;
// }
// export async function decrypt(text) {
  
//   const decipher = createDecipheriv(algorithm, await key, iv);
//   let decryptedText = decipher.update(text,'hex','utf-8')
//   decryptedText+=decipher.final('utf8')
  
//   return decryptedText
// }

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';

export const encrypt = (text) => {

    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

export const decrypt = (hash) => {
  
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.encryptedId.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.encryptedId.content, 'hex')), decipher.final()]);
    

    return decrpyted.toString();
};

// module.exports = {
//     encrypt,
//     decrypt
// };
