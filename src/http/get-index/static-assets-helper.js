module.exports = function StaticAssetsHelper (image) {
  // This helper demonstrates how to use your Begin CDN
  //  as well as local development and staging previews of static assets
  return process.env.NODE_ENV === 'production'
    ? `${process.env.BEGIN_STATIC_EDGE}/${image}` // CDN
    : `/_static/${image}` // Handles staging preview and local use cases
}
