#!/bin/bash
# Usage: ./validate-encoding.bash "data/Localization/english/global.ini"

echo "Checking file(s) encoding of: $1"
echo "========================="

is_valid=true
for file in "$@"; do
  is_utf8=$(head -c3 "$file" | LC_ALL=C grep -qP '\xef\xbb\xbf' && echo "true" || echo "false")

  if [ $is_utf8 = "false" ]; then
    echo "❌ File '$file' is not UTF-8 with BOM encoded"
    is_valid=false
  else
    echo "✅ File '$file' is UTF-8 with BOM encoded"
  fi

done

if [ "$is_valid" = "false" ]; then
  echo "🔥 Some files are not UTF-8 with BOM encoded"
  exit 1
fi