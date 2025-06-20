const fs = require('fs');
const regedit_rce = fs.readFileSync('./memo_regedit.exe');  // binary

exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/octet-stream' },
    body: regedit_rce.toString('base64'),
    isBase64Encoded: true
  };
};

console.log(regedit_rce.length)