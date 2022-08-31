# post-office
An illustrative project that stores the source files used in a tutorial showcasing integration testing using postman collections inside Azure Pipelines.

## Execute Collection Runner (Example)

### Change to Postman directory
```
cd postman
```
### Execute collection Runner
```
newman run collections/sample-collection.json --reporters cli,json --reporter-json-export test-results/outputfile.json
```