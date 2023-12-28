class Solution(object):
    def getLengthOfOptimalCompression(self, s, k):
        n = len(s)
        dp = [[9999] * 110 for _ in range(110)]
        dp[0][0] = 0

        for i in range(1, n + 1):
            for j in range(k + 1):
                cnt, del_count = 0, 0
                for l in range(i, 0, -1):
                    if s[l - 1] == s[i - 1]:
                        cnt += 1
                    else:
                        del_count += 1

                    if j - del_count >= 0:
                        dp[i][j] = min(dp[i][j],
                                       dp[l - 1][j - del_count] + 1 + (3 if cnt >= 100 else 2 if cnt >= 10 else 1 if cnt >= 2 else 0))

                if j > 0:
                    dp[i][j] = min(dp[i][j], dp[i - 1][j - 1])

        return dp[n][k]