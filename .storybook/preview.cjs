import '../src/styles/global.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'gray',
    values: [
      {
        name: 'gray',
        value: '#E1E1E6'
      },
      {
        name: 'white',
        value: '#FFFFFF'
      },
      {
        name: 'dark',
        value: '#202024'
      },
    ]
  }
}