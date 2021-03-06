const
  fs = require('fs'),
  { resolve } = require('path'),
  opn = require('opn')

const
  src = resolve(__dirname, '../dist'),
  dest = resolve(__dirname, '../dev-umd/dist')

if (!fs.existsSync(src)) {
  console.error('ERROR: please "yarn build" or "npm run build" first')
  process.exit(0)
}

if (!fs.existsSync(dest)) {
  fs.symlinkSync(src, dest, 'dir')
}

opn(
  resolve(__dirname, '../dev-umd/index.mat.umd.html'),
  { wait: false }
)
