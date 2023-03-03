#!/bin/bash

# Set the source and destination directories
SRC_DIR="$VAULT1/Android-sync/Android-ATHENAEUM/Logseq/logseq-coding2/pages"
DEST_DIR="$MY_REPOS/public-notes"

# Set the filenames to sync
FILE1="JavaScript.md"
FILE2="CodeWars - JavaScript.md"
FILE3="LeetCode - JavaScript.md"

# Change to the destination directory
cd $DEST_DIR

# Sync the files
rsync -av $SRC_DIR/$FILE1 $DEST_DIR/
# Double quotes are needed for filenames with spaces
rsync -av "$SRC_DIR/$FILE2" "$DEST_DIR/"
rsync -av "$SRC_DIR/$FILE3" "$DEST_DIR/"

# Check if there are any changes
if [[ $(git diff --name-only $FILE1 "$FILE2" "$FILE3" ) ]]; then
#OLD
#if git status --porcelain $FILE1 "$FILE2" "$FILE3" | grep -q "^ M"; then
    # Commit the changes
    DATE=$(date +"%Y-%m-%d %H:%M:%S")
    git add $FILE1 "$FILE2" "$FILE3"
    git commit -m "Sync files at $DATE"
    git pull
    git push
fi