
function generateRandomName(prefix = 'file', extension = '.txt') {
  const randomNum = Math.floor(100 + Math.random() * 900); // random 3-digit number
  return `${prefix}_${randomNum}${extension.startsWith('.') ? extension : '.' + extension}`;
}
module.exports = { generateRandomName };