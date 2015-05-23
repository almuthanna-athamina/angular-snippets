describe('index page', function() {

    it('should have a title', function() {

        browser.get('');

        expect(browser.getTitle()).toEqual('Template for Angular JS with Foundation');
    });
});
