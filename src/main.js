const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    try {
        const filter = getInput('filter');
        const filteredLabels = github.context.payload.pull_request.labels.map(({ name }) => {
            return filter.includes(name);
        });
        core.setOutput('filteredLabels', filteredLabels);
    } catch (error) {
        core.error(error);
        core.setFailed(error.message);
    }
}

run();
