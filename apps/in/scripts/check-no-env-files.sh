#!/bin/sh

echo "Refusing to commit environment file(s):" >&2
printf '  - %s\n' "$@" >&2
echo "Commit a .env.example, .env.sample, or .env.template file instead." >&2
exit 1
