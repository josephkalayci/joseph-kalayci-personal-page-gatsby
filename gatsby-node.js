exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /es5.js/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

/* exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type WordpressYoastMeta @dontInfer {
      property: String
      content: String
    }

    type wordpress__POST implements Node @infer {
      yoast_meta: [WordpressYoastMeta]
    }
  `
  createTypes(typeDefs)
}
 */
