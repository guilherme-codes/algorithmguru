import getCodeSamples from "@/app/service/get-languages";
import Code from "@/app/ui/code/code";
import Image from "next/image";

export default async function Arrays() {
  const codeSamples = await getCodeSamples("data-structures", "arrays");

  return (
    <>
      <h1 className="font-bold text-5xl light:text-gray-700 mb-6">Arrays</h1>
      <p>
        An array is a fundamental data structure that stores a collection of
        elements in a contiguous memory location. Each element in an array can
        be accessed directly by its index, making it one of the most efficient
        and widely used data structures in programming.
      </p>

      <p>
        Imagine an array like a row of lockers in a school hallway. Each locker
        (element) has a unique number (index), and you can directly access any
        locker by knowing its number. The lockers are arranged sequentially, and
        each can store a specific type of item.
      </p>

      <div className="flex justify-center m-10">
        <Image
          src="/img/array-visualization.webp"
          width={0}
          height={0}
          sizes="100vw"
          alt="Array Visualization"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <h2 className="font-bold text-3xl light:text-gray-700 my-6">
        <i className="mr-2 fa fa-hashtag" aria-hidden="true"></i>
        Key Characteristics
      </h2>

      <p>
        Arrays have several important characteristics that define their behavior
        and usage:
      </p>

      <ul className="list-disc list-inside list">
        <li>
          <strong>Fixed Size:</strong> In many languages, arrays have a fixed
          size once created, though dynamic arrays can grow or shrink.
        </li>
        <li>
          <strong>Zero-Indexed:</strong> Most programming languages start array
          indexing at 0, so the first element is at index 0.
        </li>
        <li>
          <strong>Homogeneous:</strong> Arrays typically store elements of the
          same data type.
        </li>
        <li>
          <strong>Contiguous Memory:</strong> Elements are stored in adjacent
          memory locations for efficient access.
        </li>
        <li>
          <strong>Random Access:</strong> Any element can be accessed directly
          using its index in constant time O(1).
        </li>
      </ul>

      <div className="flex justify-center m-10">
        <Image
          src="/img/array-memory.webp"
          width={0}
          height={0}
          sizes="100vw"
          alt="Array Memory Layout"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <h2 className="font-bold text-3xl light:text-gray-700 my-6">
        <i className="mr-2 fa fa-hashtag" aria-hidden="true"></i>
        Basic Operations
      </h2>

      <p>Arrays support several fundamental operations:</p>

      <ul className="list-disc list-inside list">
        <li>
          <strong>Insertion:</strong> Adding an element at a specific index or
          at the end of the array.
        </li>
        <li>
          <strong>Deletion:</strong> Removing an element from a specific index.
        </li>
        <li>
          <strong>Traversal:</strong> Accessing each element of the array
          sequentially.
        </li>
        <li>
          <strong>Search:</strong> Finding the index of a specific element.
        </li>
        <li>
          <strong>Update:</strong> Changing the value of an element at a given
          index.
        </li>
      </ul>

      <h2 className="font-bold text-3xl light:text-gray-700 my-6">
        <i className="mr-2 fa fa-hashtag" aria-hidden="true"></i>
        Performance Characteristics
      </h2>

      <ul className="list-disc list-inside list">
        <li>
          <strong>Access:</strong> O(1) - Constant time to access any element by
          index
        </li>
        <li>
          <strong>Insertion/Deletion at End:</strong> O(1) - Constant time
        </li>
        <li>
          <strong>Insertion/Deletion at Middle:</strong> O(n) - Linear time,
          requires shifting elements
        </li>
        <li>
          <strong>Search (Unsorted):</strong> O(n) - Linear search
        </li>
        <li>
          <strong>Search (Sorted):</strong> O(log n) - Binary search possible
        </li>
      </ul>

      <h2 className="font-bold text-3xl light:text-gray-700 my-6">
        <i className="mr-2 fa fa-hashtag" aria-hidden="true"></i>
        Use Cases
      </h2>

      <ul className="list-disc list-inside list">
        <li>
          <strong>Storing Collections:</strong> Lists of numbers, strings,
          objects
        </li>
        <li>
          <strong>Matrix and Table Representations:</strong> 2D and
          multidimensional data
        </li>
        <li>
          <strong>Buffers:</strong> Temporary storage in graphics and audio
          processing
        </li>
        <li>
          <strong>Caching:</strong> Quick access to recently used data
        </li>
        <li>
          <strong>Algorithm Implementations:</strong> Sorting, searching, and
          many other algorithms
        </li>
      </ul>

      <h2 className="font-bold text-3xl light:text-gray-700 my-6 mt-10">
        <i className="mr-2 fa fa-code" aria-hidden="true"></i>
        Code Samples
      </h2>

      <Code codeSamples={codeSamples} />
    </>
  );
}
