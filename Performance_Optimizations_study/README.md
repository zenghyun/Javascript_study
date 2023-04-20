# Module Content
- What is "Performance"
- Measuring & Analyzing Performance
- Optimization Ideas
- Further Resources

<br>

## What is Performance?

<br>

### JavaScript Execution
   - Startup Time ( Browser-side JS )
     - How fast does the script load (and execute)? 
  
  <br>

   - Runtime Performance ( All JS )
     - How much "work" does the script do? 
     - How much memory is occupied? 

<br>

## Measuring & Analyzing Performance 

- performance.now() 
    - Add this to your code (during development / testing) and check the execution time (difference) for certain operations 

- Browser DevTools
    - Use the many features of browser dev tools to detect unnecessary code executions, http requests and measure execution time + memory leaks 

- jsperf.com
  - Compare alternative code snippets and measure performance 

- webpagetest.com 
  - Test your entire (live) web page to detect optimizaion potential


[Performance features reference](https://developer.chrome.com/docs/devtools/performance/reference/)

[Optimize JavaScript execution](https://web.dev/optimize-javascript-execution/)

