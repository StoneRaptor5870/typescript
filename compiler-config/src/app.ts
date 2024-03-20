// tsc -w for continuous compilation
// tsc --init  to create tsconfig.json file

// sourceMap: true creates .js.map file which helps us to show .ts files in browser sources in dev tools

// outDir: "./dist"  creates files in the path for the outDir

const button = document.querySelector('button')!;

button.addEventListener('click', () => {
  console.log('Clicked!');
});