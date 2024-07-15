
exports.getHomePage = (req, res, next) => {
    res.render('admin/home', {
        pageTitle: 'Wemerson Dev',
        path: '/admin/home',
        resetCSS: true,
        responsivoCSS: true
    });
};
