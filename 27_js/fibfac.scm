#lang racket
(define (fac n)
  (if (zero? n)
      1
      (* n (fac (sub1 n)))))

(define (fib-helper n a b)
  (if (zero? n)
      a
      (fib-helper (sub1 n) b (+ a b))))
(define (fib n)
  (fib-helper n 0 1))

(fac 20)
(fib 20)