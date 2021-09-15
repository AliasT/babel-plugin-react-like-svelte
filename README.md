# babel-plugin-react-like-svelte
svelte style react


```js
function App() {
  let $a = useState(0);
  
  const onClick = () => {
    $a = $a + 1;
    $a = function s() {
      return 10;
    };
  }

  return <div onClick={onClick}>{$a}</div>;
}

```
