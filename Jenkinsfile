node {
 stage 'Checkout Repository'
 git url: 'https://github.com/stackroute-hybrid/NewsPackApp_warriors.git', branch: 'master'

 stage 'Installing  Dependencies'
 sh "(cd ~/jobs/stackroute-hybrid/jobs/NewsPackApp_warriors/branches/master/workspace/client && npm install)"
 sh "(cd ~/jobs/stackroute-hybrid/jobs/NewsPackApp_warriors/branches/master/workspace/server && npm install)"

 stage 'Browserify and Transpilation'

 sh "(cd ~/jobs/stackroute-hybrid/jobs/NewsPackApp_warriors/branches/master/workspace/server && rm dist -rf)"
 sh "(cd ~/jobs/stackroute-hybrid/jobs/NewsPackApp_warriors/branches/master/workspace/server && mkdir dist -p)"
 sh "(cd ~/jobs/stackroute-hybrid/jobs/NewsPackApp_warriors/branches/master/workspace/client && node node_modules/gulp/bin/gulp.js browserify)"
 sh "(cd ~/jobs/stackroute-hybrid/jobs/NewsPackApp_warriors/branches/master/workspace/client && node node_modules/gulp/bin/gulp.js copy)"

 stage 'Testing'
 sh "(cd ~/jobs/stackroute-hybrid/jobs/NewsPackApp_warriors/branches/master/workspace/server && node_modules/mocha/bin/mocha test)"

 stage 'Packaging for deployment'
 sh "(cd ~/jobs/stackroute-hybrid/jobs/NewsPackApp_warriors/branches/master/workspace/server && rm -r node_modules)"
 sh "mkdir dist -p"
 sh "cp -r {.dockerignore,docker-compose.yml,Dockerfile,server} dist"
 sh "cd dist && tar --ignore-failed-read -ztvf NewsPackApp_warriors-project_current.tar.gz *"
 step([$class: 'ArtifactArchiver', artifacts: 'dist/*.tar.gz', fingerprint: true])
}
