function solution(s) {
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (s.indexOf(c) == i && s.indexOf(c, i + 1) == -1) {
            return c;
        }
    }
    return '_';

}