// Generate Fibonacci Sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21,...

function fibonnaci(number){
    let n1 = 0;
    let n2 = 1;
    let next;
    next = n1 + n2;
    const sequence = [];
    while (next<= number){
        sequence.push(next);
        n1 = n2;
        n2 = next;
        next = n1 + n2;
    }
    return sequence;
}
fibonacci(30);
fibonacci(10);