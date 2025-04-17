const goSample = `
package main

import (
	"fmt"
)

// Stack struct using a slice
type Stack struct {
	items []int
}

// Push adds an item to the top of the stack
func (s *Stack) Push(item int) {
	s.items = append(s.items, item)
}

// Pop removes and returns the top item
func (s *Stack) Pop() int {
	if s.IsEmpty() {
		fmt.Println("Stack underflow!")
		return -1
	}
	// Get the last item
	last := s.items[len(s.items)-1]
	// Remove it from the slice
	s.items = s.items[:len(s.items)-1]
	return last
}

// Peek returns the top item without removing it
func (s *Stack) Peek() int {
	if s.IsEmpty() {
		fmt.Println("Stack is empty!")
		return -1
	}
	return s.items[len(s.items)-1]
}

// IsEmpty checks if the stack is empty
func (s *Stack) IsEmpty() bool {
	return len(s.items) == 0
}

func main() {
	var stack Stack

	stack.Push(10)
	stack.Push(20)
	stack.Push(30)

	fmt.Println("Top:", stack.Peek()) // 30
	fmt.Println("Pop:", stack.Pop())  // 30
	fmt.Println("Pop:", stack.Pop())  // 20
	fmt.Println("IsEmpty:", stack.IsEmpty()) // false
	fmt.Println("Pop:", stack.Pop())  // 10
	fmt.Println("IsEmpty:", stack.IsEmpty()) // true
}
`

export default goSample;