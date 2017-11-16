const util = require('util');
const vm = require('vm');

console.log(`vm-->>${vm}`);
console.log(`vm-->>${JSON.stringify(vm)}`);

const sandbox = {
    animal: 'cat',
    count: 2
};

const script = new vm.Script('count += 1; name = "kitty";');

const context = new vm.createContext(sandbox);
for (var i = 0; i < 10; ++i) {
    script.runInContext(context);
}

console.log(util.inspect(sandbox));
