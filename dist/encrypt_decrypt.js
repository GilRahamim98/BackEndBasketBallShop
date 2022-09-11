"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const crypto = require("crypto");
const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const encrypt = (text) => {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};
exports.encrypt = encrypt;
const decrypt = (hash) => {
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.encryptedId.iv, 'hex'));
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.encryptedId.content, 'hex')), decipher.final()]);
    return decrpyted.toString();
};
exports.decrypt = decrypt;
//# sourceMappingURL=encrypt_decrypt.js.map