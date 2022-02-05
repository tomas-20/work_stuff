#lang racket
(define (fac n)
  (if (zero? n)
      1
      (* n (fac (sub1 n)))))

(fac 20)
