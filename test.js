// TODO: tests

function App() {
  // VariableDeclarator
  // BindingIdentifier
  let $a = useState(0);

  // [$a, set$a] = useState(0)
  function onClick() {
    // AssignmentExpression
    // BindingIdentifier, ReferencedIdentifier
    $a = $a + 1;

    $a = function s() {
      return 10;
    };
  }

  return <div onClick={onClick}>{$a}</div>;
}
