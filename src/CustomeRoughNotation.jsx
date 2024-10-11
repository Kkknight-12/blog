import React from 'react';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

// export default function CustomeRoughNotation({
//   type,
//   show,
//   brackets,
//   color,
//   children,
//   Tag = 'div',
//   ...rest
// }) {
//   return (
//     <Tag {...rest}>
//       <RoughNotation type={type} show={show} brackets={brackets} color={color}>
//         {children}
//       </RoughNotation>
//     </Tag>
//   );
// }

export default function CustomeRoughNotation({
  type,
  show,
  brackets,
  color,
  children,
  ...rest
}) {
  return (
    <RoughNotation  type={type} show={show} brackets={brackets} color={color}>
     {children}
    </RoughNotation>
  );
}
