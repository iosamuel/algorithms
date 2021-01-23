const queue = [];
// .push()
// .splice(0, 1)

const jsonTreeToHTMLList = (data, indentation) => {
  data = JSON.parse(data);

  let html = `<${data.tag}>\n`;

  // let childrenText = "";
  data.children.forEach(child => {
    // childrenText += parseChildren(child, indentation);
    parseChildren(child, indentation);
  });

  while (queue.length) {
    html += queue.splice(0, 1);
  }

  // html += childrenText;

  html += `</${data.tag}>`;
  return html;
};

function parseChildren(child, indentation, index = 1) {
  // let childrenText = "";

  let text = "";
  if (child.text) {
    text = child.text + "\n";
    text = text.padStart(text.length + indentation * (index + 1), " ");
  }

  let [newStartTag, newEndTag] = [`<${child.tag}>\n`, `</${child.tag}>\n`];
  // newEndTag = newEndTag.padStart(newEndTag.length + indentation * index, " ");

  queue.push(newStartTag.padStart(newStartTag.length + indentation * index, " "));

  queue.push(text);

  if (child.children) {
    child.children.forEach(child => {
      // text += parseChildren(child, indentation, index + 1);
      parseChildren(child, indentation, index + 1);
    });
  }

  queue.push(newEndTag.padStart(newEndTag.length + indentation * index, " "));

  // const newChildTag = newStartTag + text + newEndTag;
  // childrenText += newChildTag.padStart(newChildTag.length + indentation * index, " ");

  // return childrenText;
  return;
}

module.exports = {
  jsonTreeToHTMLList
};
