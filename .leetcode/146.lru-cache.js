/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.hashMap = new Map();
  this.cache = new linkedDoubleList()
  this.max = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.hashMap.has(key)) return -1

  const value = this.hashMap.get(key).value

  this.put(key, value)

  return value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let node = new Node(key, value)

  if (this.hashMap.has(key)) {
    this.cache.delete(this.hashMap.get(key))
    this.hashMap.set(key, node)
    this.cache.addFirst(node)
  } else {
    if (this.hashMap.size === this.max) {
      const key = this.cache.deleteLast()

      this.hashMap.delete(key)
    }

    this.cache.addFirst(node)
    this.hashMap.set(key, node)
  }

};

function linkedDoubleList () {
  this.head = new Node(0, 0);
  this.tail = new Node(0, 0);
  this.head.next = this.tail
  this.tail.prev = this.head
}

linkedDoubleList.prototype.addFirst = function (node) {
  node.next = this.head.next
  node.prev = this.head

  this.head.next.prev = node
  this.head.next = node
}

linkedDoubleList.prototype.delete = function (node) {
  let key = node.key
  node.next.prev = node.prev
  node.prev.next = node.next
  return key
}

linkedDoubleList.prototype.deleteLast = function () {
  // if (this.head.next === this.tail) return -1

  return this.delete(this.tail.prev)

}



function Node (key, value) {
  this.key = key;
  this.value = value;
  this.prev = null
  this.next = null
}




/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

