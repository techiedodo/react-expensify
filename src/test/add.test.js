const add = (a,b) => a+b;
const generateGreeting = (name) => `Hello ${name}!`;

test('should add two numbers', ()=>{
  const result = add(3,4);
  expect(result).toBe(7);
});

test('should return string interpolation', ()=>{
  const phrase = generateGreeting('Kasturi');
  expect(phrase).toBe(`Hello Kasturi!`);
});
