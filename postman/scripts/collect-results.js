const fs = require("fs");
const path = require("path");

function collectResults() {
  const testResultsFilePath = path.join(
    __dirname,
    "..",
    "test-results",
    "outputfile.json"
  );
  const rawData = fs.readFileSync(testResultsFilePath);
  const testResults = JSON.parse(rawData);
  const { run: testRun } = testResults;
  return testRun["stats"]["assertions"];
}

module.exports = {
  collectResults,
};
