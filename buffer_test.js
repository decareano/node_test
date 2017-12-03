const buf1 = Buffer.alloc(10, 1);
console.log(buf1);

const buf = Buffer.from('hello you', 'ascii');

console.log(buf.toString('binary'));