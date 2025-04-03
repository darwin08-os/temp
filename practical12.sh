capital_words() {
    echo "$1" | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2));print}'
}
echo "Enter a text : "
read text
capitalized_text = $(capital_words"$text")
echo "capitalized text : $capitalized_text"