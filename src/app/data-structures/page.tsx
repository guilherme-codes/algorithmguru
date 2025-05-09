import Image from "next/image";
import NavButtons from "../ui/navButtons";

export default function DataStructures() {
  return (
    <>
        <h1 className="font-bold text-5xl light:text-gray-700 mb-6">What's a Data Structure?</h1>
        <p>
          A data structure is a way of organizing and storing a set of data so that we can efficiently access and manipulate it. The chosen data structure will determine how the data is related, as well as provide methods for us to manipulate such data.
        </p>
        <p>
          Think of a supermarket where different products are organized in different ways. Some products are arranged on shelves according to category (hygiene, food, cleaning), others are kept in freezers (meat and dairy), while stocked products are organized in boxes and pallets to be displayed as needed. Some of these products are placed on higher shelves and require forklifts to access, while others can be accessed directly.
        </p>
        <p>You can think of data structures in a similar way.</p>

        <Image 
          src="/img/supermarket.webp" 
          alt="Supermarket" 
          className="w-full h-auto mb-6" 
          width={807}
          height={807}
        />

        <h2 className="font-bold text-3xl light:text-gray-700 my-6">
          <i className="mr-2 fa fa-hashtag" aria-hidden="true"></i>
          How Are Data Structures Implemented?
        </h2>
        <p>
        Although they follow a similar pattern, different programming languages have different ways of implementing data structures. Some languages already have various data structures implemented by default.
        By combining primitive types such as integers, booleans, and chars with manipulation functions, we can create more complex data structures that allow operations like searching, sorting, insertion, and removal.
        </p>

        <h2 className="font-bold text-3xl light:text-gray-700 my-6">
          <i className="mr-2 fa fa-hashtag" aria-hidden="true"></i>
          Linear and Non-Linear Data Structures
        </h2>

        <h3 className="font-bold text-1xl light:text-gray-700">Linear</h3>
        <p>
        These are structures where data is organized in a line, and items are inserted one after another in sequence. Some linear structures include Arrays, Linked Lists, Queues, and Stacks.
        </p>

        <h3 className="font-bold text-1xl light:text-gray-700">Non-Linear</h3>
        <p>
          These structures are not organized sequentially, and their organization depends on factors other than the order of insertion. Examples of non-linear structures include Trees and Graphs.
        </p>

        <h2 className="font-bold text-3xl light:text-gray-700 my-6">
          <i className="mr-2 fa fa-hashtag" aria-hidden="true"></i>
          Common Types of Data Structures
        </h2>

        <p>
          There are numerous data structures that can be used to solve a wide range of problems. Some of the most common data structures include:
        </p>

        <ul className="ml-10 list-disc">
          <li>Arrays</li>
          <li>Linked Lists</li>
          <li>Stacks</li>
          <li>Queues</li>
          <li>Trees</li>
          <li>Graphs</li>
          <li>Hash Tables</li>
          <li>Dictionaries</li>
          <li>Heaps</li>
        </ul>

        <NavButtons />
    </>
  )
}