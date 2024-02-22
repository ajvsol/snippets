import json

# Load the JSON data from the file
with open('mozilla_components_session_storage_gecko.json') as file:
    data = json.load(file)

# Initialize an empty array to store the markdown strings
markdown_strings = []

# Loop through the objects in the `first_property` property
for obj in data["sessionStateTuples"]:
    # Extract the `title` and `url` values
    title = obj["session"]["title"]
    url = obj["session"]["url"]

    # Create the markdown string and append it to the array
    markdown_string = f"[{title}]({url})"
    markdown_strings.append(markdown_string)

# Save the markdown strings to a MD file
with open('android-firefox-tabs-export.md', 'w') as file:
    for markdown_string in markdown_strings:
        file.write(markdown_string + '\n')
