class Solution:
    def minCost(self, colors: str, neededTime: List[int]) -> int:
        left = res = 0
        for right in range(1, len(colors)):
            if colors[left] == colors[right]:
                if neededTime[left] < neededTime[right]:
                    res += neededTime[left]
                    left = right
                else:
                    res += neededTime[right]
            else:
                left = right
                
        return res