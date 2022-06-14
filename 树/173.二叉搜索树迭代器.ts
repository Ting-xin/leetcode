/*
 * @lc app=leetcode.cn id=173 lang=typescript
 *
 * [173] 二叉搜索树迭代器
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class BSTIterator {
    index: number = 0;
    queue: number[] = [];
    constructor(root: TreeNode | null) {
        if (root === null) {
            return ;
        }
        this.dfs(root);
    }

    dfs(root: TreeNode): void {
        if (root === null) {
            return;
        }
        this.dfs(root.left);
        this.queue.push(root.val);
        this.dfs(root.right);
    }

    next(): number {
        return this.queue[this.index++];
    }

    hasNext(): boolean {
        return this.index < this.queue.length;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

