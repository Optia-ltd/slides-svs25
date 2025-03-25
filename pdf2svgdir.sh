#!/bin/bash

# Source directory containing PDF files
source_dir=$1
# Destination directory for output files
output_dir=$1/svg

# Check if the output directory exists, and create it if not
if [ ! -d "$output_dir" ]; then
    mkdir -p "$output_dir"
fi

# Loop over the PDF files in the source directory
for pdf_file in "$source_dir"/*.pdf; do
    if [ -f "$pdf_file" ]; then
        # Get the base filename (without extension)
        base_filename=$(basename "$pdf_file" .pdf)

        # Build the output filename (same name, different extension)
        output_file="$output_dir/$base_filename.svg"

        # Run the command to convert the PDF to text using pdftotext
        pdf2svg "$pdf_file" "$output_file"

        echo "Converted $pdf_file to $output_file"
    fi
done

echo "Conversion complete."

