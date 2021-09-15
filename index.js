const t = require("@babel/types");

/**
 * @param {import('@babel/types')} types
 * @returns
 */
module.exports = function () {
  return {
    visitor: {
      "ReferencedIdentifier|BindingIdentifier"(path, state) {
        const name = path.node.name;
        // TODO: 严格检查
        if (name.startsWith("$")) {
          let funcname = "set" + name;
          if (path.parent.type === "VariableDeclarator") {
            // TODO: 过略其他节点
            path.replaceWith(
              t.arrayPattern([t.identifier(name), t.identifier(funcname)])
            );
            return;
          }

          if (path.parent.type === "AssignmentExpression") {
            path.parentPath.replaceWith(
              t.callExpression(t.identifier(funcname), [path.parent.right])
            );
          }
        }
      },
      AssignmentExpression(path) {},
    },
  };
};
