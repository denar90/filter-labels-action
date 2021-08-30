const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    try {
        const filter = core.getInput('filter')
            .split("\n")
	    .filter(x => x !== "");;
        const filteredLabels = github.context.payload.pull_request.labels.reduce((acc, { name }) => {
	    if (filter.includes(name)) {
	        acc.push(name);
	    }
	    return acc;
	}, []);
    	console.log('Filtered Labels:', filteredLabels);
        core.setOutput('filteredLabels', filteredLabels);
    } catch (error) {
        core.error(error);
        core.setFailed(error.message);
    }
}

run();
