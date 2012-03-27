describe( "NumberFormat", function () {

  describe( "Public API", function () {

    it("should exist", function () {
      expect( NumberFormat ).to.be.a('function');
    });

    it("should have static helper functions/objects", function () {
      expect( NumberFormat.locale ).to.be.an( 'object' );
    });

    it("should be a constructor", function () {
      var nf = new NumberFormat( 'en' );
      expect( nf ).to.be.a( NumberFormat );
    });

    it("should bail on non-existing locales", function () {
      expect(function(){ var a = new NumberFormat( 'lawlz' ); }).to.throwError();
    });

    it("should default to 'en' when no locale is passed into the constructor", function () {
      expect((new NumberFormat()).locale).to.be( 'en' );
    });

  });

});