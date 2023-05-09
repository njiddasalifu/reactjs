
import './App.css';
//prodect category function
function ProductCategoryRow({ category}){
  return(
    <tr>
      <th colSpan="2">
          {category}
      </th>
    </tr>
  );
}

//product row funtion
function ProductRow({ product }){
  const name= product.stocked ? product.name:
  <span style={{color: 'red'}}>
    {product.name}
  </span>;
  return(
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

//

function App() {
  return (
    <>
    Hello
    </>
  );
}

export default App;
