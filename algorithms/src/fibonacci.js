const fibonacci = (num) => {
  if (num <= 1) return num
  return fibonacci(num-2) + fibonacci(num-1)
}

module.exports = fibonacci
