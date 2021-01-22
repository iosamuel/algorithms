# JSON Tree to HTML List

En este problema vas a crear una función que reciba como parametro un arbol en JSON que representa la estructura de una lista en HTML y convertirla a un string de HTML.

> ### **jsonTreeTOHTMLList(data, indentation)**
>
> ---
>
> **Parameters**
>
> - _data_: **_String_** - Un JSON valido que representa la estructura arbol de una lista.
> - _indentation_: **_Number_** - El numero de identacion para agregar a cada nivel del HTML.
>   **Return Value**
>   Un string con HTML valido que corresponde a la `data`, identado por `indendtation` en cada nivel.
>
> **Input**
>
> La entrada es un JSON válido en `data` que contiene las siguientes propiedades:
>
> - Cada nodo puede tener las siguientes _keys_
>   - `"tag"`: Que puede ser `"ul"`, `"ol"` o `"li"`, representando una lista o un item de la lista. Este _key_ siempre va a estar presente en todos los nodos.
>   - `"text"`: Texto plano. Este _key_ solo existe en elementos `"li"`
>   - `"children"`: Un array con estructuras de nodos que pueden tener las propiedades aqui listadas (`"tag"`, `"text"` o incluso más `"children"`)
> - `"li"` nunca tendrá hijos `"li"`, y `"ul"`/`"ol"` nunca tendrá hijos `"ul"`/`"ol"`
> - La raíz de la estructura siempre será un `"ul"`/`"ol"`.

---

```js
// Ejemplo
const data = {
  tag: "ul",
  children: [
    {
      tag: "li",
      text: "hello"
    },
    {
      tag: "li",
      text: "world"
    }
  ]
};

// Salida con identacion 4
jsonTreeToHTMLList(data, 4);
`
<ul>
    <li>
        hello
    </li>
    <li>
        world
    </li>
</ul>
`;

// Salida con identacion 1
jsonTreeToHTMLList(data, 1);
`
<ul>
 <li>
  hello
 </li>
 <li>
  world
 </li>
</ul>
`;
```

```js
// Ejemplo con hijos anidados
const data = {
  tag: "ul",
  children: [
    {
      tag: "li",
      text: "item 1",
      children: [
        {
          tag: "ul",
          children: [
            {
              tag: "li",
              text: "item 2"
            },
            {
              tag: "li",
              text: "item 3"
            }
          ]
        }
      ]
    }
  ]
};

// Salida
jsonTreeToHTMLList(data, 1);
`
<ul>
 <li>
  item 1
  <ul>
   <li>
    item 2
   </li>
   <li>
    item 3
   </li>
  </ul>
 </li>
</ul>
`;
```

```js
// Ejemplo con hijos anidados (complejo)
const data = {
  tag: "ul",
  children: [
    {
      tag: "li",
      text: "item 1",
      children: [
        {
          tag: "ul",
          children: [
            {
              tag: "li",
              text: "item 2",
              children: [
                {
                  tag: "ol",
                  children: [
                    {
                      tag: "li",
                      text: "item 3"
                    }
                  ]
                }
              ]
            },
            {
              tag: "li",
              text: "item 4"
            }
          ]
        }
      ]
    },
    {
      tag: "li",
      text: "item 5"
    }
  ]
};

// Salida
jsonTreeToHTMLList(data, 2);
`
<ul>
  <li>
    item 1
    <ul>
      <li>
        item 2
        <ol>
          <li>
            item 3
          </li>
        </ol>
      </li>
      <li>
        item 4
      </li>
    </ul>
  </li>
  <li>
    item 5
  </li>
</ul>
`;
```

#### Este es un ejercicio sacado de qualified.io

---

## ¡Buena suerte!
