const UrlPrettifier = require('next-url-prettifier').default;

const routes = [
  {
    page: 'list',
    prettyUrl: ({ listType = '' }) => `/${listType}`,
    prettyUrlPatterns: [
      { pattern: '/in-vote', defaultParams: { listTypes: 'IN_VOTE' } },
      { pattern: '/past', defaultParams: { listTypes: 'PAST' } },
      { pattern: '/preparation', defaultParams: { listTypes: 'PREPARATION' } },
      { pattern: '/hot', defaultParams: { listTypes: 'HOT' } },
    ],
  },
];

const urlPrettifier = new UrlPrettifier(routes);
exports.default = routes;
exports.Router = urlPrettifier;
