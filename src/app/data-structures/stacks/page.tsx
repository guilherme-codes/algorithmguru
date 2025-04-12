import getLanguages from "@/app/service/get-languages";
import Code from "@/app/ui/code/code";

export default async function Stacks() {
  const languages = await getLanguages("data-structures", "stacks");

  return (
    <>
      <h1 className="font-bold text-5xl text-gray-700 mb-6">Stacks</h1>
      <p>
        A stack is a linear data structure that follows the Last In First Out (LIFO) principle. This means that the last element added to the stack will be the first one to be removed. You can think of a stack as a collection of items arranged in a vertical manner, where you can only add or remove items from the top.
      </p>

      <p>
        Imagine you are at home, and every plate you use for eating is placed on a stack in your sink, with each plate being placed on top of the previous one. Eventually, you decide to load them all into the dishwasher, removing them one by one, with the last plate used always being the first one to go into the dishwasher. As you remove each plate, you can check whether the stack is empty or see the total number of plates still left.
      </p>

      <div className="flex justify-center">
        <img src="/img/stacks.webp" alt="Stack" className="w-[80%] h-auto mb-6" />
      </div>

      <h2 className="font-bold text-3xl text-gray-700 my-6">
        <i className="mr-2 fa fa-hashtag" aria-hidden="true"></i>
        How to Implement?
      </h2>

      <p>
        There are several ways to implement a stack, but one of the most common is using an array or a linked list. 
        Stacks can have fixed or dynamic sizes, depending on the implementation. The basic implementation of a stack involves the following operations:
        </p>

        <ul className="list-disc list-inside list">
          <li><strong>Push:</strong> Adds an item to the top of the stack. If the stack is full, it may be necessary to increase its size.</li>
          <li><strong>Pop:</strong> Removes the top item from the stack and returns it. If the stack is empty, it may return a null value or throw an exception.</li>
          <li><strong>Peek:</strong> Returns the top item of the stack without removing it. This allows checking the last added item.</li>
          <li><strong>isEmpty:</strong> Checks if the stack is empty. This is useful to prevent operations on an empty stack.</li>
          <li><strong>isFull:</strong> Checks if the stack is full. This is important to avoid stack overflows.</li>
          <li><strong>Size:</strong> Returns the number of items in the stack. This can be useful for monitoring stack usage.</li>
          <li><strong>Clear:</strong> Removes all items from the stack, returning it to its initial state.</li>
        </ul>

      <div className="flex justify-center">
        <img src="/img/stack-diagram.webp" alt="Stack Implementation" className="w-[500px] h-auto mb-6" />
      </div>

      <h2 className="font-bold text-3xl text-gray-700 my-6">
        <i className="mr-2 fa fa-hashtag" aria-hidden="true"></i>
        Use Cases
      </h2>
      <p>
        Stacks are used in various applications, including:
      </p>

        <ul className="list-disc list-inside list">
          <li><strong>Undo/Redo:</strong> In text editors, stacks are used to implement the undo and redo functionality.</li>
          <li><strong>Function Calls:</strong> Stacks are used to manage function calls and local variables in programming languages.</li>
          <li><strong>Mathematical Expressions:</strong> Stacks are used to evaluate mathematical expressions, such as converting infix notation to postfix notation.</li>
          <li><strong>Browser Navigation:</strong> Web browsers use stacks to store browsing history, allowing users to navigate back to previously visited pages.</li>
        </ul>


      <h2 className="font-bold text-3xl text-gray-700 my-6 mt-10">
        <i className="mr-2 fa fa-code" aria-hidden="true"></i>
        Code Samples
      </h2>

      <Code languages={languages} />

    </>
  )
}