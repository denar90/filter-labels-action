# Filter Labels

# Usage

```yaml
- uses: ramonsnir/gh-action-pr-details@1.0.3
  id: filterLabels
  with:
    repo-token: ${{ secrets.GITHUB_TOKEN }}
- run: echo ${{ steps.filterLabels.outputs.filteredLabels }}
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
