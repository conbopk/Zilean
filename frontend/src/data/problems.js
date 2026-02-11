export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
            's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
            "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },

  "merge-sorted-array": {
    id: "merge-sorted-array",
    title: "Merge Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n.",
      notes: [
        "Merge nums2 into nums1 as one sorted array.",
        "nums1 has a length of m + n, where the last n elements are set to 0 and should be ignored.",
        "You must merge in-place."
      ],
    },
    examples: [
      {
        input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
        output: "[1,2,2,3,5,6]",
        explanation: "Elements from nums2 are merged into nums1 in sorted order."
      },
      {
        input: "nums1 = [1], m = 1, nums2 = [], n = 0",
        output: "[1]",
        explanation: "nums2 is empty, so nums1 remains unchanged."
      },
    ],

    constraints: [
      "nums1.length == m + n",
      "nums2.length == n",
      "0 ≤ m, n ≤ 200",
      "-10⁹ ≤ nums1[i], nums2[i] ≤ 10⁹"
    ],
    starterCode: {
      javascript: `function merge(nums1, m, nums2, n) {
  // Write your solution here
}

// Test cases
let nums1 = [1,2,3,0,0,0];
merge(nums1, 3, [2,5,6], 3);
console.log(nums1); // Expected: [1,2,2,3,5,6]`,
      python: `def merge(nums1, m, nums2, n):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        // Write your solution here
    }
}`
    },
    expectedOutput: {
      javascript: "[1,2,2,3,5,6]",
      python: "[1, 2, 2, 3, 5, 6]",
      java: "[1, 2, 2, 3, 5, 6]",
    },
  },

  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Dynamic Programming",
    description: {
      text: "You are given an array prices where prices[i] is the price of a given stock on the ith day.",
      notes: [
        "You want to maximize your profit by choosing a single day to buy one stock and a different day to sell.",
        "Return the maximum profit you can achieve."
      ],
    },
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy at price 1 and sell at price 6 for maximum profit."
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "No profitable transaction is possible."
      },
    ],
    constraints: [
      "1 ≤ prices.length ≤ 10⁵",
      "0 ≤ prices[i] ≤ 10⁴"
    ],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0`,
      python: `def maxProfit(prices):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }
}`
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
    },
  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice in the array.",
      notes: ["Return false if every element is distinct."],
    },
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
        explanation: "The value 1 appears more than once."
      },
      {
        input: "nums = [1,2,3,4]",
        output: "false",
        explanation: "All elements are distinct."
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁹ ≤ nums[i] ≤ 10⁹"
    ],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
}

// Test cases
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false`,
      python: `def containsDuplicate(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }
}`
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack • String",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']'.",
      notes: [
        "Determine if the input string is valid.",
        "An input string is valid if open brackets are closed in the correct order."
      ],
    },
    examples: [
      {
        input: 's = "()"',
        output: "true",
        explanation: "The parentheses are properly opened and closed."
      },
      {
        input: 's = "()[]{}"',
        output: "true",
        explanation: "All types of brackets are closed in correct order."
      },
      {
        input: 's = "(]"',
        output: "false",
        explanation: "The closing bracket does not match the opening one."
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 10⁴",
      "s consists of parentheses only"
    ],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
}

// Test cases
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false`,
      python: `def isValid(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        return false;
    }
}`
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
    },
  },

  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    category: "Array • Binary Search",
    description: {
      text: "Given an array of integers nums which is sorted in ascending order, and an integer target.",
      notes: ["If target exists, return its index. Otherwise, return -1."],
    },
    examples: [
      {
        input: "nums = [-1,0,3,5,9,12], target = 9",
        output: "4",
        explanation: "The target 9 exists at index 4.",
      },
      {
        input: "nums = [-1,0,3,5,9,12], target = 2",
        output: "-1",
        explanation: "The target 2 does not exist in the array.",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁴",
      "-10⁴ ≤ nums[i], target ≤ 10⁴",
      "nums is sorted in ascending order"
    ],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
}`,
      python: `def search(nums, target):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n-1",
      python: "4\n-1",
      java: "4\n-1",
    },
  },

  "implement-strstr": {
    id: "implement-strstr",
    title: "Implement strStr()",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
      notes: ["If needle is empty, return 0."],
    },
    examples: [
      {
        input: 'haystack = "hello", needle = "ll"',
        output: "2",
        explanation: `"ll" starts at index 2 in "hello".`,
      },
      {
        input: 'haystack = "aaaaa", needle = "bba"',
        output: "-1",
        explanation: `"bba" does not exist in "aaaaa".`,
      },
    ],
    constraints: [
      "1 ≤ haystack.length, needle.length ≤ 10⁴",
      "Strings consist of lowercase English characters"
    ],
    starterCode: {
      javascript: `function strStr(haystack, needle) {
  // Write your solution here
}`,
      python: `def strStr(haystack, needle):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int strStr(String haystack, String needle) {
        // Write your solution here
        return -1;
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n-1",
      python: "2\n-1",
      java: "2\n-1",
    },
  },

  "length-of-last-word": {
    id: "length-of-last-word",
    title: "Length of Last Word",
    difficulty: "Easy",
    category: "String",
    description: {
      text: "Given a string s consisting of words and spaces, return the length of the last word in the string.",
      notes: ["A word is a maximal substring consisting of non-space characters only."],
    },
    examples: [
      {
        input: 's = "Hello World"',
        output: "5",
        explanation: 'The last word is "World" with length 5.',
      },
      {
        input: 's = "   fly me   to   the moon  "',
        output: "4",
        explanation: 'The last word is "moon" with length 4.',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 10⁴",
      "s consists of letters and spaces"
    ],
    starterCode: {
      javascript: `function lengthOfLastWord(s) {
  // Write your solution here
}`,
      python: `def lengthOfLastWord(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int lengthOfLastWord(String s) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "5\n4",
      python: "5\n4",
      java: "5\n4",
    },
  },

  "remove-element": {
    id: "remove-element",
    title: "Remove Element",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.",
      notes: ["The order of elements may be changed."],
    },
    examples: [
      {
        input: "nums = [3,2,2,3], val = 3",
        output: "2",
        explanation: "After removing 3, nums becomes [2,2].",
      },
      {
        input: "nums = [0,1,2,2,3,0,4,2], val = 2",
        output: "5",
        explanation: "After removing 2, nums has 5 remaining elements.",
      },
    ],
    constraints: [
      "0 ≤ nums.length ≤ 100",
      "0 ≤ nums[i] ≤ 50",
      "0 ≤ val ≤ 100"
    ],
    starterCode: {
      javascript: `function removeElement(nums, val) {
  // Write your solution here
  return 0;
}`,
      python: `def removeElement(nums, val):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int removeElement(int[] nums, int val) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n5",
      python: "2\n5",
      java: "2\n5",
    },
  },

  "sqrtx": {
    id: "sqrtx",
    title: "Sqrt(x)",
    difficulty: "Easy",
    category: "Math • Binary Search",
    description: {
      text: "Given a non-negative integer x, return the square root of x rounded down to the nearest integer.",
      notes: ["You must not use any built-in exponent function."],
    },
    examples: [
      {
        input: "x = 4",
        output: "2",
        explanation: "The square root of 4 is 2.",
      },
      {
        input: "x = 8",
        output: "2",
        explanation: "The square root of 8 is 2.828..., rounded down to 2.",
      },
    ],
    constraints: [
      "0 ≤ x ≤ 2³¹ - 1"
    ],
    starterCode: {
      javascript: `function mySqrt(x) {
  // Write your solution here
}`,
      python: `def mySqrt(x):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int mySqrt(int x) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n2",
      python: "2\n2",
      java: "2\n2",
    },
  },

  "linked-list-cycle": {
    id: "linked-list-cycle",
    title: "Linked List Cycle",
    difficulty: "Easy",
    category: "Linked List • Two Pointers",
    description: {
      text: "Given the head of a linked list, determine if the linked list has a cycle in it.",
      notes: ["Use O(1) extra space if possible."],
    },
    examples: [
      {
        input: "head = [3,2,0,-4], pos = 1",
        output: "true",
        explanation: "The tail connects to the node at index 1, forming a cycle.",
      },
      {
        input: "head = [1,2], pos = -1",
        output: "false",
        explanation: "There is no cycle in the linked list.",
      },
    ],
    constraints: [
      "The number of nodes is in the range [0, 10⁴]",
      "-10⁵ ≤ Node.val ≤ 10⁵",
      "pos is -1 or a valid index"
    ],
    starterCode: {
      javascript: `function hasCycle(head) {
  // Write your solution here
}`,
      python: `def hasCycle(head):
    # Write your solution here
    pass`,
      java: `public class Solution {
    public boolean hasCycle(ListNode head) {
        // Write your solution here
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "merge-two-sorted-lists": {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked List • Recursion",
    description: {
      text: "Merge two sorted linked lists and return it as a new sorted list.",
      notes: ["The new list should be made by splicing together the nodes of the first two lists."],
    },
    examples: [
      {
        input: "l1 = [1,2,4], l2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
        explanation: "The merged list maintains sorted order.",
      },
      {
        input: "l1 = [], l2 = []",
        output: "[]",
        explanation: "Both lists are empty.",
      },
    ],
    constraints: [
      "The number of nodes in both lists is in the range [0, 50]",
      "-100 ≤ Node.val ≤ 100"
    ],
    starterCode: {
      javascript: `function mergeTwoLists(l1, l2) {
  // Write your solution here
}`,
      python: `def mergeTwoLists(l1, l2):
    # Write your solution here
    pass`,
      java: `class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        // Write your solution here
        return null;
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4]\n[]",
      python: "[1, 1, 2, 3, 4, 4]\n[]",
      java: "[1, 1, 2, 3, 4, 4]\n[]",
    },
  },

  "invert-binary-tree": {
    id: "invert-binary-tree",
    title: "Invert Binary Tree",
    difficulty: "Easy",
    category: "Tree • DFS",
    description: {
      text: "Invert a binary tree.",
      notes: ["Swap the left and right children of all nodes."],
    },
    examples: [
      {
        input: "root = [4,2,7,1,3,6,9]",
        output: "[4,7,2,9,6,3,1]",
        explanation: "Each node's left and right children are swapped.",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 100]",
      "-100 ≤ Node.val ≤ 100"
    ],
    starterCode: {
      javascript: `function invertTree(root) {
  // Write your solution here
}`,
      python: `def invertTree(root):
    # Write your solution here
    pass`,
      java: `class Solution {
    public TreeNode invertTree(TreeNode root) {
        // Write your solution here
        return root;
    }
}`,
    },
    expectedOutput: {
      javascript: "[4,7,2,9,6,3,1]",
      python: "[4,7,2,9,6,3,1]",
      java: "[4,7,2,9,6,3,1]",
    },
  },

  "min-stack": {
    id: "min-stack",
    title: "Min Stack",
    difficulty: "Medium",
    category: "Stack • Design",
    description: {
      text: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
      notes: ["All operations must run in O(1) time."],
    },
    examples: [
      {
        input: "push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()",
        output: "[-3, 0, -2]",
        explanation: "Minimum is tracked correctly after each operation.",
      },
    ],
    constraints: [
      "Methods pop, top, and getMin will always be called on non-empty stacks"
    ],
    starterCode: {
      javascript: `class MinStack {
  constructor() {
    // Write your solution here
  }
}`,
      python: `class MinStack:
    def __init__(self):
        # Write your solution here
        pass`,
      java: `class MinStack {
    public MinStack() {
        // Write your solution here
    }
}`,
    },
    expectedOutput: {
      javascript: "-3\n0\n-2",
      python: "-3\n0\n-2",
      java: "-3\n0\n-2",
    },
  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: "Given two strings s and t, return true if t is an anagram of s.",
      notes: ["An anagram uses the same characters with the same frequencies."],
    },
    examples: [
      {
        input: 's = "anagram", t = "nagaram"',
        output: "true",
        explanation: "Both strings contain the same characters with the same counts.",
      },
      {
        input: 's = "rat", t = "car"',
        output: "false",
        explanation: "The character frequencies do not match.",
      },
    ],
    constraints: [
      "1 ≤ s.length, t.length ≤ 5 * 10⁴",
      "Strings consist of lowercase English letters"
    ],
    starterCode: {
      javascript: `function isAnagram(s, t) {
  // Write your solution here
}`,
      python: `def isAnagram(s, t):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isAnagram(String s, String t) {
        // Write your solution here
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window • Hash Table",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: [
        "A substring is a contiguous sequence of characters.",
        "The solution should run in linear time."
      ],
    },
    examples: [
      {
        input: "s = \"abcabcbb\"",
        output: "3",
        explanation: "The longest substring without repeating characters is \"abc\", which has length 3.",
      },
      {
        input: "s = \"bbbbb\"",
        output: "1",
        explanation: "The longest substring is \"b\" with length 1.",
      },
    ],
    constraints: [
      "0 ≤ s.length ≤ 5 * 10⁴",
      "s consists of English letters, digits, symbols and spaces"
    ],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1`,
      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))  # Expected: 1`,
      java: `class Solution {
    public int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(sol.lengthOfLongestSubstring("bbbbb")); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n1",
      python: "3\n1",
      java: "3\n1",
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    description: {
      text: "Given an integer array nums, return an array answer such that answer[i] is the product of all the elements of nums except nums[i].",
      notes: [
        "You must solve it without using division.",
        "The solution should run in O(n) time."
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
        explanation: "Each element is the product of all other elements except itself.",
      }
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁵",
      "-30 ≤ nums[i] ≤ 30",
      "The product of any prefix or suffix fits in a 32-bit integer"
    ],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here
}

console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]`,
      python: `def productExceptSelf(nums):
    # Write your solution here
    pass

print(productExceptSelf([1,2,3,4]))  # Expected: [24,12,8,6]`,
      java: `import java.util.*;

class Solution {
    public int[] productExceptSelf(int[] nums) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(Arrays.toString(sol.productExceptSelf(new int[]{1,2,3,4})));
    }
}`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]",
      python: "[24, 12, 8, 6]",
      java: "[24, 12, 8, 6]",
    },
  },

  "daily-temperatures": {
    id: "daily-temperatures",
    title: "Daily Temperatures",
    difficulty: "Medium",
    category: "Stack • Monotonic Stack",
    description: {
      text: "Given an array of integers temperatures, return an array answer where answer[i] is the number of days until a warmer temperature.",
      notes: [
        "If there is no future day for which this is possible, put 0 instead.",
      ],
    },
    examples: [
      {
        input: "temperatures = [73,74,75,71,69,72,76,73]",
        output: "[1,1,4,2,1,1,0,0]",
        explanation: "Each value represents how many days you must wait to get a warmer temperature.",
      }
    ],
    constraints: [
      "1 ≤ temperatures.length ≤ 10⁵",
      "30 ≤ temperatures[i] ≤ 100"
    ],
    starterCode: {
      javascript: `function dailyTemperatures(temperatures) {
  // Write your solution here
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));`,
      python: `def dailyTemperatures(temperatures):
    # Write your solution here
    pass

print(dailyTemperatures([73,74,75,71,69,72,76,73]))`,
      java: `import java.util.*;

class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        // Write your solution here
        return new int[0];
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,1,4,2,1,1,0,0]",
      python: "[1, 1, 4, 2, 1, 1, 0, 0]",
      java: "[1, 1, 4, 2, 1, 1, 0, 0]",
    },
  },

};


export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript"
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python"
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};