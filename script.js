marked.setOptions({
  breaks: true,
  gfmL: true
});

class App extends React.Component {
  constructor({ placeholderMarkdown }) {
    super(placeholderMarkdown);
    this.state = {
      markdown: placeholderMarkdown
    };
    this.setMarkdown = this.setMarkdown.bind(this);
  }
  htmlOutput() {
    return { __html: marked(this.state.markdown) };
  }
  setMarkdown(e) {
    this.setState({ markdown: e.target.value });
  }
  render() {
    return (
      <div>
        <h1 id="title" class="text-center">
          React Markdown Previewer
        </h1>
        <div id="container">
          <h2>Editor</h2>
          <Editor value={this.state.markdown} onChange={this.setMarkdown} />
          <h2>Preview</h2>
          <Previewer htmlOutput={this.htmlOutput()} />
        </div>
      </div>
    );
  }
}

const Editor = ({ value, onChange }) => {
  return (
    <textarea
      id="editor"
      rows="20"
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

const Previewer = ({ htmlOutput }) => {
  return <div dangerouslySetInnerHTML={htmlOutput} id="preview" />;
};

const placeholderMarkdown = `# Header 
## Sub-header
A Link: [Joey Vega](https://freecodecamp.com/joeyvega)
\`code\`
\`\`\`
code block
\`\`\`
- list
> Block Quote
**Bold**
![Placeholder Image](https://via.placeholder.com/150)
A paragraph with a
line break`;

ReactDOM.render(
  <App placeholderMarkdown={placeholderMarkdown} />,
  document.getElementById("app")
);
