# Left Shift << | right Shift >>

    <
        A << i = A * 2^i
        A >> i = A / 2^i
    >

# Other Operators

    <
        A & 0 = 0
        A & A = A
        A | 0 = A
        A | A = A
        A ^ 0 = A
        A ^ A = 0
    >

# Properties

    <
        commutative
        associative
    >

# isPrime

    <
        if (A & 1 = A) { isPrime }
        if (A & 1 != A) { isEven }
    >

# Single Number

    <
        - Single number is a very frequently asked questions because it can have multiple variations.

        Example:
            - Every element repeats thrice except 1 element repeats twice.
            a. (c % 3 == 2)

            - Every element repeats thrice except 1 element repeats once.
            a. (c % 3 == 1)

            - Every elemt repeats 4 times except 1 elemt repeats once.
            a. (ans ^ element)

        - When the major repeating elemet is even we XOR to find the single element
          whereas, when the major repeating element is odd, we take mod of bit count to find the remaining bit / number.

        - To find a solo element in a twice occuring element array, XOR is used as it cancels the same elements.

        - But same concept cannot be applied in thrice occuring element array as it is an Odd occurance.
    >
