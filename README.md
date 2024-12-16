# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications involving the `useEffect` hook: creating an infinite loop by incorrectly specifying dependencies.

## Problem
The `MyComponent` function uses `useEffect` to update the `count` state.  However, the dependency array is empty (`[]`), causing the effect to run after every render. This leads to a continuous increment of the `count`, resulting in an infinite loop and potentially crashing the application.

## Solution
The solution is to correctly specify the dependencies in the `useEffect` hook. In this case, the effect should only run when the `count` changes (although this example should not use `useEffect` at all). If no state or prop changes are required, you would use a empty array, `[]`.

## How to Reproduce
Clone this repository and run `npm start` to see the infinite loop error in action.