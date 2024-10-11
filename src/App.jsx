import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import './App.css';
import CustomeRoughNotation from './CustomeRoughNotation';
import { elements } from './content';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        textAlign: 'left',
      }}
    >
      {/* {elements.map((element, index) => (
        <CustomeRoughNotation
          key={index}
          type={element.type}
          show={element.show}
          color={element.color}
          brackets={element.brackets}
        >
          {element.content}
        </CustomeRoughNotation>
      ))} */}
      {elements.map((element, index) => (
        <AnnotatedParagraph
          key={index}
          paragraph={element.paragraph}
          annotations={element.annotations}
          Tag={element.tag}
          brackets={element.brackets}
          type={element.type}
        />
      ))}

      {/* <AnnotatedParagraph
        paragraph={paragraph}
        annotations={annotations}
        Tag='div'
        brackets={['left', 'right']}
        type={'bracket'}
      /> */}

      <div>
        <RoughNotationGroup show={true}>
          <RoughNotation type='underline'>Hello,</RoughNotation>
          <RoughNotation type='underline'>This is</RoughNotation>
          <RoughNotation type='underline'>a Test</RoughNotation>
        </RoughNotationGroup>
      </div>
    </div>
  );
}

//
function annotateText(paragraph, annotations) {
  const parts = [];
  let lastIndex = 0;

  annotations.forEach((annotation, i) => {
    const { regex, type, color, show, brackets } = annotation;
    const match = paragraph.slice(lastIndex).match(regex);

    if (match) {
      const startIndex = lastIndex + match.index;

      // Push the text before the annotation
      if (startIndex !== lastIndex) {
        parts.push(paragraph.substring(lastIndex, startIndex));
      }
      // console.log('parts ', parts);

      // Push the annotated text
      parts.push(
        <CustomeRoughNotation
          key={i}
          type={type}
          color={color}
          show={show}
          brackets={brackets}
        >
          {match[0]}
        </CustomeRoughNotation>
      );

      lastIndex = startIndex + match[0].length;
    }
  });

  // Push any remaining text after the last annotation
  if (lastIndex < paragraph.length) {
    parts.push(paragraph.substring(lastIndex));
  }

  return parts;
}

function AnnotatedParagraph({
  type,
  paragraph,
  annotations,
  Tag = 'p',
  brackets,
}) {
  const annotatedContent = annotateText(paragraph, annotations);

  return (
    <CustomeRoughNotation type={type} show={true} brackets={brackets}>
      {annotatedContent}
    </CustomeRoughNotation>
  );
}

export default App;
