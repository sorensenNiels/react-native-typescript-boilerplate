module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],

    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@Actions': './src/Actions',
          '@Components': './src/Components',
          '@Styled': './src/Styled',
          '@Definitions': './src/Definitions',
          '@Interfaces': './src/Interfaces',
          '@I18n': './src/I18n',
          '@Router': './src/Router',
          '@Services': './src/Services',
          '@Redux': './src/Redux',
          '@Scenes': './scenes'
        }
      }
    ]
  ]
};
