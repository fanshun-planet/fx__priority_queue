# Priority Queue Library (JavaScript) - 基于JavaScript的优先队列的实现

<!-- [![Build Status](https://travis-ci.org/your-repo-url.svg?branch=master)](https://travis-ci.org/your-repo-url) -->
[![npm version](https://badge.fury.io/js/priority-queue-data-structure-lib.svg)](https://github.com/fanshun-planet/fx__priority_queue)
[![Documentation](https://docs.rs/priority-queue-data-structure-lib/badge.svg)](https://github.com/fanshun-planet/fx__priority_queue)

## 安装

要使用 `fx__priority_queue`，可以通过 npm 来安装（或其他包管理工具，如 pnpm 等）：

```bash
npm i fx__priority_queue
```

## 使用示例

```TypeScript
import { PriorityQueue } from 'fx__priority_queue';

/**
 * 方式一 直接初始化队列（传入 比较函数及需要初始化的元素数组）
 */
const elements: number[] = [93,1,59,62,85,3,5,6,19];
const pq = new PriorityQueue((a, b) => a > b, elements);

/**
 * 方式二 仅传入自定义的比较函数
 */
const pq = new PriorityQueue((a, b) => a < b);
pq.enqueue(10);
pq.enqueue(7);

const el = pq.dequeue(); // 7
const size = pq.size(); // 1
```
