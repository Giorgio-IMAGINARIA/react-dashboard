jest.dontMock('../MainBar.react');

describe('MainBar component', function () {

    it('renders provided MainBar component text', function () {

        var React = require('react');
        var ReactDOM = require('react-dom');
        var TestUtils = require('react-addons-test-utils');
        var MainBar = require('../MainBar.react');

        var mainBar = TestUtils.renderIntoDocument(
            MainBar (text='Testing...')
        );
        var actualMainBarText = ReactDOM.findDOMNode(mainBar).textContent;

        expect(actualMainBarText).toBe('Testing...');

        var defaultMainBar = TestUtils.renderIntoDocument(
            MainBar()
        );

        var actualDefaultMainBarText = ReactDOM.findDOMNode(defaultMainBar).textContent;

        expect(actualDefaultMainBarText).toBe('Default mainBar');
    });
});