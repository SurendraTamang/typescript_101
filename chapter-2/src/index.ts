console.log("Learning TypesScript Again.")
// primitive types
let a: number = 4
console.log(a, typeof a)
let b: string = "Surendra"
console.log(b, typeof b)
let d: number | string = a + b // Union
console.log(d, typeof d)
let isTypeScriptGood: boolean = true
console.log(isTypeScriptGood, typeof isTypeScriptGood)
let mySalary : bigint = 1000000000000000000n
console.log(mySalary, typeof mySalary)
let x : Symbol = Symbol('x')
console.log(x, typeof x)

// builtin types
type Age = number

let age : Age = 30

// 




 