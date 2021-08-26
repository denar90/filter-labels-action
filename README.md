# Filter Labels

# Usage

```yaml
- uses: denar90/filter-labels-action@1.0.0
  id: filter
  with:
    filter: ['need-testing']
- run: echo ${{ steps.filter.outputs.filteredLabels }}
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
