/*
 * @lc app=leetcode.cn id=814 lang=typescript
 *
 * [814] 二叉树剪枝
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

function pruneTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return root;
  }
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);
  if (root.left === null && root.right === null && root.val === 0) {
    return null;
  }
  return root;
};
// @lc code=end

