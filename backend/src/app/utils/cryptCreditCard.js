import crypto from 'crypto';
import {cryptConfig} from '../../config/config'

const algorithm = "aes-256-cbc"; 
const iv = crypto.randomBytes(16);
const secretKey = cryptConfig.secretkey;

export const encrypt = (creditCard) =>
{
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(creditCard), cipher.final()]);
    return encrypted.toString('hex').concat('.',iv.toString('hex'));
}

export const decrypt = (creditCardHash) =>
{
    let iv = creditCardHash.split('.')[1];
    let content = creditCardHash.split('.')[0];

    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(iv, 'hex'));
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(content, 'hex')), decipher.final()]);

    return decrpyted.toString();
} 