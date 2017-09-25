const links = {

    // External
    twitter:  'https://twitter.com/ejrbuss',
    github:   'https://github.com/ejrbuss',
    linkedin: 'https://www.linkedin.com/in/ejrbuss/',

    // Internal
    home:     '/',
    index:    '/',
    work:     '/work',
    about:    '/about',
    blog:     '/blog',

    // Tests
    internal(link) { return link &&  link.startsWith('/'); },
    external(link) { return link && !link.startsWith('/'); }
};

module.exports = links;