require('application');
if (!global['__snapshot']) {
    // In case snapshot generation is enabled these modules will get into the bundle
    // but will not be required/evaluated.
    // The snapshot webpack plugin will add them to the tns-java-classes.js bundle file.
    // This way, they will be evaluated on app start as early as possible.
    require('ui/frame');
    require('ui/frame/activity');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLXBsYXRmb3JtLmFuZHJvaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3ItcGxhdGZvcm0uYW5kcm9pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLGdGQUFnRjtJQUNoRixzQ0FBc0M7SUFDdEMsb0ZBQW9GO0lBQ3BGLHNFQUFzRTtJQUN0RSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEIsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDakMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ2FwcGxpY2F0aW9uJyk7XG5pZiAoIWdsb2JhbFsnX19zbmFwc2hvdCddKSB7XG4gICAgLy8gSW4gY2FzZSBzbmFwc2hvdCBnZW5lcmF0aW9uIGlzIGVuYWJsZWQgdGhlc2UgbW9kdWxlcyB3aWxsIGdldCBpbnRvIHRoZSBidW5kbGVcbiAgICAvLyBidXQgd2lsbCBub3QgYmUgcmVxdWlyZWQvZXZhbHVhdGVkLlxuICAgIC8vIFRoZSBzbmFwc2hvdCB3ZWJwYWNrIHBsdWdpbiB3aWxsIGFkZCB0aGVtIHRvIHRoZSB0bnMtamF2YS1jbGFzc2VzLmpzIGJ1bmRsZSBmaWxlLlxuICAgIC8vIFRoaXMgd2F5LCB0aGV5IHdpbGwgYmUgZXZhbHVhdGVkIG9uIGFwcCBzdGFydCBhcyBlYXJseSBhcyBwb3NzaWJsZS5cbiAgICByZXF1aXJlKCd1aS9mcmFtZScpO1xuICAgIHJlcXVpcmUoJ3VpL2ZyYW1lL2FjdGl2aXR5Jyk7XG59XG4iXX0=