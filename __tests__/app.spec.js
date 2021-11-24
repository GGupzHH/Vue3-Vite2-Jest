// import app from '../src/App.vue'

function sum(a, b) {
  return a + b;
}


test('adds 1 + 2 to equal 3', () => {
  // console.log(app)
  expect(sum(1, 2)).toBe(3);
})
