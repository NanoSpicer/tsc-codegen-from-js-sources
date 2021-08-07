import { FREE_MEMORY, jsdocMultiply, noJsdocMultiply } from "./javascriptSrc/lib"
import { Sample } from "./sample"

console.log(
  jsdocMultiply(2, 2),
  noJsdocMultiply(2, 2),
  FREE_MEMORY
)


for (const item of [1, 2, 3, 4]) {
  const samp: Sample = { id: item, name: `name–${item}` }
  console.log(`Hello world from typescript! ${samp}`)
}
