//JS execution context
/*
if we execute a code the global execution context is created
1. global execution context
->The global execution context is the top-level context in a JavaScript program. It represents the global scope, encompassing the entire program and all its components. This context sets the stage for the entire code execution process and plays a pivotal role in managing global variables and functions.
2. functional execution context
3. eval execution context - use in mongooes

how the code is execute
-----------------------
1.memory creation phase -- memory allocation
2.execution phase -- execute operation 
*/
let val1=2
let val2=9
function AddTwoNo(num1,num2){
    let result1=(num1+num2);
     return result1
 }
 let res1=AddTwoNo(8,9)
 let res2=AddTwoNo(val1,val2)
 console.log(res1);
 console.log(res2);
 /*
 steps to run this code
 -----------------------
 1. global execution context
 2. memory phase -- val1 ->undefind ,val1 ->undefind ,addTwoNum -> defination initialize , res1 ->undefind ,res2->undefin 
 3. execution phase -- val1<-2 , val2<-9 , 
 addTwoNo -> this time a new variable envionment and execution phaase created. this is called new execution context . 
 1. memory phase : val1 ->undefind ,val1 ->undefind , rsult1->unefind 
 2. execution control : unm1->2 num2->9 result1-->11 return in glodal execution context
 */ 

 /*
 call stack
 -----------
 stack diagram
 +-----------------------+
|      Function C       |
+-----------------------+
|      Function B       |
+-----------------------+
|      Function A       |
+-----------------------+
In the above diagram, imagine we have three functions: A calls B, and B calls C. When the program starts executing, the call stack is empty. Then, as function A is called, its frame is pushed onto the stack. When function A calls function B, the frame for function B is pushed onto the stack on top of function A's frame. Similarly, when function B calls function C, the frame for function C is pushed onto the stack.

As each function completes its execution, its frame is popped(LIFO) off the stack, returning control back to the calling function. So, when function C completes execution, its frame is popped off, then function B's frame, and finally function A's frame. This leaves the stack empty again, indicating that the program has finished executing.
 */