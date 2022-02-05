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

;heretic imperative programming:
(begin
  (printf "enter number to fibfac: ")
  (let ([n (string->number (read-line))])
    (begin
      (printf "fib of ~a is ~a\n" n (fib n))
      (printf "fac of ~a is ~a\n" n (fac n)))))