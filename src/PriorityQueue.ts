/**
 * 优先队列
 * @class
 */
class PriorityQueue<T = number> {
  private queue: T[];
  private compare: (a: T, b: T) => boolean;

  /**
   * @constructor
   * @param compareFn - 自定义的比较函数
   * @param elements - 可选的 元素数组（用于初始化）
   */
  constructor(compareFn: (a: T, b: T) => boolean, elements?: T[]) {
    this.queue = [];
    this.compare = compareFn;
    this.initQueue(elements);
  }

  /**
   * 根据构造器传入的元素数组，初始化队列
   * @param arr
   * @returns
   */
  private initQueue(arr?: T[]) {
    if (!Array.isArray(arr)) {
      return;
    }
    for (const el of arr) {
      this.enqueue(el);
    }
  }

  /**
   * 获取队列元素数量
   * @returns
   */
  size(): number {
    return this.queue.length;
  }

  /**
   * 队列是否为空
   * @returns
   */
  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  /**
   * 入队，添加元素
   * @param element - 元素
   */
  enqueue(element: T) {
    this.queue.push(element);
    this.heapifyUp(this.queue.length - 1);
  }

  /**
   * 出队，获取（移出）顶部元素
   * @returns
   */
  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const top = this.queue[0];
    const tail = this.queue.pop()!;
    if (!this.isEmpty()) {
      this.queue[0] = tail;
      this.heapifyDown(0);
    }

    return top;
  }

  /**
   * 交换元素位置
   * @param idx1 - 自身索引
   * @param idx2 - 父元素索引
   */
  swap(idx1: number, idx2: number) {
    const q = this.queue;
    const x = this.queue[idx1];
    q[idx1] = q[idx2];
    q[idx2] = x;
  }

  /**
   * 上浮特定的元素（从底至顶调整元素位置）
   * @param idx
   */
  heapifyUp(idx: number) {
    let parentIdx: number = Math.floor((idx - 1) / 2);
    while (idx > 0 && this.compare(this.queue[idx], this.queue[parentIdx])) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  /**
   * 从顶至下（下沉），调整元素位置，维护堆性质
   * @param idx - 元素索引
   */
  heapifyDown(idx: number) {
    const leftChildIdx: number = idx * 2 + 1;
    const rightChildIdx: number = idx * 2 + 2;
    const q = this.queue;
    let moreIdx: number = idx;

    if (leftChildIdx < this.size() && this.compare(q[leftChildIdx], q[moreIdx])) {
      moreIdx = leftChildIdx;
    }
    if (rightChildIdx < this.size() && this.compare(q[rightChildIdx], q[moreIdx])) {
      moreIdx = rightChildIdx;
    }

    if (moreIdx !== idx) {
      this.swap(idx, moreIdx);
      this.heapifyDown(moreIdx);
    }
  }

  /**
   * 查询队首元素（勿直接修改）
   * @returns
   */
  top(): Readonly<T> | null {
    return this.isEmpty() ? null : this.queue[0];
  }

  /**
   * 序列化字符串用于查看数据
   * @returns
   */
  toString() {
    return JSON.stringify(this.queue);
  }
}

export { PriorityQueue };
