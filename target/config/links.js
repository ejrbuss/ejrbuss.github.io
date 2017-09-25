var links = {
    // External
    twitter: 'https://twitter.com/ejrbuss',
    github: 'https://github.com/ejrbuss',
    linkedin: 'https://www.linkedin.com/in/ejrbuss/',
    // Internal
    home: '/',
    index: '/',
    work: '/work',
    about: '/about',
    blog: '/blog',
    // Tests
    internal: function (link) { return link && link.startsWith('/'); },
    external: function (link) { return link && !link.startsWith('/'); }
};
module.exports = links;
