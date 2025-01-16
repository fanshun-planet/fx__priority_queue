## fx__priority_queue

> Priority Queue Mini Library (JS/TS) 

<!-- [![Build Status](https://travis-ci.org/your-repo-url.svg?branch=master)](https://travis-ci.org/your-repo-url) -->
[![npm version](https://badge.fury.io/js/priority-queue-data-structure-lib.svg)](https://github.com/fanshun-planet/fx__priority_queue)
[![Documentation](https://docs.rs/priority-queue-data-structure-lib/badge.svg)](https://github.com/fanshun-planet/fx__priority_queue)

### Install 安装

You can download and install through package management tools such as "npm", "yarn", "pnpm", etc

```bash
npm i fx__priority_queue
```

### Example 使用示例

```TypeScript
import { PriorityQueue } from 'fx__priority_queue';

/**
 * Example 1: Directly initialize the queue 
 * (passing in the comparison function and the array of elements that need to be initialized).
 * 示例1 直接初始化队列（传入 比较函数及需要初始化的元素数组）
 */
const elements: number[] = [93,1,59,62,85,3,5,6,19];
const pq = new PriorityQueue((a, b) => a > b, elements);
/**
 * Or use parameters in the form of objects.
 * 或者使用对象形式的参数进行初始化
 */
// const pq = new PriorityQueue({
//     compareFn: (a, b) => a > b,
//     elements: [93,1,59,62,85,3,5,6,19],
// });

/**
 * Example 2: Only pass in custom comparison function.
 * 示例2 仅传入自定义的比较函数
 */
const pq = new PriorityQueue((a, b) => a < b);
pq.enqueue(10);
pq.enqueue(7);

const el = pq.dequeue(); // 7
const size = pq.size(); // 1

/**
 * Example 3: For complex data structures, 
 * custom weight fields (such as priority, order,...) can be used And its value.
 * 示例3 对于复杂数据结构，可以根据自定义权重字段（如priority, order, ..）的值
 */
const pq = new PriorityQueue((a, b) => a.priority < b.priority);
// or
// const pq = new PriorityQueue((a, b) => a.priority > b.priority);
pq.enqueue({ a: '张三', priority: 3 });
pq.enqueue({ a: '李四', priority: 2 });
pq.enqueue({ a: '王五', priority: 1 });

const first = pq.top() 
console.log('first element: ', first); // first element: { a: '王五', priority: 1 }

while (!pq.isEmpty()) {
    const el = pq.dequeue();
    console.log('el: ', el);
    // 依次输出：
    // el:  {a: '王五', priority: 1}
    // el:  {a: '李四', priority: 2}
    // el:  {a: '张三', priority: 3}
}
```
