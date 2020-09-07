LATEST_COMMIT=$(git log --oneline -n 1 HEAD)
COMMIT_REGEX="(develop|staging|release)"


echo $LATEST_COMMIT;

if [[ $LATEST_COMMIT =~ $COMMIT_REGEX ]]; then
    echo "This is a release, kill this one!"
else
  echo "Prepare a new release"
fi