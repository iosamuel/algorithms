// @ts-nocheck
const { jsonTreeToHTMLList } = require("./main");

describe("JSON Tree To HTML List", () => {
  it("Trabaja en una estructura simple", () => {
    const data = `{
      "tag": "ul",
      "children": [
        {
          "tag": "li",
          "text": "hello"
        },
        {
          "tag": "li",
          "text": "world"
        }
      ]
    }`;

    const expected = `<ul>
    <li>
        hello
    </li>
    <li>
        world
    </li>
</ul>`;

    expect(jsonTreeToHTMLList(data, 4)).toEqual(expected);
  });

  it("Trabaja en una estructura con hijos anidados", () => {
    const data = `{
      "tag": "ul",
      "children": [
        {
          "tag": "li",
          "text": "item 1",
          "children": [
            {
              "tag": "ul",
              "children": [
                {
                  "tag": "li",
                  "text": "item 2"
                },
                {
                  "tag": "li",
                  "text": "item 3"
                }
              ]
            }
          ]
        }
      ]
    }`;

    const expected = `<ul>
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
</ul>`;

    expect(jsonTreeToHTMLList(data, 1)).toEqual(expected);
  });

  it("Trabaja en una estructura con hijos anidados (compleja)", () => {
    const data = `{
      "tag": "ul",
      "children": [
        {
          "tag": "li",
          "text": "item 1",
          "children": [
            {
              "tag": "ul",
              "children": [
                {
                  "tag": "li",
                  "text": "item 2",
                  "children": [
                    {
                      "tag": "ol",
                      "children": [
                        {
                          "tag": "li",
                          "text": "item 3"
                        }
                      ]
                    }
                  ]
                },
                {
                  "tag": "li",
                  "text": "item 4"
                }
              ]
            }
          ]
        },
        {
          "tag": "li",
          "text": "item 5"
        }
      ]
    }`;

    const expected = `<ul>
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
</ul>`;

    expect(jsonTreeToHTMLList(data, 2)).toEqual(expected);
  });
});
