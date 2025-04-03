echo "name : vadgama harsh d."
echo "enrollment : 92410103123"
echo "batch : EC5-C"

echo "Enter numbers seperated by space : "

read -a numbers
sorted_numbers=$(echo "${numbers(@)}" | tr ' ' '\n' | sort -nr) 
echo "sorted number in decending order"
echo "$sorted_numbers"