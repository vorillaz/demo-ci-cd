LATEST_COMMIT=$(git log --oneline -n 1 HEAD)
COMMIT_REGEX="(develop|staging|release|ci:)"

if [[ $LATEST_COMMIT =~ $COMMIT_REGEX ]]; then
    echo "This is a release, kill this one!"
    circleci step halt
else
  echo "Proceed. Prepare a new release"
fi