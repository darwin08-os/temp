cat <<EOF > sample.txt
Welcome to marwadi University
Shell scripting is powerful
this line has number 12345
Another line with email:user@example.com
special character like * or & can be tricky
EOF
echo "___Using grep to find lines with 'line'___"
grep "line" sample.txt
echo -e "\n---Using egrep to find lines with numbers or email---"
egrep "[0-9]+|[a-zA0-9._%+-]+@[a-zA-Z0.-9]+\.[a-zA-Z]{2,}" sample.txt
echo -e "\n---Using fgrep to find litral string '*'"

fgrep "*" sample.txt