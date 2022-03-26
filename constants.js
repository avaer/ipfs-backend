const MAX_SIZE = 100 * 1024 * 1024;
const IPFS_HTTP_PORT = 8080;
const IPFS_PORT = 5001;
const ALLOWED_METHODS = [
  'GET',
  'HEAD'
]

const ALLOWED_HOSTS = [
  'ipfs.webaverse.com',
  'ipfs.exokit.org'
]

module.exports = {
  MAX_SIZE,
  IPFS_HTTP_PORT,
  IPFS_PORT,
  ALLOWED_METHODS,
  ALLOWED_HOSTS
};