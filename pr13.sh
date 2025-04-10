touch empty_file.txt
mkdir test dir
echo "echo hello" > executable_file.sh
chmod += executable_file.sh

#display executable files
echo "Executable files in current directory"
find . -maxdepth 1 -type f -executable -exec ls -l {} \;

#display directories
echo -e "\nDirectories in current directory"
find . -maxdepth 1 -type d -exec ls -ld {} \;

#display Zero-Sized files
echo -e "\nZero-sized files in current directory"
find . -maxdepth 1 -type f -size 0 -exec ls {} \;