class Solution:
    def minOperations(self, s: str) -> int:
        c = b = 0
        left = '0'
        if s[0] != left: c += 1
        else: b += 1
        for i in range(1,len(s)):
            if s[i] == left:
                c += 1
                left = '1' if s[i] == '0' else '0'
            else: 
                left = s[i]
                b += 1
        return min(b,c) 