# React useEffect Cleanup Function Not Called on Unmount

This repository demonstrates a common React bug involving the `useEffect` hook's cleanup function not being called when a component unmounts. The issue stems from improper handling of the dependency array or unexpected component unmounting scenarios.

## Bug Description
The provided `MyComponent` uses `useEffect` to log the current count and perform cleanup.  However, under certain conditions (such as rapid component updates or unmounting before the cleanup function can execute), the cleanup function might not run as expected, leading to potential memory leaks or unexpected behavior.

## Bug Solution
The solution focuses on correctly managing the `useEffect` hook's dependency array and ensuring the cleanup function is always executed when the component unmounts.  This often involves checking for component unmounting before performing cleanup tasks.