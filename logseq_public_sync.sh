#!/bin/bash

# Set the environment variables explicitly (for cron use)
export VAULT1="/home/boss/Vaults/gocryptfs1"
export MY_REPOS="/home/boss/Documents/Git/1MY_REPOS"

# Set the source and destination directories
SRC_DIR="$VAULT1/Android-sync/Android-ATHENAEUM/Logseq/logseq-coding2/pages"
DEST_DIR="$MY_REPOS/public-notes"

# Set the filenames to sync
FILE1="JavaScript.md"
FILE2="CodeWars - JavaScript.md"
FILE3="LeetCode - JavaScript.md"
FILE4="Currently_studying.md"
FILE5="C%23.md"

# Change to the destination directory
cd $DEST_DIR

# Sync the files
rsync -av $SRC_DIR/$FILE1 $DEST_DIR/
# Double quotes are needed for filenames with spaces
rsync -av "$SRC_DIR/$FILE2" "$DEST_DIR/"
rsync -av "$SRC_DIR/$FILE3" "$DEST_DIR/"
rsync -av $SRC_DIR/$FILE4 $DEST_DIR/
rsync -av $SRC_DIR/$FILE5 $DEST_DIR/

# Check if there are any changes
if [[ $(git diff --name-only $FILE1 "$FILE2" "$FILE3" $FILE4 $FILE5 ) ]]; then

    # Get the current date and time
    DATE=$(date +"%Y-%m-%d %H:%M:%S")
    DATE2=$(date +"%Y-%m-%d")

    # Update the word count line in the README.md file

    DEST_DIR_WC=$(cd "$DEST_DIR" && wc -w *.md | awk '{ print $1 }' | paste -sd+ | bc)
    SRC_DIR_WC=$(cd "$SRC_DIR" && wc -w *.md | awk '{ print $1 }' | paste -sd+ | bc)
    OTHER_LS_DIR="$VAULT1/Android-sync/Android-ATHENAEUM/Logseq/logseq-unenc/pages"
    OTHER_LS_DIR_WC=$(cd "$OTHER_LS_DIR" && wc -w *.md | awk '{ print $1 }' | paste -sd+ | bc)

    sed -i "s/^This repo.*/This repo contain $DEST_DIR_WC words, which represents $(awk "BEGIN { printf \"%.2f%%\", $DEST_DIR_WC / $SRC_DIR_WC * 100 }") of my coding related notes ($SRC_DIR_WC words), and $(awk "BEGIN { printf \"%.2f%%\", $DEST_DIR_WC / ($OTHER_LS_DIR_WC + $SRC_DIR_WC) * 100 }") of my total notes ($OTHER_LS_DIR_WC words). **Last updated:** $DATE. /g" README.md

    # Change to the destination directory
    cd $DEST_DIR

    # Commit the changes
    
    git add .
    git commit -m "Sync files at $DATE"
    git push
fi