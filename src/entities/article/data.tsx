import { Article } from './types'

const IMAGES_PATH = '/assets/images/articles/'

export const articles: Article[] = [
  {
    id: '1',
    name: '11 UI/UX trends',
    description:
      '*name* likes playing XBOX and read digital news, just see, what’s a beautiful face',
    image: {
      path: IMAGES_PATH,
      name: 'article-1-detail-preview',
      fileType: 'jpg',
      alt: 'abstract man',
    },
    date: new Date('2021-11-12'),
    type: 'UI/UX design',
    detailPreviewImage: {
      path: IMAGES_PATH,
      name: 'article-1',
      fileType: 'jpg',
      alt: 'Brand Guideline book',
    },
    remark: [
      'something you shold know about new trends',
      'but not always follow',
    ],
    content: (
      <>
        <section id="section1">
          <h2>Think About Real Users Needs</h2>
          <p>
            The needs of real users matter, not what you think about it. You may
            think the design is brilliant, but it means nothing if you don’t
            belong to a key audience. The very Concept of UX design implies the
            work of the designer is centered around the “users — product”
            interaction. It means we should understand if our key audience is
            satisfied with the product&nbsp;
            <a href="#section2">Section 222</a>
          </p>
          <p>
            The needs of real users matter, not what you think about it. You may
            think the design is brilliant, but it means nothing if you don’t
            belong to a key audience. The very Concept of UX design implies the
            work of the designer is centered around the “users — product”
            interaction. It means we should understand if our key audience is
            satisfied with the product
          </p>
        </section>

        <section id="section2">
          <h2>Section 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            justo id massa malesuada, id viverra magna malesuada. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt.
          </p>
        </section>

        <section id="section3">
          <h2>Section 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            justo id massa malesuada, id viverra magna malesuada. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt.
          </p>
        </section>
      </>
    ),
  },
  {
    id: '2',
    name: '10 UI/UX trends',
    description:
      '*name* likes playing XBOX and read digital news, just see, what’s a beautiful face',
    image: {
      path: IMAGES_PATH,
      name: 'article-1',
      fileType: 'jpg',
      alt: 'abstract man',
    },
    date: new Date('2020-04-12'),
    type: 'UI/UX design',
    detailPreviewImage: {
      path: IMAGES_PATH,
      name: 'article-1-detail-preview',
      fileType: 'jpg',
      alt: 'Brand Guideline book',
    },
    remark: [
      'something you shold know about new trends',
      'but not always follow',
    ],
    content: (
      <>
        <section id="section1">
          <h2>Think About Real Users Needs</h2>
          <p>
            The needs of real users matter, not what you think about it. You may
            think the design is brilliant, but it means nothing if you don’t
            belong to a key audience. The very Concept of UX design implies the
            work of the designer is centered around the “users — product”
            interaction. It means we should understand if our key audience is
            satisfied with the product&nbsp;
            <a href="#section2">Section 2</a>
          </p>
          <p>
            The needs of real users matter, not what you think about it. You may
            think the design is brilliant, but it means nothing if you don’t
            belong to a key audience. The very Concept of UX design implies the
            work of the designer is centered around the “users — product”
            interaction. It means we should understand if our key audience is
            satisfied with the product
          </p>
        </section>

        <section id="section2">
          <h2>Section 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            justo id massa malesuada, id viverra magna malesuada. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt.
          </p>
        </section>

        <section id="section3">
          <h2>Section 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            justo id massa malesuada, id viverra magna malesuada. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt.
          </p>
        </section>
      </>
    ),
  },
  {
    id: '3',
    name: '10 UI/UX trends',
    description:
      '*name* likes playing XBOX and read digital news, just see, what’s a beautiful face',
    image: {
      path: IMAGES_PATH,
      name: 'article-1',
      fileType: 'jpg',
      alt: 'abstract man',
    },
    date: new Date('2021-11-12'),
    type: 'UI/UX design',
    detailPreviewImage: {
      path: IMAGES_PATH,
      name: 'article-1-detail-preview',
      fileType: 'jpg',
      alt: 'Brand Guideline book',
    },
    remark: [
      'something you shold know about new trends',
      'but not always follow',
    ],
    content: (
      <>
        <section id="section1">
          <h2>Think About Real Users Needs</h2>
          <p>
            The needs of real users matter, not what you think about it. You may
            think the design is brilliant, but it means nothing if you don’t
            belong to a key audience. The very Concept of UX design implies the
            work of the designer is centered around the “users — product”
            interaction. It means we should understand if our key audience is
            satisfied with the product&nbsp;
            <a href="#section2">Section 2</a>
          </p>
          <p>
            The needs of real users matter, not what you think about it. You may
            think the design is brilliant, but it means nothing if you don’t
            belong to a key audience. The very Concept of UX design implies the
            work of the designer is centered around the “users — product”
            interaction. It means we should understand if our key audience is
            satisfied with the product
          </p>
        </section>

        <section id="section2">
          <h2>Section 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            justo id massa malesuada, id viverra magna malesuada. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt.
          </p>
        </section>

        <section id="section3">
          <h2>Section 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            justo id massa malesuada, id viverra magna malesuada. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt.
          </p>
        </section>
      </>
    ),
  },
  {
    id: '4',
    name: '10 UI/UX trends',
    description:
      '*name* likes playing XBOX and read digital news, just see, what’s a beautiful face',
    image: {
      path: IMAGES_PATH,
      name: 'article-1',
      fileType: 'jpg',
      alt: 'abstract man',
    },
    date: new Date('2021-11-12'),
    type: 'UI/UX design',
    detailPreviewImage: {
      path: IMAGES_PATH,
      name: 'article-1-detail-preview',
      fileType: 'jpg',
      alt: 'Brand Guideline book',
    },
    remark: [
      'something you shold know about new trends',
      'but not always follow',
    ],
    content: (
      <>
        <section id="section1">
          <h2>Think About Real Users Needs</h2>
          <p>
            The needs of real users matter, not what you think about it. You may
            think the design is brilliant, but it means nothing if you don’t
            belong to a key audience. The very Concept of UX design implies the
            work of the designer is centered around the “users — product”
            interaction. It means we should understand if our key audience is
            satisfied with the product&nbsp;
            <a href="#section2">Section 2</a>
          </p>
          <p>
            The needs of real users matter, not what you think about it. You may
            think the design is brilliant, but it means nothing if you don’t
            belong to a key audience. The very Concept of UX design implies the
            work of the designer is centered around the “users — product”
            interaction. It means we should understand if our key audience is
            satisfied with the product
          </p>
        </section>

        <section id="section2">
          <h2>Section 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            justo id massa malesuada, id viverra magna malesuada. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt.
          </p>
        </section>

        <section id="section3">
          <h2>Section 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            justo id massa malesuada, id viverra magna malesuada. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt. Sed euismod
            augue eget nunc hendrerit, eu aliquam ante tincidunt.
          </p>
        </section>
      </>
    ),
  },
]
