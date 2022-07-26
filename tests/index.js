import assert from "assert";
process.env['SERVICE_BINDING_ROOT'] = 'tests/data';
import * as Bindings from '@nebhale/service-bindings'
var bindings = await Bindings.fromServiceBindingRoot();
bindings = await Bindings.filter(bindings, 'test')
assert.strictEqual(bindings.length, 1);
assert.strictEqual(bindings[0].getName(), "test-name")
assert.strictEqual(await Bindings.get(bindings[0], 'type'), "test")
console.log("ok");
