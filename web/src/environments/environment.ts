// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  versionCode: 205,
  apiUrl: 'https://testplatform.snapcode.se/relay/test-3.php',
  refreshRate: 30000 // 10 seconds
};
