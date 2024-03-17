import csv

def search_csv(file_path, search_string, print_interval=100000):
    with open(file_path, "r") as csv_file:
        csv_reader = csv.reader(csv_file)
        for line_number, row in enumerate(csv_reader, start=1):
            # Join the row elements into a single string for comparison
            row_string = ", ".join(row)
            if search_string in row_string:
                print(f"Found '{search_string}' in line {line_number}: {row}")
                break

            # Print progress every 1000 lines
            if line_number % print_interval == 0:
                print(f"Processed {line_number} lines")

            # print(f"row = {row_string}")
            # (print(type(row)))

# Example usage
file_path = "sample_data_1gb.csv"
# Add 2 spaces after commas
search_string = "user7811@example.com,  pass8749,  first4146,  last230"
search_csv(file_path, search_string)