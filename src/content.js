// export const elements = [
//   {
//     type: 'underline',
//     show: true,
//     color: 'red',
//     content: 'Hello Rough Notation',
//   },
//   { type: 'circle', show: true, color: 'blue', content: 'Hello circle' },
//   { type: 'highlight', show: true, color: 'green', content: 'Hello circle' },
//   {
//     type: 'bracket',
//     brackets: ['left', 'right'],
//     show: true,
//     content:
//       'Hello circle Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquam doloribus nam, iste pariatur unde voluptatem suscipit magnam iusto tenetur ab! Libero necessitatibus corporis sequi ea praesentium distinctio dolorum aliquam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae tenetur unde veniam tempora sint, odit assumenda dolore ullam distinctio quas sit officiis asperiores praesentium at vel, quidem nisi veritatis incidunt eveniet recusandae reprehenderit mollitia. Ipsum molestiae aspernatur ullam ex quae architecto harum non laboriosam necessitatibus modi similique dolorum repudiandae magni saepe vel, fuga tempora debitis vero eveniet a? Totam, inventore cum? Vel voluptate iusto eveniet quaerat! Corrupti praesentium repellendus vel consequatur eveniet, soluta, laboriosam nemo mollitia delectus alias ipsam! Distinctio sunt, fugiat alias repudiandae eveniet ab qui asperiores harum nihil laboriosam nam dicta id temporibus, quam iusto? Accusamus, illo labore!',
//   },
// ];

export const elements = [
  {
    paragraph: 'Hello Rough Notation.',
    annotations: [
      {
        regex: /Hello Rough Notation/,
        type: 'underline',
        show: true,
        color: 'red',
        tag: 'div',
      },
    ],
    tag: 'div',
    brackets: ['left', 'right'],
    type: 'bracket',
  },
  {
    paragraph: 'Hello Rough Notation.',
    annotations: [
      {
        regex: /Hello Rough Notation/,
        type: 'bracket',
        brackets: ['left', 'right'],
        show: true,
        color: 'red',
        tag: 'div',
      },
    ],
    tag: 'div',
    brackets: [],
    type: '',
  },
  {
    paragraph: 'Hello circle.',
    annotations: [
      {
        regex: /Hello circle/,
        type: 'circle',
        show: true,
        color: 'blue',
        tag: 'div',
      },
    ],
    tag: 'div',
    brackets: [],
    type: '',
  },
  {
    paragraph: 'Hello circle again!',
    annotations: [
      {
        regex: /Hello circle again!/,
        type: 'highlight',
        show: true,
        color: 'green',
        tag: 'div',
      },
    ],
    tag: 'div',
    brackets: [],
    type: '',
  },
  {
    paragraph:
      'Hello dragon Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquam doloribus nam, iste pariatur unde voluptatem suscipit magnam iusto tenetur ab! Libero necessitatibus corporis sequi ea praesentium distinctio dolorum aliquam!',
    annotations: [
      { regex: /Hello dragon/, type: 'circle', show: true, color: 'blue' },
      {
        regex: /Libero/,
        type: 'bracket',
        show: true,
        color: 'blue',
        brackets: ['left', 'right'],
        tag: 'span',
      },
      {
        regex: /Lorem ipsum dolor/,
        type: 'highlight',
        show: true,
        color: 'green',
        tag: 'span',
      },
      {
        regex: /iusto tenetur ab!/,
        type: 'underline',
        show: true,
        color: 'red',
        tag: 'span',
      },
      {
        regex: /praesentium distinctio/,
        type: 'circle',
        show: true,
        color: 'red',
        tag: 'span',
      },
    ],
    tag: 'div',
    brackets: ['left', 'right'],
    type: 'bracket',
  },
];
