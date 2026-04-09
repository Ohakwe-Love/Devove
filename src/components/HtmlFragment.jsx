export default function HtmlFragment({ html }) {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
