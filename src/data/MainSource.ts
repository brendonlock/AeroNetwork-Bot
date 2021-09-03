import semver from 'semver';

import DocsSource from './DocsSource';

const branchBlacklist = new Set(['dashboard']);
export default new DocsSource({
	id: 'main',
	name: 'Main library',
	global: 'Discord',
	repo: 'brendonlock/AeroNetwork-Bot',
	defaultTag: 'stable',
	branchFilter: (branch: string) => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
	tagFilter: (tag: string) => semver.gte(tag, '9.0.0'),
});
