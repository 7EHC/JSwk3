let product={productId:1, productName:'Pen', price: 50} 
//collection of properties //one property contains key and value
console.log(product)
console.log(typeof product)

let studentIds=[123, 555, 666]
console.log(typeof studentIds)
console.log(studentIds.length)
console.log(studentIds)

let str = 'hello, world'
str = str.toUpperCase() //return 'HELLO'
console.log(str) // 'hello'

let unknownValue = null
console.log(typeof unknownValue)
if(unknownValue === null) console.log('variable \nis null')

for(num=1;num<=5;num++){
    console.log(num)
}
console.log('----')
console.log(num)

let value=3
function doSomething(x){
    value=value+x
    console.log(value)
}
doSomething(10)

let str='JavaScript'
console.log(str.length)
console.log(str.charAt(0))
console.log(str.charAt(str.length-1))

let op = 'multiply'
let value = `Operator: ${op}: The result of 5 * 4 = ${5*4} and 5 + 4 = ${5+4}`
console.log(value)

let items=[1, 2]
if(items) console.log('array is empty')
// if(boolean) true statement else false statement

let result = Number('4')*5
console.log(result)