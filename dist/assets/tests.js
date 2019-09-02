'use strict';

define("zubeirdev/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('breakpoints.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'breakpoints.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/projects.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/projects.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/about.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/projects.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/projects.js should pass ESLint\n\n');
  });
});
define("zubeirdev/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('zubeirdev/templates/about.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'zubeirdev/templates/about.hbs should pass TemplateLint.\n\nzubeirdev/templates/about.hbs\n  4:8  error  Incorrect indentation for `<h3>` beginning at L4:C8. Expected `<h3>` to be at an indentation of 6 but was found at 8.  block-indentation\n  5:8  error  Incorrect indentation for `<br>` beginning at L5:C8. Expected `<br>` to be at an indentation of 6 but was found at 8.  block-indentation\n  6:8  error  Incorrect indentation for `<br>` beginning at L6:C8. Expected `<br>` to be at an indentation of 6 but was found at 8.  block-indentation\n  7:8  error  Incorrect indentation for `<br>` beginning at L7:C8. Expected `<br>` to be at an indentation of 6 but was found at 8.  block-indentation\n  8:8  error  Incorrect indentation for `<br>` beginning at L8:C8. Expected `<br>` to be at an indentation of 6 but was found at 8.  block-indentation\n  9:8  error  Incorrect indentation for `<div>` beginning at L9:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  10:12  error  Incorrect indentation for `<div>` beginning at L10:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  11:12  error  Incorrect indentation for `<div>` beginning at L11:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  24:12  error  Incorrect indentation for `<div>` beginning at L24:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  17:0  error  Incorrect indentation for `               Home\n              ` beginning at L17:C0. Expected `               Home\n              ` to be at an indentation of 16 but was found at 15.  block-indentation\n  20:0  error  Incorrect indentation for `               Projects\n              ` beginning at L20:C0. Expected `               Projects\n              ` to be at an indentation of 16 but was found at 15.  block-indentation\n  22:14  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n');
  });
  QUnit.test('zubeirdev/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'zubeirdev/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('zubeirdev/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'zubeirdev/templates/index.hbs should pass TemplateLint.\n\nzubeirdev/templates/index.hbs\n  6:6  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  7:6  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  8:6  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  9:6  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  18:6  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n');
  });
  QUnit.test('zubeirdev/templates/projects.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'zubeirdev/templates/projects.hbs should pass TemplateLint.\n\nzubeirdev/templates/projects.hbs\n  3:4  error  Incorrect indentation for `<div>` beginning at L3:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:8  error  Incorrect indentation for `<div>` beginning at L4:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  32:8  error  Incorrect indentation for `<div>` beginning at L32:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  5:12  error  Incorrect indentation for `<br>` beginning at L5:C12. Expected `<br>` to be at an indentation of 10 but was found at 12.  block-indentation\n  6:12  error  Incorrect indentation for `<br>` beginning at L6:C12. Expected `<br>` to be at an indentation of 10 but was found at 12.  block-indentation\n  7:12  error  Incorrect indentation for `<h1>` beginning at L7:C12. Expected `<h1>` to be at an indentation of 10 but was found at 12.  block-indentation\n  8:12  error  Incorrect indentation for `{{#link-to}}` beginning at L8:C12. Expected `{{#link-to}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  11:12  error  Incorrect indentation for `{{#link-to}}` beginning at L11:C12. Expected `{{#link-to}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  14:12  error  Incorrect indentation for `<a>` beginning at L14:C12. Expected `<a>` to be at an indentation of 10 but was found at 12.  block-indentation\n  15:12  error  Incorrect indentation for `<br>` beginning at L15:C12. Expected `<br>` to be at an indentation of 10 but was found at 12.  block-indentation\n  16:12  error  Incorrect indentation for `<br>` beginning at L16:C12. Expected `<br>` to be at an indentation of 10 but was found at 12.  block-indentation\n  17:12  error  Incorrect indentation for `<br>` beginning at L17:C12. Expected `<br>` to be at an indentation of 10 but was found at 12.  block-indentation\n  18:12  error  Incorrect indentation for `<br>` beginning at L18:C12. Expected `<br>` to be at an indentation of 10 but was found at 12.  block-indentation\n  19:12  error  Incorrect indentation for `<div>` beginning at L19:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  20:16  error  Incorrect indentation for `{{#ember-scrollable}}` beginning at L20:C16. Expected `{{#ember-scrollable}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  33:12  error  Incorrect indentation for `<div>` beginning at L33:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  34:16  error  Incorrect indentation for `<div>` beginning at L34:C16. Expected `<div>` to be at an indentation of 14 but was found at 16.  block-indentation\n  35:16  error  Incorrect indentation for `<div>` beginning at L35:C16. Expected `<div>` to be at an indentation of 14 but was found at 16.  block-indentation\n  36:20  error  Incorrect indentation for `{{#if}}` beginning at L36:C20. Expected `{{#if}}` to be at an indentation of 18 but was found at 20.  block-indentation\n  50:20  error  Incorrect indentation for `{{#if}}` beginning at L50:C20. Expected `{{#if}}` to be at an indentation of 18 but was found at 20.  block-indentation\n  64:20  error  Incorrect indentation for `{{#if}}` beginning at L64:C20. Expected `{{#if}}` to be at an indentation of 18 but was found at 20.  block-indentation\n  78:20  error  Incorrect indentation for `{{#if}}` beginning at L78:C20. Expected `{{#if}}` to be at an indentation of 18 but was found at 20.  block-indentation\n  91:20  error  Incorrect indentation for `{{#if}}` beginning at L91:C20. Expected `{{#if}}` to be at an indentation of 18 but was found at 20.  block-indentation\n  107:20  error  Incorrect indentation for `{{#if}}` beginning at L107:C20. Expected `{{#if}}` to be at an indentation of 18 but was found at 20.  block-indentation\n  124:20  error  Incorrect indentation for `{{#if}}` beginning at L124:C20. Expected `{{#if}}` to be at an indentation of 18 but was found at 20.  block-indentation\n  92:20  error  Incorrect indentation for `<div>` beginning at L92:C20. Expected `<div>` to be at an indentation of 22 but was found at 20.  block-indentation\n  94:139  error  Incorrect indentation for `a` beginning at L93:C22. Expected `</a>` ending at L94:C139 to be at an indentation of 22 but was found at 135.  block-indentation\n  93:76  error  Incorrect indentation for `<img>` beginning at L93:C76. Expected `<img>` to be at an indentation of 24 but was found at 76.  block-indentation\n  108:20  error  Incorrect indentation for `<div>` beginning at L108:C20. Expected `<div>` to be at an indentation of 22 but was found at 20.  block-indentation\n  110:94  error  Incorrect indentation for `a` beginning at L109:C22. Expected `</a>` ending at L110:C94 to be at an indentation of 22 but was found at 90.  block-indentation\n  109:78  error  Incorrect indentation for `<img>` beginning at L109:C78. Expected `<img>` to be at an indentation of 24 but was found at 78.  block-indentation\n  114:26  error  Incorrect indentation for `a` beginning at L112:C124. Expected `</a>` ending at L114:C26 to be at an indentation of 124 but was found at 22.  block-indentation\n  113:24  error  Incorrect indentation for `<i>` beginning at L113:C24. Expected `<i>` to be at an indentation of 126 but was found at 24.  block-indentation\n  125:20  error  Incorrect indentation for `<div>` beginning at L125:C20. Expected `<div>` to be at an indentation of 22 but was found at 20.  block-indentation\n  127:93  error  Incorrect indentation for `a` beginning at L126:C22. Expected `</a>` ending at L127:C93 to be at an indentation of 22 but was found at 89.  block-indentation\n  126:77  error  Incorrect indentation for `<img>` beginning at L126:C77. Expected `<img>` to be at an indentation of 24 but was found at 77.  block-indentation\n  132:26  error  Incorrect indentation for `a` beginning at L129:C111. Expected `</a>` ending at L132:C26 to be at an indentation of 111 but was found at 22.  block-indentation\n  131:24  error  Incorrect indentation for `<i>` beginning at L131:C24. Expected `<i>` to be at an indentation of 113 but was found at 24.  block-indentation\n  14:12  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  38:24  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  40:116  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  52:24  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  54:111  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  66:24  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  68:108  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  80:24  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  82:115  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  93:22  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  97:27  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  109:22  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  112:124  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  126:22  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  129:111  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  19:17  error  elements cannot have inline styles  no-inline-styles\n  21:79  error  elements cannot have inline styles  no-inline-styles\n  22:83  error  elements cannot have inline styles  no-inline-styles\n  23:79  error  elements cannot have inline styles  no-inline-styles\n  24:77  error  elements cannot have inline styles  no-inline-styles\n  25:87  error  elements cannot have inline styles  no-inline-styles\n  26:87  error  elements cannot have inline styles  no-inline-styles\n  27:77  error  elements cannot have inline styles  no-inline-styles\n  40:166  error  elements cannot have inline styles  no-inline-styles\n  42:90  error  elements cannot have inline styles  no-inline-styles\n  44:88  error  elements cannot have inline styles  no-inline-styles\n  46:90  error  elements cannot have inline styles  no-inline-styles\n  54:164  error  elements cannot have inline styles  no-inline-styles\n  56:90  error  elements cannot have inline styles  no-inline-styles\n  58:88  error  elements cannot have inline styles  no-inline-styles\n  60:90  error  elements cannot have inline styles  no-inline-styles\n  68:165  error  elements cannot have inline styles  no-inline-styles\n  70:90  error  elements cannot have inline styles  no-inline-styles\n  72:88  error  elements cannot have inline styles  no-inline-styles\n  74:90  error  elements cannot have inline styles  no-inline-styles\n  82:172  error  elements cannot have inline styles  no-inline-styles\n  83:90  error  elements cannot have inline styles  no-inline-styles\n  85:88  error  elements cannot have inline styles  no-inline-styles\n  87:90  error  elements cannot have inline styles  no-inline-styles\n  97:78  error  elements cannot have inline styles  no-inline-styles\n  99:88  error  elements cannot have inline styles  no-inline-styles\n  101:86  error  elements cannot have inline styles  no-inline-styles\n  103:88  error  elements cannot have inline styles  no-inline-styles\n  112:177  error  elements cannot have inline styles  no-inline-styles\n  116:88  error  elements cannot have inline styles  no-inline-styles\n  118:86  error  elements cannot have inline styles  no-inline-styles\n  120:88  error  elements cannot have inline styles  no-inline-styles\n  130:66  error  elements cannot have inline styles  no-inline-styles\n  134:88  error  elements cannot have inline styles  no-inline-styles\n  136:86  error  elements cannot have inline styles  no-inline-styles\n  138:88  error  elements cannot have inline styles  no-inline-styles\n');
  });
});
define("zubeirdev/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/projects-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/projects-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/about-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/projects-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/projects-test.js should pass ESLint\n\n');
  });
});
define("zubeirdev/tests/test-helper", ["zubeirdev/app", "zubeirdev/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("zubeirdev/tests/unit/controllers/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:index');
      assert.ok(controller);
    });
  });
});
define("zubeirdev/tests/unit/controllers/projects-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | projects', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:projects');
      assert.ok(controller);
    });
  });
});
define("zubeirdev/tests/unit/routes/about-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | about', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about');
      assert.ok(route);
    });
  });
});
define("zubeirdev/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("zubeirdev/tests/unit/routes/projects-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | projects', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:projects');
      assert.ok(route);
    });
  });
});
define('zubeirdev/config/environment', [], function() {
  var prefix = 'zubeirdev';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('zubeirdev/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
