# Filter Labels

# Usage

```yaml
- uses: denar90/filter-labels-action@1.0.0
  id: filterLabels
  with:
    repo-token: ${{ secrets.GITHUB_TOKEN }}
- run: echo ${{ steps.filterLabels.outputs.filteredLabels }}
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
