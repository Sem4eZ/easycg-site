interface Service {
  type: string
  name: string
  nameExplanation?: string
  description: string
}

export const services: Service[] = [
  {
    type: 'mobile',
    name: 'mobile apps',
    description:
      'native mobile apps for IOS & Android. zero-code solutions for Start Up ',
  },
  {
    type: 'web',
    name: 'WEB',
    description: `Lorem ipsum, <b>dolor sit amet consectetur adipisicing elit.</b> Quisquam quae veniam quas, labore velit rem minus quasi doloremque eum. Adipisci aliquam laboriosam rerum perspiciatis illo id veniam iste blanditiis ullam.`,
  },
  {
    type: 'CGI',
    name: 'CGI',
    description: `Lorem ipsum, <b>dolor sit amet consectetur adipisicing elit.</b> Quisquam quae veniam quas, labore velit rem minus quasi doloremque eum. Adipisci aliquam laboriosam rerum perspiciatis illo id veniam iste blanditiis ullam.`,
  },
  {
    type: 'AR',
    name: 'AR',
    nameExplanation: '(aguamented reality)',
    description: `Lorem ipsum, <b>dolor sit amet consectetur adipisicing elit.</b> Quisquam quae veniam quas, labore velit rem minus quasi doloremque eum. Adipisci aliquam laboriosam rerum perspiciatis illo id veniam iste blanditiis ullam.`,
  },
  {
    type: 'VR',
    name: 'VR',
    nameExplanation: '(virtual reality)',
    description: `Lorem ipsum, <b>dolor sit amet consectetur adipisicing elit.</b> Quisquam quae veniam quas, labore velit rem minus quasi doloremque eum. Adipisci aliquam laboriosam rerum perspiciatis illo id veniam iste blanditiis ullam.`,
  },
  {
    type: 'UX/ UI',
    name: 'UX/ UI',
    description: `Lorem ipsum, <b>dolor sit amet consectetur adipisicing elit.</b> Quisquam quae veniam quas, labore velit rem minus quasi doloremque eum. Adipisci aliquam laboriosam rerum perspiciatis illo id veniam iste blanditiis ullam.`,
  },
]
