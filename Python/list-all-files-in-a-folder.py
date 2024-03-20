import os
# List all files in a folder
def files_in_folder(folder):
    files_in_root = os.listdir(folder)
    print("Files in root folder:")
    for file in files_in_root:
        print(file)