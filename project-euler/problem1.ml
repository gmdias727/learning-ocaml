(* if we list all the natural numbers below 10 *)

let rec nat n =
  if n = 0 then 1
  else n + nat (n - 1)

let int_to_string nat =
  string_of_int nat;;

print_endline (int_to_string 5)
