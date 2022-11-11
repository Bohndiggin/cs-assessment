# TEST DATA
1. Results for the extraLargeArray
    - insert 918.6714 ms
    - append 3.1741 ms

2. Results for the largeArray
    - insert 9.0876 ms
    - append 636.7 μs

3. Results for the mediumArray
    - insert 193.5 μs
    - append 246.7 μs

4. Results for the smallArray
    - insert 46.8 μs
    - append 151.1 μs

5. Results for the tinyArray
    - insert 34.9 μs
    - append 130.9 μs

# CONCLUSION

To properly test these two functions, I would need more test cases and passes. But! Based on what I have, it seems that insert is at least O(n^2). Append shows some interesting behaviour around the smaller end, but is mostly O(log n). Insert must be doing a for loop to change indexes.