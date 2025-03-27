echo "Name : Harsh Vadgama"
echo "enrollment : 92410103123"
echo "class : EC5"
echo "batch: C"

echo "___________________"
echo -e "\t menu implementation"
echo "____________________"
echo "a. calendar of current month"
echo "b. today's date and time"
echo "c. usernames that are currently logged in the system"
echo "d. your name at given x, y position"
echo "e. your terminal number"
echo "Enter your choice"
read choice

case $choice in
  a) date +'%B %Y';;
  b) date;;
  c) who;;
  d) printf "%-20s%10s\n" "one" "two";;
  e) tty;;
  *) echo "This is not a valid choice";;
esac
