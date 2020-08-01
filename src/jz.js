import Config from "./config.js";

const methods = {};
const components = {};
const filters = {};
const direactors = {};

Config.packages.map((item) => {
  let cptName = item.name.toLowerCase();
  let cpt = require(`../src/packages/${cptName}/index.js`).default;
  require(`../src/packages/${cptName}/${cptName}.less`);
  if (!cpt) {
    return;
  }

  if (item.type === "component") {
    components[cptName] = cpt;
  }
});

const install = function(Vue, otps = {}) {
  console.log(components);
  if (install.installed) {
    return;
  }

  for (let cptName in methods) {
    console.log(cptName);
    Vue.$prototype["$" + cptName.toLowerCase()] = methods[cptName];
  }

  for (let cptName in components) {
    if (components[cptName] && components[cptName].name) {
      Vue.component(components[cptName].name, components[cptName]);
    }
  }
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  ...components,
  ...methods,
  install,
};
