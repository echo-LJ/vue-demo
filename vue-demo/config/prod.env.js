'use strict'

//o¨® ¡Á¡¤?¨®
let BUILD_ENV = process.argv.splice(2)[0];
if (BUILD_ENV !== '--inline') { //¡À¨ª¨º?2??arun dev ??¨¬??¡äpackage.json
	var build_env_map = ['dev', 'test', 'pre', 'prod'];
	if (build_env_map.indexOf(BUILD_ENV) < 0) {
	  console.log('  Build Env with errors, must in (dev,test,pre,prod).\n')
	  process.exit(1)
	}
}

module.exports = {
  NODE_ENV: '"production"',
  BUILD_ENV: '"'+BUILD_ENV+'"'
}
